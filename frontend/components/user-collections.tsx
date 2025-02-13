import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function UserCollections({ userId }: { userId: string }) {
  // Mock data (replace with actual data fetching)
  const collections = [
    {
      id: 1,
      name: "Cosmic Dreams",
      description: "A collection of otherworldly digital art",
      image: "/placeholder.svg?height=300&width=300",
      itemCount: 10,
    },
    {
      id: 2,
      name: "Neon Nights",
      description: "Vibrant cityscapes in neon hues",
      image: "/placeholder.svg?height=300&width=300",
      itemCount: 15,
    },
    {
      id: 3,
      name: "Digital Abstractions",
      description: "Abstract forms in the digital realm",
      image: "/placeholder.svg?height=300&width=300",
      itemCount: 8,
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-200">Your Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Link href={`/collection/${collection.id}`} key={collection.id}>
            <Card className="overflow-hidden transition-all hover:scale-105 hover:shadow-lg bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gray-200">{collection.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{collection.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-400">{collection.itemCount} items</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

