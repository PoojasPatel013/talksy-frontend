"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, MessageCircle, Users, Zap, Shield, Trophy, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Talksy",
      icon: BookOpen,
      articles: [
        { title: "Welcome to Talksy", description: "Your first steps in the community platform" },
        { title: "Setting up your profile", description: "Customize your profile and preferences" },
        { title: "Finding communities", description: "Discover and join communities that interest you" },
      ],
    },
    {
      title: "Chat Features",
      description: "Master real-time messaging and communication",
      icon: MessageCircle,
      articles: [
        { title: "Sending messages", description: "Text, voice, and media messaging basics" },
        { title: "Group chats", description: "Creating and managing group conversations" },
        { title: "Message reactions", description: "Express yourself with reactions and emojis" },
      ],
    },
    {
      title: "Communities",
      description: "Build and participate in communities",
      icon: Users,
      articles: [
        { title: "Creating communities", description: "Start your own community from scratch" },
        { title: "Community moderation", description: "Tools for managing your community" },
        { title: "Community events", description: "Organize and participate in events" },
      ],
    },
    {
      title: "AI Companion",
      description: "Your personal AI assistant and friend",
      icon: Zap,
      articles: [
        { title: "Meet your AI companion", description: "Introduction to AI-powered conversations" },
        { title: "Personality customization", description: "Tailor your AI companion's personality" },
        { title: "AI games and activities", description: "Fun activities with your AI companion" },
      ],
    },
    {
      title: "Gamification",
      description: "Level up your social experience",
      icon: Trophy,
      articles: [
        { title: "XP and leveling system", description: "How to earn experience and level up" },
        { title: "Badges and achievements", description: "Unlock and collect badges" },
        { title: "Streaks and rewards", description: "Daily rewards and streak maintenance" },
      ],
    },
    {
      title: "Privacy & Security",
      description: "Keep your data safe and secure",
      icon: Shield,
      articles: [
        { title: "Privacy settings", description: "Control who sees your information" },
        { title: "End-to-end encryption", description: "How your messages are protected" },
        { title: "Blocking and reporting", description: "Tools for staying safe" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-black">Talksy Docs</h1>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" className="text-black hover:text-gray-600">
                  Back to Home
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-black text-white hover:bg-gray-800">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Talksy Documentation</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Everything you need to know about using Talksy's community platform and features
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search documentation..." className="pl-10 border-gray-300" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Quick Start Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Get up and running in 5 minutes</p>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-300 text-black hover:bg-gray-50 bg-transparent"
              >
                Start Here <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">API Reference</h3>
              <p className="text-gray-600 text-sm mb-4">Integrate with Talksy's API</p>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-300 text-black hover:bg-gray-50 bg-transparent"
              >
                View API <ExternalLink className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm mb-4">Get help from the community</p>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gray-300 text-black hover:bg-gray-50 bg-transparent"
              >
                Join Community <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section) => {
            const IconComponent = section.icon
            return (
              <Card key={section.title} className="bg-white border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-black">{section.title}</CardTitle>
                      <CardDescription className="text-gray-600">{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.articles.map((article) => (
                    <div
                      key={article.title}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-black">{article.title}</h4>
                        <p className="text-sm text-gray-600">{article.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Join thousands of users building amazing communities on Talksy.</p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Create Your Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
