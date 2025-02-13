import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function TrendingCollections() {
  const collections = [
    {
      id: 1,
      title: "Cosmic Collection",
      image: "/placeholder.svg?height=200&width=200",
      nfts: 120,
    },
    {
      id: 2,
      title: "Digital Dreams",
      image: "/placeholder.svg?height=200&width=200",
      nfts: 85,
    },
    {
      id: 3,
      title: "Metaverse Explorers",
      image: "/placeholder.svg?height=200&width=200",
      nfts: 250,
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Trending Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link href={`/collections/${collection.id}`} key={collection.id}>
              <Card className="overflow-hidden transition-transform hover:scale-105">
                <CardHeader>
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{collection.title}</CardTitle>
                  <p className="text-sm text-gray-500">{collection.nfts} NFTs</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

