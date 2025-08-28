"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MessageCircle, Menu, FileText, CreditCard, Users, Zap, Shield, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function TalksyLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-black">Talksy</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-black hover:text-gray-600 gap-1">
                    Product <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Features
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Zap className="w-4 h-4 mr-2" />
                    AI Companion
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Users className="w-4 h-4 mr-2" />
                    Communities
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/docs" className="text-black hover:text-gray-600 font-medium">
                <Button variant="ghost" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Docs
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-black hover:text-gray-600 gap-1">
                    Pricing <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem>
                    <div className="flex flex-col">
                      <span className="font-medium">Free Plan</span>
                      <span className="text-sm text-gray-500">Basic features</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex flex-col">
                      <span className="font-medium">Pro Plan</span>
                      <span className="text-sm text-gray-500">Advanced features</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex flex-col">
                      <span className="font-medium">Enterprise</span>
                      <span className="text-sm text-gray-500">Custom solutions</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-black hover:text-gray-600">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-black text-white hover:bg-gray-800">Try for Free</Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start text-black">
                  Product
                </Button>
                <Button variant="ghost" className="justify-start text-black">
                  <FileText className="w-4 h-4 mr-2" />
                  Docs
                </Button>
                <Button variant="ghost" className="justify-start text-black">
                  Pricing
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <aside className="hidden lg:flex w-64 bg-gray-50 min-h-screen border-r border-gray-200">
          <div className="p-6 w-full">
            <nav className="space-y-2">
              <div className="text-sm font-semibold text-gray-900 mb-4">Quick Links</div>
              <Link
                href="/docs"
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-white rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                Documentation
              </Link>
              <Link
                href="/pricing"
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-white rounded-lg transition-colors"
              >
                <CreditCard className="w-4 h-4" />
                Pricing Plans
              </Link>
              <Link
                href="/auth/register"
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-white rounded-lg transition-colors"
              >
                <Users className="w-4 h-4" />
                Get Started
              </Link>
            </nav>

            <div className="mt-8">
              <div className="text-sm font-semibold text-gray-900 mb-4">Features</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3 h-3" />
                  Real-time Chat
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  AI Companion
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  End-to-End Encryption
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3" />
                  Global Communities
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-black mb-6 text-balance">Connect. Chat. Grow.</h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty max-w-2xl mx-auto">
                The modern community platform that brings people together with intelligent features, gamification, and
                AI-powered conversations.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
                    Try for Free
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 border-gray-300 text-black hover:bg-gray-50 bg-transparent"
                  >
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-black text-center mb-12">
                Everything you need to build communities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-black">Real-time Messaging</CardTitle>
                    <CardDescription className="text-gray-600">
                      Instant messaging with typing indicators, read receipts, and seamless group conversations.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-black">AI Companion</CardTitle>
                    <CardDescription className="text-gray-600">
                      Your personal AI assistant that learns, helps, and keeps conversations engaging.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-black">Communities</CardTitle>
                    <CardDescription className="text-gray-600">
                      Create and join communities around shared interests with powerful moderation tools.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black mb-6">Ready to get started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of users already building amazing communities on Talksy.
              </p>
              <Link href="/auth/register">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
                  Start Your Free Account
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
