import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function UserPurchases({ userId }: { userId: string }) {
  // Mock data (replace with actual data fetching)
  const purchases = [
    {
      id: 1,
      name: "Ethereal Landscape #3",
      creator: "Artist One",
      image: "/placeholder.svg?height=400&width=400",
      price: "0.5 ETH",
    },
    {
      id: 2,
      name: "Cyberpunk Portrait #7",
      creator: "Artist Two",
      image: "/placeholder.svg?height=400&width=400",
      price: "0.8 ETH",
    },
    {
      id: 3,
      name: "Abstract Thoughts #12",
      creator: "Artist Three",
      image: "/placeholder.svg?height=400&width=400",
      price: "0.3 ETH",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-200">Your Purchases</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {purchases.map((nft) => (
          <Link href={`/nft/${nft.id}`} key={nft.id}>
            <Card className="overflow-hidden transition-all hover:scale-105 hover:shadow-lg bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="aspect-square relative">
                  <Image src={nft.image || "/placeholder.svg"} alt={nft.name} fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gray-200">{nft.name}</h3>
                <p className="text-sm text-gray-400">by {nft.creator}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-400">Price paid</span>
                <span className="text-stone-900 font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple dark:text-stone-50">
                  {nft.price}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

