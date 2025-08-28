"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Gamepad2, Trophy, Star, Zap, Target, Timer, Users, Crown } from "lucide-react"

export function MiniGames() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const games = [
    {
      id: "word-race",
      name: "Word Race",
      description: "Type words as fast as you can!",
      icon: Zap,
      difficulty: "Easy",
      xpReward: 25,
      playTime: "2 min",
      players: 1,
      color: "bg-blue-500",
    },
    {
      id: "emoji-match",
      name: "Emoji Match",
      description: "Match emojis to their meanings",
      icon: Star,
      difficulty: "Medium",
      xpReward: 50,
      playTime: "3 min",
      players: 1,
      color: "bg-yellow-500",
    },
    {
      id: "chat-trivia",
      name: "Chat Trivia",
      description: "Answer questions about your friends",
      icon: Users,
      difficulty: "Hard",
      xpReward: 100,
      playTime: "5 min",
      players: "2-4",
      color: "bg-green-500",
    },
    {
      id: "reaction-time",
      name: "Reaction Time",
      description: "Test your reflexes!",
      icon: Target,
      difficulty: "Easy",
      xpReward: 30,
      playTime: "1 min",
      players: 1,
      color: "bg-red-500",
    },
    {
      id: "memory-cards",
      name: "Memory Cards",
      description: "Remember the card positions",
      icon: Trophy,
      difficulty: "Medium",
      xpReward: 75,
      playTime: "4 min",
      players: 1,
      color: "bg-purple-500",
    },
    {
      id: "speed-chat",
      name: "Speed Chat",
      description: "Complete conversations quickly",
      icon: Timer,
      difficulty: "Hard",
      xpReward: 125,
      playTime: "3 min",
      players: "2-6",
      color: "bg-orange-500",
    },
  ]

  const leaderboard = [
    { name: "Alex Chen", score: 2450, game: "Word Race", avatar: "/user-1.png" },
    { name: "Sarah Kim", score: 2200, game: "Emoji Match", avatar: "/user-2.png" },
    { name: "You", score: 1950, game: "Chat Trivia", avatar: "/user-profile.png", isMe: true },
    { name: "Mike Wilson", score: 1800, game: "Reaction Time", avatar: "/user-3.png" },
  ]

  const achievements = [
    { name: "Speed Demon", description: "Win 10 Word Race games", progress: 7, total: 10, icon: Zap },
    {
      name: "Emoji Master",
      description: "Perfect score in Emoji Match",
      progress: 1,
      total: 1,
      icon: Star,
      completed: true,
    },
    { name: "Social Gamer", description: "Play 25 multiplayer games", progress: 18, total: 25, icon: Users },
    { name: "Quick Reflexes", description: "Sub-200ms reaction time", progress: 3, total: 5, icon: Target },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className={`w-12 h-12 ${game.color} rounded-lg flex items-center justify-center mb-4`}>
                <game.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">{game.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{game.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className={getDifficultyColor(game.difficulty)}>
                  {game.difficulty}
                </Badge>
                <Badge variant="outline">+{game.xpReward} XP</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-1">
                    <Timer className="w-3 h-3" />
                    <span>{game.playTime}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>
                      {game.players} player{typeof game.players === "string" || game.players > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={() => setSelectedGame(game.id)}>
                <Gamepad2 className="w-4 h-4 mr-2" />
                Play Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Game Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Game Champions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((player, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    player.isMe ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold ${
                        index === 0
                          ? "text-yellow-500"
                          : index === 1
                            ? "text-gray-400"
                            : index === 2
                              ? "text-amber-600"
                              : "text-muted-foreground"
                      }`}
                    >
                      #{index + 1}
                    </span>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">{player.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{player.name}</p>
                    <p className="text-xs text-muted-foreground">{player.game}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{player.score.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                  {index === 0 && <Crown className="w-4 h-4 text-yellow-500" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Game Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Game Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    achievement.completed ? "bg-green-50 dark:bg-green-950/20" : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.completed ? "bg-green-500" : "bg-primary/10"
                      }`}
                    >
                      <achievement.icon
                        className={`w-4 h-4 ${achievement.completed ? "text-white" : "text-primary"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{achievement.name}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.completed && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        ✓
                      </Badge>
                    )}
                  </div>
                  {!achievement.completed && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>
                          {achievement.progress}/{achievement.total}
                        </span>
                        <span>{Math.round((achievement.progress / achievement.total) * 100)}%</span>
                      </div>
                      <Progress value={(achievement.progress / achievement.total) * 100} className="h-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
