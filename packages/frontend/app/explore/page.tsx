import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NFTGrid } from "@/components/nft-grid"
import { FilterSection } from "@/components/filter-section"
import { Search, SlidersHorizontal } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-glow">
              Explore NFTs
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Discover unique digital assets from talented creators worldwide
            </p>
            <div className="w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  className="w-full bg-black/50 border-gray-800 pl-10 placeholder:text-gray-500 focus:border-neon-purple"
                  placeholder="Search NFTs, collections, or creators"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      </section>

      <div className="container px-4 py-8 md:px-6 relative z-10">
        {/* Filters Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <FilterSection />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              Recently Added
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              Price: Low to High
            </Button>
          </div>
        </div>

        {/* NFT Grid */}
        <NFTGrid />
      </div>
    </div>
  )
}

