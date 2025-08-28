"use client"

import { useState } from "react"
import { MessageCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { ChatWindow } from "@/components/chat/chat-window"
import { ChatInput } from "@/components/chat/chat-input"
import Link from "next/link"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState("1")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="h-screen bg-white flex">
      <div className="absolute top-4 left-4 z-10">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Chat Sidebar */}
      <ChatSidebar
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <ChatWindow chatId={selectedChat} />
            <ChatInput chatId={selectedChat} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">Welcome to Talksy</h3>
                <p className="text-gray-600">Select a chat to start messaging</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
