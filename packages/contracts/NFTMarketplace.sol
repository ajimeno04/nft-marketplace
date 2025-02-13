// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NFTCollection
 * @dev ERC1155 contract that allows the creation of NFTs with associated metadata (image and description).
 * Each deployment represents a distinct NFT collection. This contract adheres to @contracts.mdc rules.
 */
contract NFTCollection is ERC1155, Ownable {
    uint256 private _currentTokenId = 0;

    // Mappings to store metadata for each token
    mapping(uint256 => string) public tokenImages;
    mapping(uint256 => string) public tokenDescriptions;

    event NFTMinted(uint256 indexed tokenId, address indexed creator, string image, string description);

    /**
     * @dev Constructor sets the base URI for the collection.
     * @param uri_ Base URI for all tokens
     */
    constructor(string memory uri_) ERC1155(uri_) {}

    /**
     * @notice Mint a new NFT with associated image and description.
     * @param image URL or IPFS hash pointing to the image.
     * @param description Description of the NFT.
     * @return tokenId The newly minted token's identifier.
     */
    function mintNFT(string memory image, string memory description) public onlyOwner returns (uint256) {
        uint256 tokenId = _currentTokenId;
        _mint(msg.sender, tokenId, 1, "");
        tokenImages[tokenId] = image;
        tokenDescriptions[tokenId] = description;
        _currentTokenId++;
        emit NFTMinted(tokenId, msg.sender, image, description);
        return tokenId;
    }
}

/**
 * @title NFTMarketplace
 * @dev Contract for listing, buying, and canceling NFT listings from any ERC1155 collection.
 * Implements secure transactions and follows @contracts.mdc rules.
 */
contract NFTMarketplace is Ownable {
    struct Listing {
        address seller;
        uint256 price; // Price in wei
    }

    // Mapping: NFT contract address => tokenId => Listing
    mapping(address => mapping(uint256 => Listing)) public listings;

    event NFTListed(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price);
    event NFTSold(address indexed nftContract, uint256 indexed tokenId, address buyer, uint256 price);
    event NFTUnlisted(address indexed nftContract, uint256 indexed tokenId, address seller);

    /**
     * @notice List an NFT for sale.
     * @param nftContract Address of the NFT collection contract.
     * @param tokenId Token identifier.
     * @param price Sale price in wei.
     */
    function listNFT(address nftContract, uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be greater than zero");
        // Verify ownership
        require(ERC1155(nftContract).balanceOf(msg.sender, tokenId) >= 1, "Caller does not own the NFT");
        listings[nftContract][tokenId] = Listing(msg.sender, price);
        emit NFTListed(nftContract, tokenId, msg.sender, price);
    }

    /**
     * @notice Buy a listed NFT.
     * @param nftContract Address of the NFT collection contract.
     * @param tokenId Token identifier.
     */
    function buyNFT(address nftContract, uint256 tokenId) external payable {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.price > 0, "NFT not listed for sale");
        require(msg.value >= listing.price, "Insufficient funds");
        // Remove listing before external calls to prevent reentrancy
        delete listings[nftContract][tokenId];
        // Transfer funds to seller
        payable(listing.seller).transfer(listing.price);
        // Transfer NFT from seller to buyer
        ERC1155(nftContract).safeTransferFrom(listing.seller, msg.sender, tokenId, 1, "");
        emit NFTSold(nftContract, tokenId, msg.sender, listing.price);
    }

    /**
     * @notice Cancel an NFT listing.
     * @param nftContract Address of the NFT collection contract.
     * @param tokenId Token identifier.
     */
    function cancelListing(address nftContract, uint256 tokenId) external {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.seller == msg.sender, "Caller is not the seller");
        delete listings[nftContract][tokenId];
        emit NFTUnlisted(nftContract, tokenId, msg.sender);
    }
} 