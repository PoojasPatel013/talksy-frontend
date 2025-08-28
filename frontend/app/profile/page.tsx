"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  MessageCircle,
  Trophy,
  Star,
  Crown,
  Flame,
  Zap,
  Users,
  Calendar,
  Edit3,
  Camera,
  Bell,
  Shield,
  Palette,
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    username: "TalksyUser",
    email: "user@talksy.com",
    bio: "Love connecting with people and exploring new communities!",
    location: "San Francisco, CA",
    joinDate: "January 2024",
  })

  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    publicProfile: true,
    showOnlineStatus: true,
  })

  const userStats = {
    level: 12,
    xp: 2450,
    nextLevelXP: 3000,
    streak: 7,
    totalMessages: 1247,
    communitiesJoined: 8,
    friendsCount: 23,
  }

  const badges = [
    { name: "Chatty Champion", icon: MessageCircle, color: "bg-blue-500" },
    { name: "Helper", icon: Star, color: "bg-yellow-500" },
    { name: "Community Builder", icon: Users, color: "bg-green-500" },
    { name: "Streak Master", icon: Flame, color: "bg-orange-500" },
    { name: "Early Adopter", icon: Crown, color: "bg-purple-500" },
    { name: "Active Member", icon: Zap, color: "bg-pink-500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Profile</h1>
            </div>
            <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
              <Edit3 className="w-4 h-4 mr-2" />
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src="/user-profile.png" />
                      <AvatarFallback className="text-2xl">TU</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">{profile.username}</h2>
                    <p className="text-muted-foreground">{profile.email}</p>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Crown className="w-4 h-4 text-yellow-500" />
                      <span>Level {userStats.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span>{userStats.streak} day streak</span>
                    </div>
                  </div>

                  {/* XP Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to Level {userStats.level + 1}</span>
                      <span>
                        {userStats.xp}/{userStats.nextLevelXP} XP
                      </span>
                    </div>
                    <Progress value={(userStats.xp / userStats.nextLevelXP) * 100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{userStats.totalMessages}</div>
                    <div className="text-sm text-muted-foreground">Messages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{userStats.friendsCount}</div>
                    <div className="text-sm text-muted-foreground">Friends</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">{userStats.communitiesJoined}</div>
                    <div className="text-sm text-muted-foreground">Communities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{userStats.streak}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Manage your personal information and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          value={profile.username}
                          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profile.location}
                          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Member Since</Label>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {profile.joinDate}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="badges" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievement Badges</CardTitle>
                    <CardDescription>Your earned badges and achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {badges.map((badge, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                        >
                          <div className={`w-10 h-10 rounded-full ${badge.color} flex items-center justify-center`}>
                            <badge.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium">{badge.name}</h4>
                            <p className="text-sm text-muted-foreground">Earned</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent interactions and achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: "Earned Helper badge", time: "2 hours ago", icon: Star },
                        { action: "Joined Tech Community", time: "1 day ago", icon: Users },
                        { action: "Reached Level 12", time: "3 days ago", icon: Crown },
                        { action: "7-day streak achieved", time: "1 week ago", icon: Flame },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <activity.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences and privacy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <Bell className="w-4 h-4" />
                            <Label>Push Notifications</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications for messages and updates
                          </p>
                        </div>
                        <Switch
                          checked={settings.notifications}
                          onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <Palette className="w-4 h-4" />
                            <Label>Dark Mode</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">Use dark theme for better night viewing</p>
                        </div>
                        <Switch
                          checked={settings.darkMode}
                          onCheckedChange={(checked) => setSettings({ ...settings, darkMode: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <Label>Public Profile</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                        </div>
                        <Switch
                          checked={settings.publicProfile}
                          onCheckedChange={(checked) => setSettings({ ...settings, publicProfile: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <Label>Show Online Status</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">Let friends see when you're online</p>
                        </div>
                        <Switch
                          checked={settings.showOnlineStatus}
                          onCheckedChange={(checked) => setSettings({ ...settings, showOnlineStatus: checked })}
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button variant="destructive" className="w-full">
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
