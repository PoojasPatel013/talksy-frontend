"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Upload, Users, Globe, Lock, Shield, MessageCircle, Settings, Crown } from "lucide-react"
import Link from "next/link"

export default function CreateCommunityPage() {
  const [communityName, setCommunityName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [requireApproval, setRequireApproval] = useState(false)

  const categories = [
    "Technology",
    "Art & Design",
    "Business",
    "Gaming",
    "Music",
    "Sports",
    "Education",
    "Lifestyle",
    "Science",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/communities">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Create Community</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Set up the fundamental details of your community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Community Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter community name"
                    value={communityName}
                    onChange={(e) => setCommunityName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what your community is about..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Community Avatar</Label>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="text-lg">
                        {communityName ? communityName[0].toUpperCase() : "C"}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Upload className="w-4 h-4" />
                      Upload Image
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Privacy & Access
                </CardTitle>
                <CardDescription>Control who can join and see your community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {isPrivate ? <Lock className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                      <Label htmlFor="private">Private Community</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {isPrivate
                        ? "Only invited members can see and join this community"
                        : "Anyone can discover and join this community"}
                    </p>
                  </div>
                  <Switch id="private" checked={isPrivate} onCheckedChange={setIsPrivate} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      <Label htmlFor="approval">Require Approval</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">New members need approval from moderators to join</p>
                  </div>
                  <Switch id="approval" checked={requireApproval} onCheckedChange={setRequireApproval} />
                </div>
              </CardContent>
            </Card>

            {/* Community Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Community Guidelines
                </CardTitle>
                <CardDescription>Set the rules and expectations for your community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Community Rules</Label>
                  <Textarea
                    placeholder="1. Be respectful to all members&#10;2. No spam or self-promotion&#10;3. Stay on topic..."
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1">Create Community</Button>
              <Button variant="outline">Save as Draft</Button>
            </div>
          </div>

          {/* Preview Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
                <CardDescription>How your community will appear to others</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback>{communityName ? communityName[0].toUpperCase() : "C"}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{communityName || "Community Name"}</h3>
                        {isPrivate ? <Lock className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {description || "Community description will appear here..."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">0 members</span>
                  </div>

                  {category && <Badge variant="outline">{category}</Badge>}

                  <div className="space-y-2">
                    {isPrivate && (
                      <Badge variant="secondary" className="gap-1">
                        <Lock className="w-3 h-3" />
                        Private
                      </Badge>
                    )}
                    {requireApproval && (
                      <Badge variant="secondary" className="gap-1">
                        <Crown className="w-3 h-3" />
                        Approval Required
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium">Choose a clear name</h4>
                  <p className="text-muted-foreground">
                    Make it easy for people to understand what your community is about
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Write a good description</h4>
                  <p className="text-muted-foreground">Explain the purpose and what members can expect</p>
                </div>
                <div>
                  <h4 className="font-medium">Set clear rules</h4>
                  <p className="text-muted-foreground">Help maintain a positive environment for all members</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
