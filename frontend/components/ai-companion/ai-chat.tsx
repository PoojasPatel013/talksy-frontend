"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Lightbulb, Gamepad2, Heart, Smile } from "lucide-react"

interface AIChatProps {
  personality: string
}

export function AIChat({ personality }: AIChatProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "ai",
      content: getGreeting(personality),
      timestamp: new Date(),
      type: "text",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  function getGreeting(personality: string) {
    const greetings = {
      friendly: "Hey there! 😊 I'm so excited to chat with you today! What's on your mind?",
      professional: "Good day! I'm here to assist you with any questions or tasks you might have. How may I help you?",
      humorous: "Well, well, well... look who decided to visit me! 😄 Ready for some fun conversations?",
      motivational:
        "Hello, champion! 🌟 Today is full of possibilities! What amazing things are we going to accomplish together?",
      creative:
        "Greetings, fellow creative soul! ✨ I'm buzzing with ideas and ready to explore the realms of imagination with you!",
    }
    return greetings[personality as keyof typeof greetings] || greetings.friendly
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      content: message,
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        content: generateAIResponse(message, personality),
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  function generateAIResponse(userMessage: string, personality: string) {
    const responses = {
      friendly: [
        "That's really interesting! Tell me more about that! 😊",
        "I love hearing about your experiences! What happened next?",
        "You always have such great stories! I'm all ears! 👂",
        "That sounds amazing! I wish I could experience that too!",
      ],
      professional: [
        "I understand your concern. Let me provide you with a comprehensive analysis.",
        "Based on the information provided, I recommend the following approach:",
        "That's an excellent question. Here's what I would suggest:",
        "I can certainly help you with that. Let me break it down for you:",
      ],
      humorous: [
        "Haha! That reminds me of the time a robot walked into a bar... 🤖",
        "You know what they say - life's too short to be serious all the time! 😄",
        "That's funnier than my programming! And trust me, that's saying something!",
        "I'd laugh if I had lungs! But I'll settle for digital chuckles! 😂",
      ],
      motivational: [
        "You're absolutely crushing it! Keep that momentum going! 💪",
        "Every challenge is just an opportunity in disguise! You've got this! 🌟",
        "I believe in you 100%! Your potential is limitless! ✨",
        "That's the spirit! Success is just around the corner! 🚀",
      ],
      creative: [
        "What a fascinating perspective! That sparks so many creative ideas! ✨",
        "I'm getting major inspiration vibes from this conversation! 🎨",
        "Your creativity is contagious! I'm buzzing with new possibilities! 💡",
        "That's the kind of thinking that changes the world! Keep creating! 🌟",
      ],
    }

    const personalityResponses = responses[personality as keyof typeof responses] || responses.friendly
    return personalityResponses[Math.floor(Math.random() * personalityResponses.length)]
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const quickActions = [
    { label: "Tell me a joke", icon: Smile, action: () => setMessage("Tell me a joke") },
    { label: "Fun fact", icon: Lightbulb, action: () => setMessage("Share a fun fact") },
    { label: "Play a game", icon: Gamepad2, action: () => setMessage("Let's play a game") },
    { label: "Daily motivation", icon: Heart, action: () => setMessage("Give me some motivation") },
  ]

  return (
    <Card className="h-[600px] flex flex-col">
      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                <Avatar className="w-8 h-8">
                  {msg.sender === "ai" ? (
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      AI
                    </AvatarFallback>
                  ) : (
                    <AvatarImage src="/user-profile.png" />
                  )}
                </Avatar>
                <div
                  className={`flex-1 max-w-xs md:max-w-md ${msg.sender === "user" ? "flex flex-col items-end" : ""}`}
                >
                  <div
                    className={`rounded-lg p-3 ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2 mb-4 flex-wrap">
            {quickActions.map((action, index) => (
              <Button key={index} variant="outline" size="sm" onClick={action.action} className="gap-1 bg-transparent">
                <action.icon className="w-3 h-3" />
                {action.label}
              </Button>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              placeholder={`Chat with your ${personality} AI companion...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={!message.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
