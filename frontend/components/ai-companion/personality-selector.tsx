"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Briefcase, Smile, Zap, Palette, Settings } from "lucide-react"

interface PersonalitySelectorProps {
  selectedPersonality: string
  onPersonalityChange: (personality: string) => void
  detailed?: boolean
}

export function PersonalitySelector({
  selectedPersonality,
  onPersonalityChange,
  detailed = false,
}: PersonalitySelectorProps) {
  const personalities = [
    {
      id: "friendly",
      name: "Friendly",
      description: "Warm, caring, and always ready to listen",
      icon: Heart,
      color: "bg-pink-500",
      traits: ["Empathetic", "Supportive", "Cheerful"],
    },
    {
      id: "professional",
      name: "Professional",
      description: "Focused, efficient, and knowledgeable",
      icon: Briefcase,
      color: "bg-blue-500",
      traits: ["Analytical", "Precise", "Helpful"],
    },
    {
      id: "humorous",
      name: "Humorous",
      description: "Witty, playful, and loves to make you laugh",
      icon: Smile,
      color: "bg-yellow-500",
      traits: ["Witty", "Playful", "Entertaining"],
    },
    {
      id: "motivational",
      name: "Motivational",
      description: "Inspiring, energetic, and goal-oriented",
      icon: Zap,
      color: "bg-orange-500",
      traits: ["Inspiring", "Energetic", "Positive"],
    },
    {
      id: "creative",
      name: "Creative",
      description: "Imaginative, artistic, and full of ideas",
      icon: Palette,
      color: "bg-purple-500",
      traits: ["Imaginative", "Artistic", "Innovative"],
    },
  ]

  if (detailed) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Personality Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalities.map((personality) => (
                <div
                  key={personality.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPersonality === personality.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => onPersonalityChange(personality.id)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full ${personality.color} flex items-center justify-center`}>
                      <personality.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{personality.name}</h4>
                      {selectedPersonality === personality.id && (
                        <Badge variant="secondary" className="text-xs">
                          Active
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{personality.description}</p>
                  <div className="flex gap-1 flex-wrap">
                    {personality.traits.map((trait) => (
                      <Badge key={trait} variant="outline" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Personality
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {personalities.map((personality) => (
          <Button
            key={personality.id}
            variant={selectedPersonality === personality.id ? "default" : "outline"}
            className="w-full justify-start gap-3 bg-transparent"
            onClick={() => onPersonalityChange(personality.id)}
          >
            <div className={`w-6 h-6 rounded-full ${personality.color} flex items-center justify-center`}>
              <personality.icon className="w-3 h-3 text-white" />
            </div>
            {personality.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
