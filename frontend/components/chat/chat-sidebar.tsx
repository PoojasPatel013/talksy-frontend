"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Plus, Users, Settings, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"

interface ChatSidebarProps {
  selectedChat: string
  onSelectChat: (chatId: string) => void
  collapsed: boolean
  onToggleCollapse: () => void
}

export function ChatSidebar({ selectedChat, onSelectChat, collapsed, onToggleCollapse }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const chats = [
    {
      id: "1",
      name: "Sarah Johnson",
      type: "direct",
      lastMessage: "Hey! How's your day going?",
      timestamp: "2m ago",
      unread: 2,
      online: true,
      avatar: "/user-1.png",
    },
    {
      id: "2",
      name: "Tech Enthusiasts",
      type: "group",
      lastMessage: "John: Check out this new framework!",
      timestamp: "5m ago",
      unread: 0,
      memberCount: 24,
      avatar: "/group-1.png",
    },
    {
      id: "3",
      name: "Alex Chen",
      type: "direct",
      lastMessage: "Thanks for the help earlier",
      timestamp: "1h ago",
      unread: 0,
      online: false,
      avatar: "/user-2.png",
    },
    {
      id: "4",
      name: "Design Team",
      type: "group",
      lastMessage: "Emma: New mockups are ready",
      timestamp: "2h ago",
      unread: 5,
      memberCount: 8,
      avatar: "/group-2.png",
    },
    {
      id: "5",
      name: "Mike Wilson",
      type: "direct",
      lastMessage: "See you tomorrow!",
      timestamp: "1d ago",
      unread: 0,
      online: true,
      avatar: "/user-3.png",
    },
  ]

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div
      className={`bg-card border-r border-border flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-80"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-semibold text-black">Chats</h2>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={onToggleCollapse} className="text-black hover:bg-gray-100">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>

        {!collapsed && (
          <>
            {/* Search */}
            <div className="relative mt-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-white text-black border-gray-300 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Chat
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-white text-black border-gray-300 hover:bg-gray-50"
              >
                <Users className="w-4 h-4 mr-2" />
                New Group
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                selectedChat === chat.id ? "bg-gray-100" : ""
              }`}
              onClick={() => onSelectChat(chat.id)}
            >
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gray-200 text-black">{chat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {chat.type === "direct" && chat.online && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
                {chat.type === "group" && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium truncate text-black">{chat.name}</h4>
                    <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate text-black">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <Badge className="ml-2 h-5 min-w-5 text-xs bg-black text-white">{chat.unread}</Badge>
                    )}
                  </div>
                  {chat.type === "group" && (
                    <div className="flex items-center gap-1 mt-1">
                      <Users className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{chat.memberCount} members</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* User Status */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/user-profile.png" />
                <AvatarFallback className="bg-gray-200 text-black">U</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-black">You</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
            <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
