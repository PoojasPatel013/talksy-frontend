"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Users,
  MessageCircle,
  Crown,
  Star,
  TrendingUp,
  Globe,
  Lock,
  Calendar,
  Trophy,
} from "lucide-react"
import Link from "next/link"

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredCommunities = [
    {
      id: 1,
      name: "Tech Innovators",
      description: "Discussing the latest in technology and innovation",
      members: 12500,
      category: "Technology",
      isPrivate: false,
      avatar: "/group-1.png",
      badges: ["Verified", "Active"],
      recentActivity: "2 minutes ago",
    },
    {
      id: 2,
      name: "Creative Minds",
      description: "A space for artists, designers, and creative professionals",
      members: 8900,
      category: "Art & Design",
      isPrivate: false,
      avatar: "/group-2.png",
      badges: ["Featured", "Growing"],
      recentActivity: "5 minutes ago",
    },
    {
      id: 3,
      name: "Startup Founders",
      description: "Connect with fellow entrepreneurs and startup founders",
      members: 5600,
      category: "Business",
      isPrivate: true,
      avatar: "/group-1.png",
      badges: ["Exclusive", "Premium"],
      recentActivity: "1 hour ago",
    },
  ]

  const trendingTopics = [
    { name: "AI Development", posts: 234 },
    { name: "Web3 & Blockchain", posts: 189 },
    { name: "Remote Work", posts: 156 },
    { name: "Design Systems", posts: 143 },
    { name: "Startup Funding", posts: 98 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-bold text-foreground">Talksy</h1>
              </Link>
              <Badge variant="secondary" className="gap-1">
                <Users className="w-3 h-3" />
                Communities
              </Badge>
            </div>

            <div className="flex items-center gap-3">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create Community
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search communities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="joined">Joined</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="new">New</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-6">
                    <div className="space-y-4">
                      {featuredCommunities.map((community) => (
                        <Card key={community.id} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <Avatar className="w-16 h-16">
                                <AvatarImage src={community.avatar || "/placeholder.svg"} />
                                <AvatarFallback>{community.name[0]}</AvatarFallback>
                              </Avatar>

                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-lg font-semibold">{community.name}</h3>
                                  {community.isPrivate && <Lock className="w-4 h-4 text-muted-foreground" />}
                                  {!community.isPrivate && <Globe className="w-4 h-4 text-muted-foreground" />}
                                </div>

                                <p className="text-muted-foreground mb-3">{community.description}</p>

                                <div className="flex items-center gap-4 mb-3">
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Users className="w-4 h-4" />
                                    {community.members.toLocaleString()} members
                                  </div>
                                  <Badge variant="outline">{community.category}</Badge>
                                  <span className="text-sm text-muted-foreground">
                                    Active {community.recentActivity}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2">
                                  {community.badges.map((badge) => (
                                    <Badge key={badge} variant="secondary" className="text-xs">
                                      {badge}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col gap-2">
                                <Button size="sm">Join</Button>
                                <Button variant="outline" size="sm">
                                  <MessageCircle className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="joined">
                    <div className="text-center py-8">
                      <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No joined communities yet</h3>
                      <p className="text-muted-foreground">Start by joining some communities above!</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="trending">
                    <div className="space-y-4">
                      {featuredCommunities.slice(0, 2).map((community) => (
                        <Card key={community.id} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <Badge variant="secondary">Trending</Badge>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{community.name}</h3>
                            <p className="text-muted-foreground mb-3">{community.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                {community.members.toLocaleString()} members
                              </span>
                              <Button size="sm">Join</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="new">
                    <div className="text-center py-8">
                      <Star className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">New communities coming soon</h3>
                      <p className="text-muted-foreground">Be the first to discover fresh communities!</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                      <span className="text-sm font-medium">{topic.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Communities Joined</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Posts Made</span>
                  <span className="font-semibold">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Reputation</span>
                  <span className="font-semibold">0</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gap-2 bg-transparent" variant="outline">
                  <Plus className="w-4 h-4" />
                  Create Community
                </Button>
                <Button className="w-full gap-2 bg-transparent" variant="outline">
                  <Calendar className="w-4 h-4" />
                  Browse Events
                </Button>
                <Button className="w-full gap-2 bg-transparent" variant="outline">
                  <Crown className="w-4 h-4" />
                  Leaderboards
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
