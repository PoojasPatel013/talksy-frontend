"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, MessageCircle, Users, Gift, Flame, Clock, X, Settings, Award as MarkAsRead } from "lucide-react"

interface Notification {
  id: string
  type: "message" | "mention" | "community" | "streak" | "reward" | "social"
  title: string
  message: string
  timestamp: string
  read: boolean
  avatar?: string
  actionUrl?: string
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "message",
      title: "New message from Sarah",
      message: "Hey! Are you free to chat?",
      timestamp: "2 minutes ago",
      read: false,
      avatar: "/user-1.png",
      actionUrl: "/chat/sarah",
    },
    {
      id: "2",
      type: "streak",
      title: "Streak Alert!",
      message: "Your 7-day streak with Alex will break in 2 hours if you don't chat!",
      timestamp: "1 hour ago",
      read: false,
    },
    {
      id: "3",
      type: "reward",
      title: "Daily Treasure Available!",
      message: "Your daily reward is ready to claim. Don't miss out!",
      timestamp: "3 hours ago",
      read: false,
    },
    {
      id: "4",
      type: "community",
      title: "Tech Innovators",
      message: "New discussion: 'The Future of AI in 2024'",
      timestamp: "5 hours ago",
      read: true,
      avatar: "/group-1.png",
    },
    {
      id: "5",
      type: "social",
      title: "Friends are waiting!",
      message: "3 friends mentioned you in the group chat while you were away",
      timestamp: "1 day ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "message":
        return <MessageCircle className="w-4 h-4" />
      case "mention":
        return <MessageCircle className="w-4 h-4" />
      case "community":
        return <Users className="w-4 h-4" />
      case "streak":
        return <Flame className="w-4 h-4 text-orange-500" />
      case "reward":
        return <Gift className="w-4 h-4 text-primary" />
      case "social":
        return <Users className="w-4 h-4 text-blue-500" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "streak":
        return "bg-orange-500/10 border-orange-500/20"
      case "reward":
        return "bg-primary/10 border-primary/20"
      case "social":
        return "bg-blue-500/10 border-blue-500/20"
      default:
        return "bg-muted/50"
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuHeader className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Notifications</h3>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                <MarkAsRead className="w-4 h-4 mr-1" />
                Mark all read
              </Button>
            )}
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </DropdownMenuHeader>

        <ScrollArea className="h-96">
          <div className="p-2 space-y-2">
            {notifications.length === 0 ? (
              <div className="text-center py-8">
                <Bell className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground">No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                    !notification.read ? "border-primary/50 bg-primary/5" : ""
                  } ${getNotificationColor(notification.type)}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      {notification.avatar ? (
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{notification.title[0]}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          {getNotificationIcon(notification.type)}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-medium truncate">{notification.title}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-6 h-6 opacity-0 group-hover:opacity-100"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeNotification(notification.id)
                            }}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{notification.message}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {notification.timestamp}
                          </div>
                          {!notification.read && <div className="w-2 h-2 bg-primary rounded-full" />}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
