"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Users, Trophy, Zap, Moon, Sun, Gift, Crown, Star, Flame, Plus } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function TalksyDashboard() {
  const { theme, setTheme } = useTheme()
  const [userLevel] = useState(12)
  const [userXP] = useState(2450)
  const [nextLevelXP] = useState(3000)
  const [streak] = useState(7)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-black" />
              </div>
              <h1 className="text-2xl font-bold text-black">Talksy</h1>
            </div>

            <div className="flex items-center gap-6">
              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/chat" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                  Chat
                </Link>
                <Link
                  href="/communities"
                  className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
                >
                  Communities
                </Link>
              </nav>

              {/* User Stats */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-black" />
                  <span className="text-sm font-medium text-black">{streak} day streak</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-black" />
                  <span className="text-sm font-medium text-black">Level {userLevel}</span>
                </div>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-black hover:bg-gray-100"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-black">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* XP Progress */}
                <div>
                  <div className="flex justify-between text-sm mb-2 text-black">
                    <span>Level {userLevel}</span>
                    <span>
                      {userXP}/{nextLevelXP} XP
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-black h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(userXP / nextLevelXP) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Recent Badges */}
                <div>
                  <h4 className="text-sm font-medium mb-2 text-black">Recent Badges</h4>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="gap-1 border-gray-300 text-black bg-white">
                      <Star className="w-3 h-3" />
                      Chatty
                    </Badge>
                    <Badge variant="outline" className="gap-1 border-gray-300 text-black bg-white">
                      <Trophy className="w-3 h-3" />
                      Helper
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Treasure */}
            <Card className="bg-white border-2 border-black">
              <CardHeader className="text-center">
                <Gift className="w-8 h-8 mx-auto text-black mb-2" />
                <CardTitle className="text-black">Daily Reward</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-black text-white hover:bg-gray-800">Claim</Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {/* Welcome & Quick Actions */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-black">Ready to connect?</h2>
                <p className="text-gray-600 mb-6">Start chatting with friends or discover new communities to join.</p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/chat">
                    <Button size="lg" className="gap-2 bg-black text-white hover:bg-gray-800">
                      <MessageCircle className="w-5 h-5" />
                      Start Chatting
                    </Button>
                  </Link>
                  <Link href="/communities">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 bg-white border-black text-black hover:bg-gray-50"
                    >
                      <Users className="w-5 h-5" />
                      Browse Communities
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Chats */}
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Recent Chats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="font-medium text-black">General Chat</p>
                      <p className="text-sm text-gray-600">5 new messages</p>
                    </div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="font-medium text-black">Tech Talk</p>
                      <p className="text-sm text-gray-600">2 new messages</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-black hover:bg-gray-50 bg-transparent"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Suggested Communities */}
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Suggested Communities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <p className="font-medium text-black">Developers Hub</p>
                    <p className="text-sm text-gray-600">1.2k members • Very active</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <p className="font-medium text-black">Gaming Lounge</p>
                    <p className="text-sm text-gray-600">856 members • Active</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-black hover:bg-gray-50 bg-transparent"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Community
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200">
                <CardContent className="p-4 text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-black" />
                  <h3 className="font-medium text-black">AI Companion</h3>
                  <p className="text-sm text-gray-600">Chat with AI when friends are offline</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-black" />
                  <h3 className="font-medium text-black">Earn Rewards</h3>
                  <p className="text-sm text-gray-600">Level up and unlock badges</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200">
                <CardContent className="p-4 text-center">
                  <MessageCircle className="w-8 h-8 mx-auto mb-2 text-black" />
                  <h3 className="font-medium text-black">Real-time Chat</h3>
                  <p className="text-sm text-gray-600">Instant messaging worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
