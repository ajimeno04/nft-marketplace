import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-2zfk2fLToahdgSVHUewwMXYZxUcGe2.png"
            alt="NowFeelTransformated Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-xl">NFT</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/explore" className="text-sm font-medium hover:text-stone-900 dark:hover:text-stone-50">
            Explore
          </Link>
          <Link href="/collections" className="text-sm font-medium hover:text-stone-900 dark:hover:text-stone-50">
            Collections
          </Link>
          <Link href="/create" className="text-sm font-medium hover:text-stone-900 dark:hover:text-stone-50">
            Create
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Connect Wallet</Button>
        </div>
      </div>
    </nav>
  )
}

