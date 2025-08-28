"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Brain, Zap, Target, Trophy, Star, Dice1, MessageCircle } from "lucide-react"

export function AIGames() {
  const [currentGame, setCurrentGame] = useState<string | null>(null)
  const [gameState, setGameState] = useState<any>({})

  const games = [
    {
      id: "riddle",
      name: "Riddle Master",
      description: "Solve AI-generated riddles and brain teasers",
      icon: Brain,
      difficulty: "Medium",
      xpReward: 50,
      color: "bg-purple-500",
    },
    {
      id: "word-association",
      name: "Word Association",
      description: "Quick thinking word association game",
      icon: Zap,
      difficulty: "Easy",
      xpReward: 25,
      color: "bg-blue-500",
    },
    {
      id: "trivia",
      name: "AI Trivia",
      description: "Test your knowledge against AI questions",
      icon: Target,
      difficulty: "Hard",
      xpReward: 100,
      color: "bg-green-500",
    },
    {
      id: "story-builder",
      name: "Story Builder",
      description: "Collaborate with AI to create amazing stories",
      icon: MessageCircle,
      difficulty: "Easy",
      xpReward: 75,
      color: "bg-orange-500",
    },
    {
      id: "number-guess",
      name: "Number Guessing",
      description: "Guess the AI's secret number with clues",
      icon: Dice1,
      difficulty: "Easy",
      xpReward: 30,
      color: "bg-pink-500",
    },
    {
      id: "personality-quiz",
      name: "Personality Quiz",
      description: "Fun personality quizzes created by AI",
      icon: Star,
      difficulty: "Medium",
      xpReward: 60,
      color: "bg-indigo-500",
    },
  ]

  const gameStats = {
    totalGamesPlayed: 47,
    favoriteGame: "Riddle Master",
    totalXPEarned: 1250,
    winRate: 73,
    currentStreak: 5,
  }

  const recentScores = [
    { game: "Riddle Master", score: 850, date: "Today", won: true },
    { game: "AI Trivia", score: 1200, date: "Yesterday", won: true },
    { game: "Word Association", score: 450, date: "2 days ago", won: false },
    { game: "Story Builder", score: 920, date: "3 days ago", won: true },
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

  const startGame = (gameId: string) => {
    setCurrentGame(gameId)
    // Initialize game state based on game type
    if (gameId === "riddle") {
      setGameState({
        currentRiddle:
          "I speak without a mouth and hear without ears. I have no body, but come alive with wind. What am I?",
        answer: "echo",
        attempts: 0,
        maxAttempts: 3,
      })
    }
  }

  if (currentGame) {
    const game = games.find((g) => g.id === currentGame)
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {game && <game.icon className="w-5 h-5" />}
              {game?.name}
            </CardTitle>
            <Button variant="outline" onClick={() => setCurrentGame(null)} className="bg-transparent">
              Exit Game
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {currentGame === "riddle" && (
            <div className="space-y-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Riddle Time!</h3>
                <p className="text-muted-foreground mb-4">{gameState.currentRiddle}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Badge variant="secondary">
                    Attempts: {gameState.attempts}/{gameState.maxAttempts}
                  </Badge>
                  <Badge variant="outline">+{game?.xpReward} XP</Badge>
                </div>
                <div className="flex gap-2 max-w-md mx-auto">
                  <input type="text" placeholder="Your answer..." className="flex-1 px-3 py-2 border rounded-md" />
                  <Button>Submit</Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Game Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">{gameStats.totalGamesPlayed}</div>
            <div className="text-sm text-muted-foreground">Games Played</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{gameStats.winRate}%</div>
            <div className="text-sm text-muted-foreground">Win Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-500">{gameStats.totalXPEarned}</div>
            <div className="text-sm text-muted-foreground">XP Earned</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">{gameStats.currentStreak}</div>
            <div className="text-sm text-muted-foreground">Win Streak</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-lg font-bold text-pink-500">{gameStats.favoriteGame}</div>
            <div className="text-sm text-muted-foreground">Favorite</div>
          </CardContent>
        </Card>
      </div>

      {/* Available Games */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Available Games
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game) => (
              <div key={game.id} className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${game.color} flex items-center justify-center`}>
                    <game.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{game.name}</h4>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="secondary" className={getDifficultyColor(game.difficulty)}>
                        {game.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        +{game.xpReward} XP
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                <Button className="w-full" onClick={() => startGame(game.id)}>
                  Play Now
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Scores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Recent Scores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentScores.map((score, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <h4 className="font-medium">{score.game}</h4>
                  <p className="text-sm text-muted-foreground">{score.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">{score.score.toLocaleString()}</div>
                  <Badge variant={score.won ? "default" : "secondary"} className="text-xs">
                    {score.won ? "Won" : "Lost"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
