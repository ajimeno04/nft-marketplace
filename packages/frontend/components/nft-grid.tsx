import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function NFTGrid() {
  const nfts = [
    {
      id: 1,
      title: "Digital Wave #7",
      creator: "Artist Two",
      price: "0.8 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      title: "Cosmic Dreamer #1",
      creator: "Artist One",
      price: "0.5 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      title: "Meta Vision #4",
      creator: "Artist Three",
      price: "1.2 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      title: "Digital Wave #8",
      creator: "Artist Two",
      price: "0.9 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      title: "Cosmic Dreamer #2",
      creator: "Artist One",
      price: "0.6 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      title: "Meta Vision #5",
      creator: "Artist Three",
      price: "1.3 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {nfts.map((nft) => (
        <Link href={`/nft/${nft.id}`} key={nft.id}>
          <Card className="overflow-hidden transition-all hover:scale-105 hover:shadow-lg bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardHeader className="p-0">
              <div className="aspect-square relative">
                <Image src={nft.image || "/placeholder.svg"} alt={nft.title} fill className="object-cover" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-gray-200">{nft.title}</h3>
              <p className="text-sm text-gray-400">by {nft.creator}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-400">Price</span>
              <span className="text-stone-900 font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple dark:text-stone-50">
                {nft.price}
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

