"use client"

import Link from "next/link"
import MaxWidthWrapper from "../components/common/MaxWidthWrapper"
import { Button } from "../components/ui/button"

const NavbarLarge = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <span>IntelliDeck</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link href="/generate" className="text-gray-700 hover:text-gray-900">
                Generate PPT
              </Link>
              <Link href="/reskin" className="text-gray-700 hover:text-gray-900">
                Reskin PPT
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-gray-900">
                Login
              </Link>
              <Button className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default NavbarLarge
