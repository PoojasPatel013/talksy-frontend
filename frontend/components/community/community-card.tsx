import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Users, MessageCircle, Globe, Lock, TrendingUp } from "lucide-react"

interface CommunityCardProps {
  community: {
    id: number
    name: string
    description: string
    members: number
    category: string
    isPrivate: boolean
    avatar: string
    badges: string[]
    recentActivity: string
  }
  variant?: "default" | "compact" | "featured"
}

export function CommunityCard({ community, variant = "default" }: CommunityCardProps) {
  if (variant === "compact") {
    return (
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={community.avatar || "/placeholder.svg"} />
              <AvatarFallback>{community.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{community.name}</h3>
              <p className="text-xs text-muted-foreground">{community.members.toLocaleString()} members</p>
            </div>
            <Button size="sm" variant="outline">
              Join
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (variant === "featured") {
    return (
      <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-primary" />
            <Badge variant="secondary">Featured</Badge>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={community.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-lg">{community.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold">{community.name}</h3>
                {community.isPrivate ? <Lock className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
              </div>
              <p className="text-muted-foreground mb-3">{community.description}</p>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1 text-sm">
                  <Users className="w-4 h-4" />
                  {community.members.toLocaleString()}
                </div>
                <Badge variant="outline">{community.category}</Badge>
              </div>
              <Button className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Join Community
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={community.avatar || "/placeholder.svg"} />
            <AvatarFallback>{community.name[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold">{community.name}</h3>
              {community.isPrivate ? (
                <Lock className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Globe className="w-4 h-4 text-muted-foreground" />
              )}
            </div>

            <p className="text-muted-foreground mb-3">{community.description}</p>

            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                {community.members.toLocaleString()} members
              </div>
              <Badge variant="outline">{community.category}</Badge>
              <span className="text-sm text-muted-foreground">Active {community.recentActivity}</span>
            </div>

            <div className="flex items-center gap-2">
              {community.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="sm">Join</Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
