import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white dark:text-foreground">
      <div className="relative z-10">
      <Navbar />

      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 glass-effect">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start for free and upgrade when you're ready for more features and connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 glass-effect hover:animate-pulse-glow transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Free</CardTitle>
              <div className="text-4xl font-bold text-foreground">$0</div>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Up to 5 group chats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Basic post & comment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Anonymous posting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Standard reactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Basic profile tags</span>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-primary relative glass-effect animate-pulse-glow">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Pro</CardTitle>
              <div className="text-4xl font-bold text-foreground">$9.99</div>
              <CardDescription>per month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Unlimited group chats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Priority matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Advanced privacy controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Custom status bubbles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Story highlights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">AI conversation assistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Premium badges</span>
                </div>
              </div>
              <Button className="w-full">Upgrade to Pro</Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="border-2 glass-effect hover:animate-pulse-glow transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Premium</CardTitle>
              <div className="text-4xl font-bold text-foreground">$19.99</div>
              <CardDescription>per month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Everything in Pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Voice & video calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Create conversation rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Priority support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Custom themes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" />
                  <span className="text-sm">Early access features</span>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                Go Premium
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                 <CardTitle className="text-lg text-white">Can I change my plan anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                  prorate any billing differences.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-white">Is there a free trial for paid plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer a 7-day free trial for both Pro and Premium plans. No credit card required to start your
                  trial.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:animate-pulse-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-white">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through
                  Stripe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
