import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function MembersPage() {
  const coreMembers = [
    {
      name: "1",
      role: "Idea",
      avatar: "/",
      description: "Passionate about building authentic connections in digital spaces.",
      codeWord: "CONNECT",
    },
    {
      name: "2",
      role: "Lead Developer",
      avatar: "/",
      description: "Full-stack engineer specializing in real-time systems and user experience design.",
      codeWord: "BUILD",
    },
    {
      name: "3",
      role: "Head of Community",
      avatar: "/",
      description: "Community builder with expertise in creating safe, inclusive online environments.",
      codeWord: "UNITE",
    },
  ]

  const supportingMembers = [
    {
      name: "4",
      role: "UX Designer",
      avatar: "/",
      description: "Crafting intuitive experiences that prioritize user wellbeing and authentic interaction.",
      codeWord: "DESIGN",
    },
    {
      name: "David Kim",
      role: "Backend Engineer",
      avatar: "/",
      description: "Building scalable infrastructure for secure, real-time communication systems.",
      codeWord: "SCALE",
    },
    {
      name: "Lisa Park",
      role: "Content Strategist",
      avatar: "/",
      description: "Developing community guidelines and content frameworks for healthy conversations.",
      codeWord: "GUIDE",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden text-white dark:text-foreground">
      <div className="relative z-10">
      <Navbar />

      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Team
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Meet the Talksy Team</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            The passionate people behind Talksy, working to create authentic connections in the digital world.
          </p>
        </div>

        {/* Team Code */}
        <div className="text-center mb-16">
          <Card className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardHeader>
              <CardTitle className="text-2xl">Team Code</CardTitle>
              <CardDescription>Our collective mission in one word</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AUTHENTIC
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Core Members</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="font-mono">
                      {member.codeWord}
                    </Badge>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Supporting Members */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Supporting Members</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportingMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="font-mono">
                      {member.codeWord}
                    </Badge>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Want to Join Our Team?</CardTitle>
              <CardDescription>
                We're always looking for passionate people who believe in authentic digital connections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you share our vision of creating meaningful conversations and building safe online communities, we'd
                love to hear from you.
              </p>
              <Badge variant="outline" className="text-lg px-4 py-2">
                careers@talksy.com
              </Badge>
            </CardContent>
          </Card>
        </section>
      </div>
      </div>
    </div>
  )
}
