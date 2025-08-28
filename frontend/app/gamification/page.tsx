"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Crown, Star, Flame, Target, TrendingUp, MessageCircle, Users, Heart, Sparkles } from "lucide-react"
import { XPProgressCard } from "@/components/gamification/xp-progress-card"
import { BadgeCollection } from "@/components/gamification/badge-collection"
import { Leaderboard } from "@/components/gamification/leaderboard"
import { DailyTreasure } from "@/components/gamification/daily-treasure"
import { StreakTracker } from "@/components/gamification/streak-tracker"
import { MiniGames } from "@/components/gamification/mini-games"

export default function GamificationPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const userStats = {
    level: 12,
    xp: 2450,
    nextLevelXP: 3000,
    totalXP: 15450,
    streak: 7,
    longestStreak: 23,
    totalMessages: 1247,
    badgesEarned: 15,
    totalBadges: 50,
    rank: 3,
    totalUsers: 1250,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Gamification Hub</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Level {userStats.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Rank #{userStats.rank}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="streaks">Streaks</TabsTrigger>
            <TabsTrigger value="treasure">Treasure</TabsTrigger>
            <TabsTrigger value="games">Mini Games</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Progress & Stats */}
              <div className="space-y-6">
                <XPProgressCard userStats={userStats} />
                <StreakTracker streak={userStats.streak} longestStreak={userStats.longestStreak} />

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{userStats.totalMessages}</div>
                        <div className="text-sm text-muted-foreground">Messages Sent</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">{userStats.badgesEarned}</div>
                        <div className="text-sm text-muted-foreground">Badges Earned</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">#{userStats.rank}</div>
                        <div className="text-sm text-muted-foreground">Global Rank</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">{userStats.longestStreak}</div>
                        <div className="text-sm text-muted-foreground">Best Streak</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Center Column - Daily Treasure & Recent Activity */}
              <div className="space-y-6">
                <DailyTreasure />

                {/* Recent Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Recent Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          icon: Star,
                          title: "Helper Badge",
                          desc: "Helped 10 community members",
                          time: "2h ago",
                          color: "bg-yellow-500",
                        },
                        {
                          icon: Flame,
                          title: "7-Day Streak",
                          desc: "Maintained daily activity",
                          time: "Today",
                          color: "bg-orange-500",
                        },
                        {
                          icon: Crown,
                          title: "Level Up!",
                          desc: "Reached Level 12",
                          time: "Yesterday",
                          color: "bg-purple-500",
                        },
                        {
                          icon: Trophy,
                          title: "Top 5 Rank",
                          desc: "Climbed to rank #3",
                          time: "2d ago",
                          color: "bg-blue-500",
                        },
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div
                            className={`w-10 h-10 rounded-full ${achievement.color} flex items-center justify-center`}
                          >
                            <achievement.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">{achievement.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Mini Leaderboard & Challenges */}
              <div className="space-y-6">
                {/* Top Players Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Top Players
                    </CardTitle>
                    <CardDescription>This week's leaders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { rank: 1, name: "Alex Chen", xp: 3250, avatar: "/user-1.png" },
                        { rank: 2, name: "Sarah Kim", xp: 3100, avatar: "/user-2.png" },
                        { rank: 3, name: "You", xp: 2450, avatar: "/user-profile.png", isMe: true },
                        { rank: 4, name: "Mike Wilson", xp: 2200, avatar: "/user-3.png" },
                      ].map((player) => (
                        <div
                          key={player.rank}
                          className={`flex items-center gap-3 p-2 rounded-lg ${player.isMe ? "bg-primary/10 border border-primary/20" : ""}`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-bold ${player.rank <= 3 ? "text-yellow-500" : "text-muted-foreground"}`}
                            >
                              #{player.rank}
                            </span>
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={player.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{player.name}</p>
                            <p className="text-xs text-muted-foreground">{player.xp} XP</p>
                          </div>
                          {player.rank === 1 && <Crown className="w-4 h-4 text-yellow-500" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Daily Challenges */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Daily Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { title: "Send 10 messages", progress: 7, total: 10, reward: "50 XP", icon: MessageCircle },
                      { title: "Join 2 group chats", progress: 1, total: 2, reward: "75 XP", icon: Users },
                      { title: "React to 5 messages", progress: 3, total: 5, reward: "25 XP", icon: Heart },
                    ].map((challenge, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <challenge.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{challenge.title}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {challenge.reward}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>
                              {challenge.progress}/{challenge.total}
                            </span>
                            <span>{Math.round((challenge.progress / challenge.total) * 100)}%</span>
                          </div>
                          <Progress value={(challenge.progress / challenge.total) * 100} className="h-1" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="badges">
            <BadgeCollection />
          </TabsContent>

          <TabsContent value="leaderboard">
            <Leaderboard />
          </TabsContent>

          <TabsContent value="streaks">
            <div className="max-w-4xl mx-auto">
              <StreakTracker streak={userStats.streak} longestStreak={userStats.longestStreak} detailed />
            </div>
          </TabsContent>

          <TabsContent value="treasure">
            <div className="max-w-2xl mx-auto">
              <DailyTreasure detailed />
            </div>
          </TabsContent>

          <TabsContent value="games">
            <MiniGames />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
