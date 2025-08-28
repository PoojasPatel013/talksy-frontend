"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Smile, Paperclip, Send, ImageIcon, Mic, File, Camera, Gift } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface ChatInputProps {
  chatId: string
}

export function ChatInput({ chatId }: ChatInputProps) {
  const [message, setMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const handleSendMessage = () => {
    if (message.trim()) {
      // Frontend only - would send to backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleImageUpload = () => {
    imageInputRef.current?.click()
  }

  const emojis = ["😀", "😂", "❤️", "👍", "👎", "😢", "😮", "😡", "🎉", "🔥", "💯", "👏"]

  return (
    <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-end gap-3">
        {/* Attachment Options */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="shrink-0">
              <Paperclip className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2" align="start">
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleImageUpload}>
                <ImageIcon className="w-4 h-4 mr-2" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleFileUpload}>
                <File className="w-4 h-4 mr-2" />
                File
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Camera className="w-4 h-4 mr-2" />
                Camera
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Gift className="w-4 h-4 mr-2" />
                Sticker
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Message Input */}
        <div className="flex-1 relative">
          <Textarea
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="min-h-[44px] max-h-32 resize-none pr-12"
            rows={1}
          />

          {/* Emoji Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="absolute right-2 top-2">
                <Smile className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-3" align="end">
              <div className="grid grid-cols-6 gap-2">
                {emojis.map((emoji, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-lg"
                    onClick={() => setMessage(message + emoji)}
                  >
                    {emoji}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Voice Message / Send Button */}
        {message.trim() ? (
          <Button onClick={handleSendMessage} size="sm" className="shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            variant={isRecording ? "destructive" : "ghost"}
            size="sm"
            className="shrink-0"
            onClick={() => setIsRecording(!isRecording)}
          >
            <Mic className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          // Handle file upload
          console.log("File selected:", e.target.files?.[0])
        }}
      />
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          // Handle image upload
          console.log("Image selected:", e.target.files?.[0])
        }}
      />

      {/* Recording indicator */}
      {isRecording && (
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Recording voice message...
        </div>
      )}
    </div>
  )
}
