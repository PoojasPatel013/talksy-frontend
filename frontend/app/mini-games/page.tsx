"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Gamepad2,
  Trophy,
  Star,
  Zap,
  Target,
  Brain,
  Timer,
  Users,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"

export default function MiniGamesPage() {
  const [currentGame, setCurrentGame] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameActive, setGameActive] = useState(false)

  const games = [
    {
      id: "word-race",
      name: "Word Race",
      description: "Type words as fast as you can!",
      icon: Zap,
      difficulty: "Easy",
      players: "1-4",
      bestScore: 245,
      xpReward: 50,
    },
    {
      id: "memory-match",
      name: "Memory Match",
      description: "Match pairs of cards to test your memory",
      icon: Brain,
      difficulty: "Medium",
      players: "1-2",
      bestScore: 18,
      xpReward: 75,
    },
    {
      id: "quick-math",
      name: "Quick Math",
      description: "Solve math problems under pressure",
      icon: Target,
      difficulty: "Hard",
      players: "1",
      bestScore: 156,
      xpReward: 100,
    },
    {
      id: "trivia-challenge",
      name: "Trivia Challenge",
      description: "Test your knowledge across various topics",
      icon: Star,
      difficulty: "Medium",
      players: "1-8",
      bestScore: 12,
      xpReward: 80,
    },
  ]

  const startGame = (gameId: string) => {
    setCurrentGame(gameId)
    setScore(0)
    setTimeLeft(30)
    setGameActive(true)
  }

  const stopGame = () => {
    setGameActive(false)
    setCurrentGame(null)
  }

  if (currentGame) {
    return (
      <div className="min-h-screen bg-background">
        {/* Game Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={stopGame}>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-6 h-6" />
                  <h1 className="text-2xl font-bold text-foreground">
                    {games.find((g) => g.id === currentGame)?.name}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4" />
                  <span className="font-mono text-lg">{timeLeft}s</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  <span className="font-mono text-lg">{score}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Game Area */}
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Gamepad2 className="w-12 h-12 text-primary" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Game in Progress</h2>
                  <p className="text-muted-foreground">
                    This is a demo of the {games.find((g) => g.id === currentGame)?.name} mini-game interface.
                  </p>
                </div>

                <Progress value={(score / 100) * 100} className="w-full" />

                <div className="flex gap-4 justify-center">
                  <Button onClick={() => setGameActive(!gameActive)}>
                    {gameActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {gameActive ? "Pause" : "Resume"}
                  </Button>
                  <Button variant="outline" onClick={() => setScore(0)}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Restart
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  Complete the game to earn {games.find((g) => g.id === currentGame)?.xpReward} XP!
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-6 h-6" />
              <h1 className="text-2xl font-bold text-foreground">Mini Games</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Games Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Available Games</h2>
              <p className="text-muted-foreground">Challenge yourself and earn XP with these fun mini-games!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {games.map((game) => {
                const IconComponent = game.icon
                return (
                  <Card key={game.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline">{game.difficulty}</Badge>
                      </div>
                      <CardTitle>{game.name}</CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {game.players} players
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          Best: {game.bestScore}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Zap className="w-4 h-4" />+{game.xpReward} XP
                        </div>
                        <Button onClick={() => startGame(game.id)}>
                          <Play className="w-4 h-4 mr-2" />
                          Play
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Games Played</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total XP Earned</span>
                  <span className="font-semibold">1,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Win Rate</span>
                  <span className="font-semibold">78%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Favorite Game</span>
                  <span className="font-semibold">Word Race</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Speed Demon</p>
                    <p className="text-xs text-muted-foreground">Complete Word Race in under 20s</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Memory Master</p>
                    <p className="text-xs text-muted-foreground">Perfect score in Memory Match</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Weekly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-yellow-600">#1</span>
                    <span className="text-sm">Alex_Pro</span>
                  </div>
                  <span className="text-sm font-medium">2,450 XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">#2</span>
                    <span className="text-sm">GameMaster</span>
                  </div>
                  <span className="text-sm font-medium">2,100 XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-orange-600">#3</span>
                    <span className="text-sm">QuickThink</span>
                  </div>
                  <span className="text-sm font-medium">1,890 XP</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
