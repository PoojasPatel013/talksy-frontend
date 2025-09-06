import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Code,
  Heart,
  Briefcase,
  Building,
  DollarSign,
  Globe,
  Gamepad2,
  Music,
  BookOpen,
  Coffee,
  Zap,
} from "lucide-react"

export default function CommunitiesPage() {
  const communities = [
    {
      name: "Tech Talk",
      description: "Discuss the latest in technology, programming, and digital innovation.",
      icon: Code,
      members: "12.5K",
      category: "Technology",
      color: "text-blue-500",
    },
    {
      name: "Personal Growth",
      description: "Share experiences, goals, and support each other's personal development journey.",
      icon: Heart,
      members: "8.3K",
      category: "Personal",
      color: "text-red-500",
    },
    {
      name: "Business Network",
      description: "Connect with entrepreneurs, share business insights, and discuss industry trends.",
      icon: Briefcase,
      members: "15.7K",
      category: "Business",
      color: "text-green-500",
    },
    {
      name: "Enterprise Solutions",
      description: "Enterprise-level discussions, B2B networking, and corporate innovation.",
      icon: Building,
      members: "6.2K",
      category: "Enterprise",
      color: "text-purple-500",
    },
    {
      name: "Finance & Investing",
      description: "Discuss markets, investment strategies, and financial planning.",
      icon: DollarSign,
      members: "9.8K",
      category: "Finance",
      color: "text-yellow-500",
    },
    {
      name: "Global Connections",
      description: "Connect with people worldwide, share cultures, and practice languages.",
      icon: Globe,
      members: "18.4K",
      category: "Global",
      color: "text-indigo-500",
    },
    {
      name: "Gaming Hub",
      description: "Gamers unite! Discuss games, find teammates, and share gaming experiences.",
      icon: Gamepad2,
      members: "11.2K",
      category: "Gaming",
      color: "text-orange-500",
    },
    {
      name: "Music & Arts",
      description: "Share your creative work, discuss music, art, and creative processes.",
      icon: Music,
      members: "7.9K",
      category: "Creative",
      color: "text-pink-500",
    },
    {
      name: "Book Club",
      description: "Book recommendations, reading discussions, and literary conversations.",
      icon: BookOpen,
      members: "5.6K",
      category: "Literature",
      color: "text-teal-500",
    },
    {
      name: "Coffee & Chill",
      description: "Casual conversations, daily life sharing, and relaxed discussions.",
      icon: Coffee,
      members: "14.1K",
      category: "Lifestyle",
      color: "text-amber-500",
    },
    {
      name: "Startup Founders",
      description: "Exclusive community for startup founders to share challenges and victories.",
      icon: Zap,
      members: "3.4K",
      category: "Startup",
      color: "text-cyan-500",
    },
    {
      name: "Study Groups",
      description: "Academic support, study sessions, and educational resource sharing.",
      icon: Users,
      members: "10.7K",
      category: "Education",
      color: "text-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden text-white dark:text-foreground">
      <div className="relative z-10">
      <Navbar />

      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Communities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Join Our Communities</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Find your tribe and connect with like-minded people across various interests and industries.
          </p>
        </div>

        {/* Featured Communities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Communities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {communities.slice(0, 6).map((community, index) => {
              const IconComponent = community.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className={`h-8 w-8 ${community.color}`} />
                      <div>
                        <CardTitle className="text-lg">{community.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {community.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{community.members} members</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm">{community.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-transparent" variant="outline">
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* All Communities */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">All Communities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {communities.slice(6).map((community, index) => {
              const IconComponent = community.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className={`h-6 w-6 ${community.color}`} />
                      <div>
                        <CardTitle className="text-lg">{community.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {community.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{community.members} members</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm">{community.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-transparent" variant="outline">
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Create Community CTA */}
        <section className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardHeader>
              <CardTitle className="text-2xl">Don't See Your Community?</CardTitle>
              <CardDescription>
                Create your own community and bring together people who share your interests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="text-lg px-8">
                Create Community
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
      </div>
    </div>
  )
}
