"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b glass-effect rounded-lg">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <span className="text-2xl font-bold text-white">Talksy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-sm font-medium hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-white transition-colors">
            Docs
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium rounded-lg">
                Pricing <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/pricing">View Pricing</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/members" className="text-sm font-medium hover:text-white transition-colors">
            Members
          </Link>
          <Link href="/communities" className="text-sm font-medium hover:text-white transition-colors">
            Communities
          </Link>
          
        </div>

        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t glass-effect rounded-lg">
          <div className="container py-4 space-y-2">
            <Link href="/" className="block py-2 text-sm font-medium hover:text-white transition-colors rounded-lg">
              Home
            </Link>
            <Link href="/docs" className="block py-2 text-sm font-medium hover:text-white transition-colors rounded-lg">
              Docs
            </Link>
            <Link href="/pricing" className="block py-2 text-sm font-medium hover:text-white transition-colors rounded-lg">
              Pricing
            </Link>
            <Link href="/members" className="block py-2 text-sm font-medium hover:text-white transition-colors rounded-lg">
              Members
            </Link>
            <Link href="/communities" className="block py-2 text-sm font-medium hover:text-white transition-colors rounded-lg">
              Communities
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
