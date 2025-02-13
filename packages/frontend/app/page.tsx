import { Button } from "@/components/ui/button"
import { FeaturedNFTs } from "@/components/featured-nfts"
import { TrendingCollections } from "@/components/trending-collections"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-primary-light to-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Transform Your Digital Assets
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Create, collect, and trade unique NFTs on the most innovative marketplace
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">
                Start Exploring
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10">
                Create NFT
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FeaturedNFTs />
      <TrendingCollections />
    </div>
  )
}

