"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Calendar, MapPin, Heart, Star, Trash2, Plus } from "lucide-react"

export function AIMemory() {
  const memories = [
    {
      id: "1",
      type: "preference",
      title: "Favorite Color",
      content: "You mentioned that blue is your favorite color, especially ocean blue.",
      date: "2024-01-15",
      importance: "medium",
      icon: Heart,
    },
    {
      id: "2",
      type: "personal",
      title: "Birthday",
      content: "Your birthday is coming up on March 15th. You're planning a small celebration.",
      date: "2024-01-10",
      importance: "high",
      icon: Calendar,
    },
    {
      id: "3",
      type: "goal",
      title: "Learning Guitar",
      content: "You started learning guitar last month and practice 30 minutes daily.",
      date: "2024-01-08",
      importance: "high",
      icon: Star,
    },
    {
      id: "4",
      type: "location",
      title: "Hometown",
      content: "You grew up in San Francisco and miss the foggy mornings.",
      date: "2024-01-05",
      importance: "medium",
      icon: MapPin,
    },
    {
      id: "5",
      type: "interest",
      title: "Technology Passion",
      content: "You're passionate about AI and machine learning, especially natural language processing.",
      date: "2024-01-03",
      importance: "high",
      icon: Brain,
    },
    {
      id: "6",
      type: "preference",
      title: "Coffee Order",
      content: "You prefer oat milk lattes with an extra shot, no sugar.",
      date: "2024-01-01",
      importance: "low",
      icon: Heart,
    },
  ]

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "personal":
        return "bg-purple-500"
      case "preference":
        return "bg-pink-500"
      case "goal":
        return "bg-blue-500"
      case "location":
        return "bg-green-500"
      case "interest":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Memory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-500">{memories.length}</div>
            <div className="text-sm text-muted-foreground">Total Memories</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500">
              {memories.filter((m) => m.importance === "high").length}
            </div>
            <div className="text-sm text-muted-foreground">Important</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">
              {memories.filter((m) => m.type === "personal").length}
            </div>
            <div className="text-sm text-muted-foreground">Personal</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{memories.filter((m) => m.type === "goal").length}</div>
            <div className="text-sm text-muted-foreground">Goals</div>
          </CardContent>
        </Card>
      </div>

      {/* Memory List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              AI Memory Bank
            </CardTitle>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Plus className="w-4 h-4" />
              Add Memory
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full ${getTypeColor(memory.type)} flex items-center justify-center`}>
                  <memory.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{memory.title}</h4>
                    <Badge variant="secondary" className={getImportanceColor(memory.importance)}>
                      {memory.importance}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {memory.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{memory.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Remembered on {new Date(memory.date).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Memory Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Memory Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Most Common Topics</h4>
              <div className="space-y-2">
                {["Technology", "Personal Goals", "Preferences", "Locations"].map((topic, index) => (
                  <div key={topic} className="flex items-center justify-between">
                    <span className="text-sm">{topic}</span>
                    <Badge variant="secondary">{4 - index}</Badge>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Memory Timeline</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">This Week</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">This Month</span>
                  <Badge variant="secondary">6</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">All Time</span>
                  <Badge variant="secondary">{memories.length}</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
