"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Crown, Medal } from "lucide-react"

export function Leaderboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly")

  const leaderboardData = {
    daily: [
      { rank: 1, name: "Sarah Kim", xp: 450, avatar: "/user-1.png", change: "+2", badge: "🔥" },
      { rank: 2, name: "Alex Chen", xp: 420, avatar: "/user-2.png", change: "-1", badge: "⚡" },
      { rank: 3, name: "You", xp: 380, avatar: "/user-profile.png", change: "+1", badge: "💪", isMe: true },
      { rank: 4, name: "Mike Wilson", xp: 350, avatar: "/user-3.png", change: "-2", badge: "🎯" },
      { rank: 5, name: "Emma Davis", xp: 320, avatar: "/user-1.png", change: "0", badge: "🌟" },
    ],
    weekly: [
      { rank: 1, name: "Alex Chen", xp: 3250, avatar: "/user-2.png", change: "+1", badge: "👑" },
      { rank: 2, name: "Sarah Kim", xp: 3100, avatar: "/user-1.png", change: "-1", badge: "🔥" },
      { rank: 3, name: "You", xp: 2450, avatar: "/user-profile.png", change: "+2", badge: "⭐", isMe: true },
      { rank: 4, name: "Mike Wilson", xp: 2200, avatar: "/user-3.png", change: "-1", badge: "💎" },
      { rank: 5, name: "Emma Davis", xp: 2100, avatar: "/user-1.png", change: "+3", badge: "🚀" },
      { rank: 6, name: "John Smith", xp: 1950, avatar: "/user-2.png", change: "-2", badge: "⚡" },
      { rank: 7, name: "Lisa Wang", xp: 1800, avatar: "/user-3.png", change: "0", badge: "🎯" },
      { rank: 8, name: "David Brown", xp: 1650, avatar: "/user-1.png", change: "+1", badge: "🌟" },
    ],
    monthly: [
      { rank: 1, name: "Alex Chen", xp: 12500, avatar: "/user-2.png", change: "0", badge: "👑" },
      { rank: 2, name: "Sarah Kim", xp: 11800, avatar: "/user-1.png", change: "+1", badge: "🔥" },
      { rank: 3, name: "Mike Wilson", xp: 10200, avatar: "/user-3.png", change: "-1", badge: "💎" },
      { rank: 4, name: "You", xp: 9450, avatar: "/user-profile.png", change: "+3", badge: "⭐", isMe: true },
      { rank: 5, name: "Emma Davis", xp: 8900, avatar: "/user-1.png", change: "+2", badge: "🚀" },
    ],
    allTime: [
      { rank: 1, name: "Alex Chen", xp: 45200, avatar: "/user-2.png", change: "0", badge: "👑" },
      { rank: 2, name: "Sarah Kim", xp: 42100, avatar: "/user-1.png", change: "0", badge: "🔥" },
      { rank: 3, name: "Mike Wilson", xp: 38500, avatar: "/user-3.png", change: "0", badge: "💎" },
      { rank: 4, name: "Emma Davis", xp: 35200, avatar: "/user-1.png", change: "+1", badge: "🚀" },
      { rank: 5, name: "You", xp: 32450, avatar: "/user-profile.png", change: "-1", badge: "⭐", isMe: true },
    ],
  }

  const currentData = leaderboardData[selectedPeriod as keyof typeof leaderboardData]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getChangeColor = (change: string) => {
    if (change.startsWith("+")) return "text-green-500"
    if (change.startsWith("-")) return "text-red-500"
    return "text-muted-foreground"
  }

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="allTime">All Time</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedPeriod} className="space-y-6">
          {/* Top 3 Podium */}
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-6">
              <div className="flex justify-center items-end gap-8">
                {/* 2nd Place */}
                {currentData[1] && (
                  <div className="text-center">
                    <div className="relative mb-4">
                      <Avatar className="w-16 h-16 mx-auto border-4 border-gray-300">
                        <AvatarImage src={currentData[1].avatar || "/placeholder.svg"} />
                        <AvatarFallback>{currentData[1].name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                    </div>
                    <h3 className="font-semibold">{currentData[1].name}</h3>
                    <p className="text-sm text-muted-foreground">{currentData[1].xp.toLocaleString()} XP</p>
                    <div className="w-16 h-20 bg-gray-300 mx-auto mt-2 rounded-t-lg flex items-end justify-center pb-2">
                      <Medal className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}

                {/* 1st Place */}
                {currentData[0] && (
                  <div className="text-center">
                    <div className="relative mb-4">
                      <Avatar className="w-20 h-20 mx-auto border-4 border-yellow-400">
                        <AvatarImage src={currentData[0].avatar || "/placeholder.svg"} />
                        <AvatarFallback>{currentData[0].name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg">{currentData[0].name}</h3>
                    <p className="text-muted-foreground">{currentData[0].xp.toLocaleString()} XP</p>
                    <div className="w-16 h-24 bg-yellow-400 mx-auto mt-2 rounded-t-lg flex items-end justify-center pb-2">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}

                {/* 3rd Place */}
                {currentData[2] && (
                  <div className="text-center">
                    <div className="relative mb-4">
                      <Avatar className="w-16 h-16 mx-auto border-4 border-amber-600">
                        <AvatarImage src={currentData[2].avatar || "/placeholder.svg"} />
                        <AvatarFallback>{currentData[2].name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                    </div>
                    <h3 className="font-semibold">{currentData[2].name}</h3>
                    <p className="text-sm text-muted-foreground">{currentData[2].xp.toLocaleString()} XP</p>
                    <div className="w-16 h-16 bg-amber-600 mx-auto mt-2 rounded-t-lg flex items-end justify-center pb-2">
                      <Medal className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Full Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {currentData.map((player, index) => (
                  <div
                    key={player.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      player.isMe ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {getRankIcon(player.rank)}
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={player.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{player.name}</h4>
                        {player.isMe && <Badge variant="secondary">You</Badge>}
                        <span className="text-lg">{player.badge}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{player.xp.toLocaleString()} XP</p>
                    </div>

                    <div className="text-right">
                      <div className={`text-sm font-medium ${getChangeColor(player.change)}`}>
                        {player.change !== "0" && player.change}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {player.change !== "0" ? "vs last period" : "no change"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
