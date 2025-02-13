import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function FeaturedNFTs() {
  const nfts = [
    {
      id: 1,
      title: "Cosmic Dreamer #1",
      creator: "Artist One",
      price: "0.5 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      title: "Digital Wave #7",
      creator: "Artist Two",
      price: "0.8 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      title: "Meta Vision #4",
      creator: "Artist Three",
      price: "1.2 ETH",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <Link href={`/nft/${nft.id}`} key={nft.id}>
              <Card className="overflow-hidden transition-transform hover:scale-105">
                <CardHeader>
                  <Image
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.title}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{nft.title}</CardTitle>
                  <p className="text-sm text-gray-500">by {nft.creator}</p>
                </CardContent>
                <CardFooter>
                  <p className="font-bold text-stone-900 dark:text-stone-50">{nft.price}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

