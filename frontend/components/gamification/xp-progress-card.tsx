"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Crown, Zap } from "lucide-react"

interface XPProgressCardProps {
  userStats: {
    level: number
    xp: number
    nextLevelXP: number
    totalXP: number
  }
}

export function XPProgressCard({ userStats }: XPProgressCardProps) {
  const progressPercentage = (userStats.xp / userStats.nextLevelXP) * 100

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-500" />
          Level Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">Level {userStats.level}</div>
          <Badge variant="secondary" className="gap-1">
            <Zap className="w-3 h-3" />
            {userStats.totalXP.toLocaleString()} Total XP
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to Level {userStats.level + 1}</span>
            <span>
              {userStats.xp}/{userStats.nextLevelXP} XP
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <div className="text-center text-xs text-muted-foreground">
            {userStats.nextLevelXP - userStats.xp} XP to next level
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-lg font-bold text-green-500">+{Math.floor(progressPercentage)}</div>
            <div className="text-xs text-muted-foreground">Progress %</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-500">{userStats.level + 1}</div>
            <div className="text-xs text-muted-foreground">Next Level</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-purple-500">
              {Math.floor((userStats.nextLevelXP - userStats.xp) / 50)}
            </div>
            <div className="text-xs text-muted-foreground">Days Left*</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
