"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Sparkles, Brain, Gamepad2, HelpCircle, Settings, Zap, Heart, MessageCircle } from "lucide-react"
import { AIChat } from "@/components/ai-companion/ai-chat"
import { PersonalitySelector } from "@/components/ai-companion/personality-selector"
import { AIMemory } from "@/components/ai-companion/ai-memory"
import { AIGames } from "@/components/ai-companion/ai-games"
import { AIHelpers } from "@/components/ai-companion/ai-helpers"

export default function AICompanionPage() {
  const [selectedPersonality, setSelectedPersonality] = useState("friendly")
  const [currentMode, setCurrentMode] = useState("chat")

  const companionStats = {
    conversationsToday: 12,
    totalConversations: 247,
    gamesPlayed: 18,
    helpRequests: 34,
    memoryItems: 15,
    favoriteTopics: ["Technology", "Movies", "Travel"],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">AI Companion</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium">Always Available</span>
              </div>
              <Badge variant="secondary" className="gap-1">
                <Heart className="w-3 h-3" />
                {companionStats.conversationsToday} chats today
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Companion Info & Settings */}
          <div className="space-y-6">
            {/* Companion Avatar & Status */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Avatar className="w-20 h-20 mx-auto border-4 border-purple-200">
                    <AvatarImage src="/ai-companion.png" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Talksy AI</h3>
                <Badge variant="secondary" className="mb-4">
                  {selectedPersonality.charAt(0).toUpperCase() + selectedPersonality.slice(1)} Mode
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Your personal AI companion, ready to chat, help, and play games with you!
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Companion Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-purple-500">{companionStats.totalConversations}</div>
                    <div className="text-xs text-muted-foreground">Total Chats</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-pink-500">{companionStats.gamesPlayed}</div>
                    <div className="text-xs text-muted-foreground">Games Played</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-500">{companionStats.helpRequests}</div>
                    <div className="text-xs text-muted-foreground">Help Requests</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-500">{companionStats.memoryItems}</div>
                    <div className="text-xs text-muted-foreground">Memories</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personality Selector */}
            <PersonalitySelector
              selectedPersonality={selectedPersonality}
              onPersonalityChange={setSelectedPersonality}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Tabs value={currentMode} onValueChange={setCurrentMode} className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="chat" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="games" className="gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  Games
                </TabsTrigger>
                <TabsTrigger value="help" className="gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Help
                </TabsTrigger>
                <TabsTrigger value="memory" className="gap-2">
                  <Brain className="w-4 h-4" />
                  Memory
                </TabsTrigger>
                <TabsTrigger value="settings" className="gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chat">
                <AIChat personality={selectedPersonality} />
              </TabsContent>

              <TabsContent value="games">
                <AIGames />
              </TabsContent>

              <TabsContent value="help">
                <AIHelpers />
              </TabsContent>

              <TabsContent value="memory">
                <AIMemory />
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Companion Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <PersonalitySelector
                        selectedPersonality={selectedPersonality}
                        onPersonalityChange={setSelectedPersonality}
                        detailed
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
