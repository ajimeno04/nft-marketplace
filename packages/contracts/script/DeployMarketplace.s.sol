pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/NFTMarketplace.sol";

contract DeployMarketplace is Script {
    function run() external {
        // Obtiene la llave privada desde la variable de entorno o usa el valor por defecto de Anvil
        uint256 deployerPrivateKey = vm.envOr("PRIVATE_KEY",
            uint256(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80));
        vm.startBroadcast(deployerPrivateKey);

        // Despliega el contrato NFTCollection con una URI de ejemplo
        NFTCollection collection = new NFTCollection("https://example.com/metadata/");
        // Despliega el contrato NFTMarketplace
        NFTMarketplace marketplace = new NFTMarketplace();

        // Mint 4 NFTs con data mock en la colección
        collection.mintNFT("https://example.com/metadata/image1.png", "Mock NFT #1");
        collection.mintNFT("https://example.com/metadata/image2.png", "Mock NFT #2");
        collection.mintNFT("https://example.com/metadata/image3.png", "Mock NFT #3");
        collection.mintNFT("https://example.com/metadata/image4.png", "Mock NFT #4");

        // Listar en el marketplace cada NFT mintado con un precio de 0.1 ether
        uint256 listPrice = 0.1 ether;
        marketplace.listNFT(address(collection), 0, listPrice);
        marketplace.listNFT(address(collection), 1, listPrice);
        marketplace.listNFT(address(collection), 2, listPrice);
        marketplace.listNFT(address(collection), 3, listPrice);

        vm.stopBroadcast();

        console.log("NFTCollection deployed at:", address(collection));
        console.log("NFTMarketplace deployed at:", address(marketplace));
    }
}
