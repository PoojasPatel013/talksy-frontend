"use client"

import { useState } from "react"
import { Languages, FileText, MessageSquare, Calendar, Lightbulb, Search, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export function AIHelpers() {
  const [activeHelper, setActiveHelper] = useState<string | null>(null)
  const [inputText, setInputText] = useState("")
  const [result, setResult] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const helpers = [
    {
      id: "translate",
      name: "Language Translator",
      description: "Translate text between different languages",
      icon: Languages,
      color: "bg-blue-500",
      category: "Communication",
    },
    {
      id: "summarize",
      name: "Text Summarizer",
      description: "Summarize long articles or documents",
      icon: FileText,
      color: "bg-green-500",
      category: "Productivity",
    },
    {
      id: "reply-suggest",
      name: "Reply Suggestions",
      description: "Get smart reply suggestions for messages",
      icon: MessageSquare,
      color: "bg-purple-500",
      category: "Communication",
    },
    {
      id: "schedule",
      name: "Schedule Planner",
      description: "Plan your day and organize tasks",
      icon: Calendar,
      color: "bg-orange-500",
      category: "Productivity",
    },
    {
      id: "brainstorm",
      name: "Idea Generator",
      description: "Brainstorm creative ideas and solutions",
      icon: Lightbulb,
      color: "bg-yellow-500",
      category: "Creativity",
    },
    {
      id: "research",
      name: "Research Assistant",
      description: "Help with research and fact-checking",
      icon: Search,
      color: "bg-indigo-500",
      category: "Learning",
    },
    {
      id: "explain",
      name: "Concept Explainer",
      description: "Explain complex topics in simple terms",
      icon: BookOpen,
      color: "bg-teal-500",
      category: "Learning",
    },
    {
      id: "time-manage",
      name: "Time Manager",
      description: "Optimize your time and productivity",
      icon: Clock,
      color: "bg-red-500",
      category: "Productivity",
    },
  ]

  const recentHelps = [
    {
      type: "Translation",
      request: "Translate 'Hello, how are you?' to Spanish",
      result: "Hola, ¿cómo estás?",
      time: "2 hours ago",
    },
    {
      type: "Summary",
      request: "Summarize article about AI trends",
      result: "AI is rapidly advancing in healthcare, education, and automation...",
      time: "Yesterday",
    },
    {
      type: "Reply Suggestion",
      request: "Suggest reply to meeting invitation",
      result: "Thank you for the invitation. I'll be there at 2 PM.",
      time: "2 days ago",
    },
  ]

  const handleHelperAction = (helperId: string) => {
    if (!inputText.trim()) return

    setActiveHelper(helperId)
    setIsProcessing(true)

    setTimeout(() => {
      let mockResult = ""
      switch (helperId) {
        case "translate":
          mockResult = "Hola, ¿cómo estás? (Spanish translation)"
          break
        case "summarize":
          mockResult = "This text discusses the main points about... (summarized in 2 sentences)"
          break
        case "reply-suggest":
          mockResult =
            "Here are some suggested replies: 1) That sounds great! 2) I'll need to check my schedule 3) Thanks for letting me know"
          break
        case "schedule":
          mockResult = "Here's your optimized schedule: 9 AM - Focus work, 11 AM - Meetings, 2 PM - Creative tasks"
          break
        case "brainstorm":
          mockResult = "Creative ideas: 1) Interactive workshops 2) Gamified learning 3) Community challenges"
          break
        case "research":
          mockResult = "Based on research: This topic has 3 key aspects with supporting evidence from recent studies"
          break
        case "explain":
          mockResult = "Simple explanation: This concept works like... with these main components"
          break
        case "time-manage":
          mockResult =
            "Time optimization tips: Use the Pomodoro technique, batch similar tasks, and take regular breaks"
          break
        default:
          mockResult = "AI processing complete. Here's your result!"
      }
      setResult(mockResult)
      setIsProcessing(false)
    }, 2000)
  }

  const categories = [...new Set(helpers.map((h) => h.category))]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mb-2">AI Helper Tools</h2>
        <p className="text-gray-600">Get instant help with various tasks using AI assistance</p>
      </div>

      {/* Helper Categories */}
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-black mb-3">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpers
                .filter((helper) => helper.category === category)
                .map((helper) => {
                  const IconComponent = helper.icon
                  return (
                    <Card key={helper.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${helper.color} bg-opacity-10`}>
                            <IconComponent className="w-5 h-5 text-black" />
                          </div>
                          <div>
                            <CardTitle className="text-sm font-medium text-black">{helper.name}</CardTitle>
                            <CardDescription className="text-xs text-gray-600">{helper.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setActiveHelper(helper.id)}
                          className="w-full text-black border-gray-200 hover:bg-gray-50"
                        >
                          Use Helper
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Active Helper Interface */}
      {activeHelper && (
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-black">{helpers.find((h) => h.id === activeHelper)?.name}</CardTitle>
            <CardDescription className="text-gray-600">
              {helpers.find((h) => h.id === activeHelper)?.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-black mb-2 block">Enter your text or request:</label>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your text here..."
                className="min-h-[100px] border-gray-200 text-black placeholder:text-gray-400"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleHelperAction(activeHelper)}
                disabled={!inputText.trim() || isProcessing}
                className="bg-black text-white hover:bg-gray-800"
              >
                {isProcessing ? "Processing..." : "Get Help"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveHelper(null)
                  setInputText("")
                  setResult("")
                }}
                className="text-black border-gray-200 hover:bg-gray-50"
              >
                Cancel
              </Button>
            </div>
            {result && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-black mb-2">Result:</h4>
                <p className="text-gray-700">{result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Recent Helps */}
      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-black">Recent Helps</CardTitle>
          <CardDescription className="text-gray-600">Your recent AI assistance history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentHelps.map((help, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs bg-gray-200 text-black">
                      {help.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{help.time}</span>
                  </div>
                  <p className="text-sm text-black font-medium mb-1">{help.request}</p>
                  <p className="text-sm text-gray-600">{help.result}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
