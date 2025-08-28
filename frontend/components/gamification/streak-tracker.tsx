"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Flame, Calendar, Target } from "lucide-react"

interface StreakTrackerProps {
  streak: number
  longestStreak: number
  detailed?: boolean
}

export function StreakTracker({ streak, longestStreak, detailed = false }: StreakTrackerProps) {
  const streakMilestones = [7, 14, 30, 60, 100]
  const nextMilestone = streakMilestones.find((milestone) => milestone > streak) || 365
  const progressToNext = (streak / nextMilestone) * 100

  const getStreakColor = (days: number) => {
    if (days >= 30) return "text-purple-500"
    if (days >= 14) return "text-orange-500"
    if (days >= 7) return "text-yellow-500"
    return "text-blue-500"
  }

  const getStreakTitle = (days: number) => {
    if (days >= 100) return "Legendary Streaker"
    if (days >= 60) return "Master Streaker"
    if (days >= 30) return "Streak Champion"
    if (days >= 14) return "Streak Warrior"
    if (days >= 7) return "Streak Keeper"
    return "Getting Started"
  }

  if (detailed) {
    return (
      <div className="space-y-6">
        {/* Main Streak Card */}
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Flame className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{streak}</span>
              </div>
            </div>
            <CardTitle className="text-2xl">
              <span className={getStreakColor(streak)}>{streak} Day Streak</span>
            </CardTitle>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
            >
              {getStreakTitle(streak)}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-500">{streak}</div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-500">{longestStreak}</div>
                <div className="text-sm text-muted-foreground">Best Streak</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress to {nextMilestone} days</span>
                <span>
                  {streak}/{nextMilestone}
                </span>
              </div>
              <Progress value={progressToNext} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Streak Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Streak Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const dayNumber = i - 6 // Start from last week
                const isActive = dayNumber <= 0 && dayNumber > -streak
                const isToday = dayNumber === 0
                const isFuture = dayNumber > 0

                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg border-2 flex items-center justify-center text-sm font-medium ${
                      isToday
                        ? "bg-orange-500 text-white border-orange-500"
                        : isActive
                          ? "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-800"
                          : isFuture
                            ? "bg-muted/30 text-muted-foreground border-muted"
                            : "bg-muted text-muted-foreground border-muted"
                    }`}
                  >
                    {isActive || isToday ? <Flame className="w-4 h-4" /> : ""}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Streak Milestones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Streak Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {streakMilestones.map((milestone, index) => {
                const isCompleted = streak >= milestone
                const isCurrent = milestone === nextMilestone

                return (
                  <div
                    key={milestone}
                    className={`flex items-center gap-4 p-3 rounded-lg ${
                      isCompleted
                        ? "bg-green-50 dark:bg-green-950/20"
                        : isCurrent
                          ? "bg-orange-50 dark:bg-orange-950/20"
                          : "bg-muted/30"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted ? "bg-green-500" : isCurrent ? "bg-orange-500" : "bg-muted"
                      }`}
                    >
                      {isCompleted ? (
                        <Flame className="w-5 h-5 text-white" />
                      ) : (
                        <span className="text-white font-bold text-sm">{milestone}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{milestone} Day Streak</h4>
                      <p className="text-sm text-muted-foreground">
                        {isCompleted ? "Completed!" : isCurrent ? `${milestone - streak} days to go` : "Locked"}
                      </p>
                    </div>
                    {isCompleted && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        ✓ Done
                      </Badge>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          Streak Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className={`text-3xl font-bold ${getStreakColor(streak)}`}>{streak} Days</div>
          <Badge variant="secondary" className="mt-2">
            {getStreakTitle(streak)}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Next milestone: {nextMilestone} days</span>
            <span>{Math.round(progressToNext)}%</span>
          </div>
          <Progress value={progressToNext} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div>
            <div className="font-medium text-orange-500">{streak}</div>
            <div className="text-muted-foreground">Current</div>
          </div>
          <div>
            <div className="font-medium text-purple-500">{longestStreak}</div>
            <div className="text-muted-foreground">Best</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
