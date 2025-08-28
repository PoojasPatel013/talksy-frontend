"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  MessageCircle,
  Users,
  Star,
  Crown,
  Flame,
  Zap,
  Heart,
  Trophy,
  Target,
  Calendar,
  Shield,
  Sparkles,
  Gamepad2,
  Lock,
} from "lucide-react"

export function BadgeCollection() {
  const badges = [
    // Earned Badges
    {
      id: 1,
      name: "First Message",
      description: "Send your first message",
      icon: MessageCircle,
      color: "bg-blue-500",
      earned: true,
      rarity: "Common",
    },
    {
      id: 2,
      name: "Chatty Champion",
      description: "Send 1000 messages",
      icon: MessageCircle,
      color: "bg-blue-600",
      earned: true,
      rarity: "Rare",
      progress: 1000,
      total: 1000,
    },
    {
      id: 3,
      name: "Helper",
      description: "Help 10 community members",
      icon: Star,
      color: "bg-yellow-500",
      earned: true,
      rarity: "Uncommon",
    },
    {
      id: 4,
      name: "Community Builder",
      description: "Create 3 group chats",
      icon: Users,
      color: "bg-green-500",
      earned: true,
      rarity: "Uncommon",
    },
    {
      id: 5,
      name: "Streak Master",
      description: "Maintain a 7-day streak",
      icon: Flame,
      color: "bg-orange-500",
      earned: true,
      rarity: "Rare",
    },
    {
      id: 6,
      name: "Early Adopter",
      description: "Join Talksy in the first month",
      icon: Crown,
      color: "bg-purple-500",
      earned: true,
      rarity: "Legendary",
    },
    {
      id: 7,
      name: "Active Member",
      description: "Be active for 30 days",
      icon: Zap,
      color: "bg-pink-500",
      earned: true,
      rarity: "Rare",
    },
    {
      id: 8,
      name: "Reaction King",
      description: "React to 100 messages",
      icon: Heart,
      color: "bg-red-500",
      earned: true,
      rarity: "Common",
      progress: 100,
      total: 100,
    },

    // In Progress Badges
    {
      id: 9,
      name: "Voice Master",
      description: "Send 50 voice messages",
      icon: MessageCircle,
      color: "bg-indigo-500",
      earned: false,
      rarity: "Uncommon",
      progress: 23,
      total: 50,
    },
    {
      id: 10,
      name: "Night Owl",
      description: "Chat after midnight 10 times",
      icon: Calendar,
      color: "bg-slate-600",
      earned: false,
      rarity: "Rare",
      progress: 6,
      total: 10,
    },
    {
      id: 11,
      name: "Social Butterfly",
      description: "Join 10 different communities",
      icon: Users,
      color: "bg-teal-500",
      earned: false,
      rarity: "Rare",
      progress: 7,
      total: 10,
    },

    // Locked Badges
    {
      id: 12,
      name: "Legend",
      description: "Reach Level 50",
      icon: Crown,
      color: "bg-yellow-600",
      earned: false,
      rarity: "Legendary",
      locked: true,
    },
    {
      id: 13,
      name: "Influencer",
      description: "Get 1000 message reactions",
      icon: Trophy,
      color: "bg-amber-500",
      earned: false,
      rarity: "Epic",
      locked: true,
    },
    {
      id: 14,
      name: "Mentor",
      description: "Help 100 community members",
      icon: Shield,
      color: "bg-emerald-600",
      earned: false,
      rarity: "Epic",
      locked: true,
    },
    {
      id: 15,
      name: "Game Master",
      description: "Win 50 mini-games",
      icon: Gamepad2,
      color: "bg-violet-500",
      earned: false,
      rarity: "Epic",
      locked: true,
    },
  ]

  const rarityColors = {
    Common: "bg-gray-500",
    Uncommon: "bg-green-500",
    Rare: "bg-blue-500",
    Epic: "bg-purple-500",
    Legendary: "bg-yellow-500",
  }

  const earnedBadges = badges.filter((badge) => badge.earned)
  const inProgressBadges = badges.filter((badge) => !badge.earned && !badge.locked && badge.progress !== undefined)
  const lockedBadges = badges.filter((badge) => badge.locked)

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{earnedBadges.length}</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">{inProgressBadges.length}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-muted-foreground">{lockedBadges.length}</div>
            <div className="text-sm text-muted-foreground">Locked</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">
              {Math.round((earnedBadges.length / badges.length) * 100)}%
            </div>
            <div className="text-sm text-muted-foreground">Completion</div>
          </CardContent>
        </Card>
      </div>

      {/* Earned Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Earned Badges ({earnedBadges.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className={`w-12 h-12 rounded-full ${badge.color} flex items-center justify-center relative`}>
                  <badge.icon className="w-6 h-6 text-white" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{badge.name}</h4>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${rarityColors[badge.rarity as keyof typeof rarityColors]} text-white`}
                    >
                      {badge.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* In Progress Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            In Progress ({inProgressBadges.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inProgressBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
                <div className={`w-12 h-12 rounded-full ${badge.color} flex items-center justify-center opacity-70`}>
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{badge.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {badge.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
                  {badge.progress !== undefined && badge.total && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>
                          {badge.progress}/{badge.total}
                        </span>
                        <span>{Math.round((badge.progress / badge.total) * 100)}%</span>
                      </div>
                      <Progress value={(badge.progress / badge.total) * 100} className="h-2" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Locked Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Locked Badges ({lockedBadges.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lockedBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-3 p-4 rounded-lg border bg-card opacity-50">
                <div className={`w-12 h-12 rounded-full ${badge.color} flex items-center justify-center relative`}>
                  <badge.icon className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{badge.name}</h4>
                    <Badge
                      variant="outline"
                      className={`text-xs ${rarityColors[badge.rarity as keyof typeof rarityColors]} text-white`}
                    >
                      {badge.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
