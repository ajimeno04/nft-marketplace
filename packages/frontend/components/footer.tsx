import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">NowFeelTransformated</h3>
            <p className="text-sm text-gray-500">Transform your digital assets into unique NFTs</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Marketplace</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/explore" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Create
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-stone-900 dark:hover:text-stone-50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-500 text-center">© 2024 NowFeelTransformated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

