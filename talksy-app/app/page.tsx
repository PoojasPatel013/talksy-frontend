import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Users, Heart, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white dark:text-foreground">
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 glass-effect animate-pulse-glow">
              Real Vibes. Real Talks.
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-float">Welcome to Talksy</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A place to vibe, vent, and connect. Talksy brings real people together through real talks — no filters, no
              pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 animate-pulse-glow">
                Join Talksy
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 glass-effect bg-transparent" asChild>
                <Link href="/docs">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container px-4 py-16 mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Talksy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience authentic conversations in a safe, supportive environment designed for real connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 glass-effect hover:animate-pulse-glow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-foreground mb-4" />
                <CardTitle className="text-foreground">Real Conversations</CardTitle>
                <CardDescription>
                  Engage in meaningful discussions without the pressure of perfect posts or viral content.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 glass-effect hover:animate-pulse-glow">
              <CardHeader>
                <Users className="h-12 w-12 text-foreground mb-4" />
                <CardTitle className="text-foreground">Safe Communities</CardTitle>
                <CardDescription>
                  Join topic-based groups where respect and authenticity are the foundation of every interaction.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 glass-effect hover:animate-pulse-glow">
              <CardHeader>
                <Heart className="h-12 w-12 text-foreground mb-4" />
                <CardTitle className="text-foreground">Emotional Support</CardTitle>
                <CardDescription>
                  Find understanding and support through anonymous posting and empathetic community responses.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 glass-effect hover:animate-pulse-glow">
              <CardHeader>
                <Shield className="h-12 w-12 text-foreground mb-4" />
                <CardTitle className="text-foreground">Privacy First</CardTitle>
                <CardDescription>
                  Your privacy matters. Control your visibility and share only what you're comfortable with.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 glass-effect hover:animate-pulse-glow">
              <CardHeader>
                <Zap className="h-12 w-12 text-foreground mb-4" />
                <CardTitle className="text-foreground">Smart Matching</CardTitle>
                <CardDescription>
                  Connect with like-minded people through our vibe-matching system and interest-based discovery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 glass-effect hover:animate-pulse-glow">
              <CardHeader>
                <Globe className="h-12 w-12 text-foreground mb-4" />
                <CardTitle className="text-foreground">Global Reach</CardTitle>
                <CardDescription>
                  Connect with people worldwide while maintaining the intimacy of small group conversations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-16 mx-auto text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Start Talking?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of people having real conversations every day.
            </p>
            <Button size="lg" className="text-lg px-8 animate-pulse-glow">
              Get Started Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/50 glass-effect">
          <div className="container px-4 py-8 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-xl font-bold text-foreground">Talksy</span>
              </div>
              <p className="text-sm text-muted-foreground">© 2025 Talksy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
