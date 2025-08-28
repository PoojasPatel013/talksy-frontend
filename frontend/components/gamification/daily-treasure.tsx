"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Sparkles, Star, Crown, Zap, Calendar, Clock } from "lucide-react"

interface DailyTreasureProps {
  detailed?: boolean
}

export function DailyTreasure({ detailed = false }: DailyTreasureProps) {
  const [isOpened, setIsOpened] = useState(false)
  const [reward, setReward] = useState<any>(null)

  const possibleRewards = [
    { type: "XP", amount: 100, rarity: "Common", icon: Zap, color: "bg-blue-500" },
    { type: "XP", amount: 250, rarity: "Uncommon", icon: Zap, color: "bg-green-500" },
    { type: "Badge", name: "Lucky", rarity: "Rare", icon: Star, color: "bg-purple-500" },
    { type: "Theme", name: "Golden", rarity: "Epic", icon: Crown, color: "bg-yellow-500" },
    { type: "Stickers", amount: 5, rarity: "Common", icon: Sparkles, color: "bg-pink-500" },
  ]

  const handleOpenTreasure = () => {
    const randomReward = possibleRewards[Math.floor(Math.random() * possibleRewards.length)]
    setReward(randomReward)
    setIsOpened(true)
  }

  const timeUntilReset = "23:45:12" // Mock countdown

  if (detailed) {
    return (
      <div className="space-y-6">
        {/* Main Treasure Card */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center animate-pulse">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-500 animate-spin" />
              </div>
            </div>
            <CardTitle className="text-2xl">Daily Treasure Chest</CardTitle>
            <p className="text-muted-foreground">Open your daily treasure to receive amazing rewards!</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isOpened ? (
              <div className="text-center space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  onClick={handleOpenTreasure}
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Open Treasure Chest
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Resets in {timeUntilReset}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <reward.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Congratulations!</h3>
                  <p className="text-muted-foreground">You received:</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className={`${reward.color} text-white text-lg px-4 py-2`}>
                    {reward.type === "XP" && `+${reward.amount} XP`}
                    {reward.type === "Badge" && `${reward.name} Badge`}
                    {reward.type === "Theme" && `${reward.name} Theme`}
                    {reward.type === "Stickers" && `${reward.amount} Stickers`}
                  </Badge>
                  <div className="text-sm text-muted-foreground">Rarity: {reward.rarity}</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Claim Reward
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Reward History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Today", reward: "250 XP", rarity: "Uncommon", claimed: false },
                { date: "Yesterday", reward: "Lucky Badge", rarity: "Rare", claimed: true },
                { date: "2 days ago", reward: "100 XP", rarity: "Common", claimed: true },
                { date: "3 days ago", reward: "5 Stickers", rarity: "Common", claimed: true },
                { date: "4 days ago", reward: "Golden Theme", rarity: "Epic", claimed: true },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{item.reward}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={item.claimed ? "secondary" : "default"}>
                      {item.claimed ? "Claimed" : "Available"}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{item.rarity}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
      <CardHeader className="text-center">
        <Gift className="w-12 h-12 mx-auto text-primary mb-2" />
        <CardTitle className="text-lg">Daily Treasure</CardTitle>
        <p className="text-sm text-muted-foreground">Your daily reward awaits!</p>
      </CardHeader>
      <CardContent>
        {!isOpened ? (
          <Button className="w-full" size="lg" onClick={handleOpenTreasure}>
            <Gift className="w-4 h-4 mr-2" />
            Claim Reward
          </Button>
        ) : (
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-500 flex items-center justify-center">
              <reward.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium">You got:</p>
              <Badge variant="secondary" className={`${reward.color} text-white`}>
                {reward.type === "XP" && `+${reward.amount} XP`}
                {reward.type === "Badge" && `${reward.name} Badge`}
                {reward.type === "Theme" && `${reward.name} Theme`}
                {reward.type === "Stickers" && `${reward.amount} Stickers`}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">Come back tomorrow!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
