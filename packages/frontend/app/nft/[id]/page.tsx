import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NFTDetail({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image src="/placeholder.svg?height=600&width=600" alt="NFT Image" fill className="rounded-lg object-cover" />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Cosmic Dreamer #{params.id}</h1>
            <p className="text-gray-500">Created by Artist One</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Current Price</p>
            <p className="text-3xl font-bold text-stone-900 dark:text-stone-50">0.5 ETH</p>
          </div>
          <div className="space-y-2">
            <Button className="w-full" size="lg">
              Buy Now
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Make Offer
            </Button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">
              A unique piece from the Cosmic Dreamer collection, representing the convergence of digital art and
              blockchain technology.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Properties</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Background</p>
                <p className="font-medium">Nebula</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Rarity</p>
                <p className="font-medium">Legendary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

