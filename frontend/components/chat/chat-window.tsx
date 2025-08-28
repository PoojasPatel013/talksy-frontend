"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Phone, Video, MoreVertical, Users, Download } from "lucide-react"

interface ChatWindowProps {
  chatId: string
}

export function ChatWindow({ chatId }: ChatWindowProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [isTyping, setIsTyping] = useState(false)

  // Mock chat data
  const chatInfo = {
    "1": {
      name: "Sarah Johnson",
      type: "direct",
      online: true,
      avatar: "/user-1.png",
    },
    "2": {
      name: "Tech Enthusiasts",
      type: "group",
      memberCount: 24,
      avatar: "/group-1.png",
    },
  }[chatId] || {
    name: "Unknown Chat",
    type: "direct",
    online: false,
    avatar: "/default-avatar.png",
  }

  const messages = [
    {
      id: "1",
      senderId: "other",
      senderName: "Sarah Johnson",
      senderAvatar: "/user-1.png",
      content: "Hey! How's your day going?",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      id: "2",
      senderId: "me",
      senderName: "You",
      senderAvatar: "/user-profile.png",
      content: "Pretty good! Just working on some new features for Talksy",
      timestamp: "10:32 AM",
      type: "text",
    },
    {
      id: "3",
      senderId: "other",
      senderName: "Sarah Johnson",
      senderAvatar: "/user-1.png",
      content: "That sounds exciting! Can't wait to see what you're building",
      timestamp: "10:33 AM",
      type: "text",
      reactions: [{ emoji: "❤️", count: 1, users: ["Sarah Johnson"] }],
    },
    {
      id: "4",
      senderId: "me",
      senderName: "You",
      senderAvatar: "/user-profile.png",
      content: "Check out this mockup I'm working on",
      timestamp: "10:35 AM",
      type: "image",
      imageUrl: "/mockup-preview.png",
    },
    {
      id: "5",
      senderId: "other",
      senderName: "Sarah Johnson",
      senderAvatar: "/user-1.png",
      content: "Wow, that looks amazing! The design is so clean and modern",
      timestamp: "10:36 AM",
      type: "text",
      reactions: [{ emoji: "❤️", count: 1, users: ["Sarah Johnson"] }],
    },
  ]

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src={chatInfo.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-gray-200 text-black">{chatInfo.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {chatInfo.type === "direct" && chatInfo.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-black">{chatInfo.name}</h3>
              <p className="text-sm text-gray-600">
                {chatInfo.type === "direct"
                  ? chatInfo.online
                    ? "Online"
                    : "Last seen 2h ago"
                  : `${chatInfo.memberCount} members`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
              <Video className="w-4 h-4" />
            </Button>
            {chatInfo.type === "group" && (
              <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
                <Users className="w-4 h-4" />
              </Button>
            )}
            <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 bg-white" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => {
            const isMe = message.senderId === "me"
            const showAvatar = !isMe && (index === 0 || messages[index - 1].senderId !== message.senderId)

            return (
              <div key={message.id} className={`flex gap-3 ${isMe ? "flex-row-reverse" : ""}`}>
                {showAvatar && !isMe && (
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={message.senderAvatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gray-200 text-black">{message.senderName.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                {!showAvatar && !isMe && <div className="w-8" />}

                <div className={`flex-1 max-w-xs md:max-w-md ${isMe ? "flex flex-col items-end" : ""}`}>
                  {showAvatar && !isMe && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-black">{message.senderName}</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                  )}

                  <div className={`rounded-lg p-3 ${isMe ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
                    {message.type === "text" && <p className="text-sm">{message.content}</p>}
                    {message.type === "image" && (
                      <div className="space-y-2">
                        <p className="text-sm">{message.content}</p>
                        <div className="relative rounded-lg overflow-hidden">
                          <img
                            src={message.imageUrl || "/placeholder.svg"}
                            alt="Shared image"
                            className="w-full h-48 object-cover"
                          />
                          <Button
                            variant="secondary"
                            size="sm"
                            className="absolute top-2 right-2 bg-white text-black hover:bg-gray-100"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {message.reactions && (
                    <div className="flex gap-1 mt-1">
                      {message.reactions.map((reaction, idx) => (
                        <Badge key={idx} className="text-xs bg-gray-200 text-black">
                          {reaction.emoji} {reaction.count}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {isMe && <span className="text-xs text-gray-500 mt-1">{message.timestamp}</span>}
                </div>
              </div>
            )
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/user-1.png" />
                <AvatarFallback className="bg-gray-200 text-black">S</AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
