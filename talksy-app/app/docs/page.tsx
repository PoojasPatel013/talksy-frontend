import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MessageCircle,
  Users,
  Heart,
  Shield,
  Zap,
  Globe,
  Camera,
  File as Fire,
  Tags,
  DoorOpen,
  Smile,
  UserCheck,
} from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white dark:text-foreground">
      <div className="relative z-10">
        <Navbar />

      <div className="container px-4 py-12 mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 glass-effect">
            Documentation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Talksy Documentation</h1>
          <p className="text-xl text-white">
            Everything you need to know about using Talksy for authentic conversations.
          </p>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Features</h2>

          <div className="grid gap-6">
            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Post & Comment System</CardTitle>
                </div>
                <CardDescription>
                  Real-time posts and replies, like a chat-focused social platform. Share thoughts, respond to others,
                  and engage in flowing conversations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Topic-Based Explore</CardTitle>
                </div>
                <CardDescription>
                  Join live conversations by interest (Movies, Teen Talk, Tech, etc.). Discover new communities and
                  topics that match your vibe.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Private & Public Group Chats</CardTitle>
                </div>
                <CardDescription>
                  Create open or invite-only chat rooms. Build communities around shared interests or keep conversations
                  intimate with close friends.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">One-on-One DM After Vibe Match</CardTitle>
                </div>
                <CardDescription>
                  Message privately after mutual interaction. No spam, no unwanted messages - only connect when both
                  people are interested.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Anonymous Posting</CardTitle>
                </div>
                <CardDescription>
                  Share anonymously in safe categories. Express yourself freely without judgment when you need to vent
                  or seek advice.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Camera className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Story Sharing</CardTitle>
                </div>
                <CardDescription>
                  Share text or image stories for thoughts and moments. Express yourself creatively and share your daily
                  experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Respect/React System</CardTitle>
                </div>
                <CardDescription>
                  Use Respect, Relatable, Support reactions instead of generic likes. Show meaningful engagement with
                  others' posts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smile className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Status Bubble</CardTitle>
                </div>
                <CardDescription>
                  Set vibes like 'Feeling low' or 'Open to chat.' Let others know your current mood and availability for
                  conversations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Icebreaker Generator</CardTitle>
                </div>
                <CardDescription>
                  Auto-suggest questions for new chats. Never run out of conversation starters with our smart suggestion
                  system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Fire className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Streaks for Meaningful Interaction</CardTitle>
                </div>
                <CardDescription>
                  Earn TalkStreaks with 3+ meaningful replies. Build lasting connections through consistent, quality
                  conversations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Tags className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Profile Tags (Vibe Tags)</CardTitle>
                </div>
                <CardDescription>
                  Pick tags like Funny, Deep Thinker, Creative. Help others understand your personality and find
                  compatible conversation partners.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DoorOpen className="h-6 w-6 text-foreground" />
                  <CardTitle className="text-foreground">Conversation Rooms</CardTitle>
                </div>
                <CardDescription>
                  Live rooms on trending topics like Late Night Talks, Study Sessions, or Creative Corner. Join ongoing
                  conversations anytime.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Scope Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Scope & Vision</h2>
          <Card className="glass-effect">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-lg">
                  Talksy is designed to be more than just another social media platform. We're building a comprehensive
                  ecosystem for authentic human connection in the digital age.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Current Focus</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Real-time messaging & chat</li>
                      <li>• Community building tools</li>
                      <li>• Privacy-first approach</li>
                      <li>• Emotional support systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Future Roadmap</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• AI-powered conversation assistance</li>
                      <li>• Voice & video calling</li>
                      <li>• Advanced matching algorithms</li>
                      <li>• Mental health resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* How to Use Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">How to Use Talksy</h2>
          <div className="space-y-6">
            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                 <CardTitle className="text-xl text-white">1. Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sign up with your email, choose your vibe tags, and set your status bubble. Complete your profile to
                  help others understand your conversation style.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">2. Explore Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse topic-based communities or join conversation rooms. Use the explore feature to discover new
                  interests and like-minded people.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">3. Start Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Post thoughts, respond to others, or use icebreaker suggestions. Build connections through meaningful
                  interactions and mutual interests.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">4. Build Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintain TalkStreaks, exchange DMs after vibe matches, and participate in group chats. Focus on
                  quality over quantity in your connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What We Provide Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-white">What We Provide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Safe Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Moderated communities, privacy controls, and respectful interaction guidelines ensure everyone feels
                  safe to express themselves.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Authentic Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No algorithms pushing viral content. Focus on real conversations and genuine relationships between
                  real people.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Mental Health Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Anonymous posting options, supportive community reactions, and resources for those who need someone to
                  talk to.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Privacy Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  End-to-end encryption, granular privacy controls, and transparent data practices keep your
                  conversations secure.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      </div>
    </div>
  )
}
