import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function FilterSection() {
  return (
    <div className="flex flex-wrap gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            Price Range
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900 border-gray-700">
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Under 1 ETH</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">1-5 ETH</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">5-10 ETH</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Above 10 ETH</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            Category
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900 border-gray-700">
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Art</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Collectibles</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Photography</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Virtual Worlds</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            Blockchain
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900 border-gray-700">
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Ethereum</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Polygon</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800">Solana</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

