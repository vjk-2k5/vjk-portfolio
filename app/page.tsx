"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight, Trophy } from "lucide-react"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = [
    {
      id: "sixth-sense",
      title: "Sixth Sense Voice Assistant",
      description: "AI-powered voice assistant designed to understand and respond to complex commands with natural language processing capabilities.",
      image: "/AI voice assistant.png",
      technologies: ["Python", "AI", "NLP"],
    },
    {
      id: "three-nodes",
      title: "3 Nodes Game",
      description: "Interactive game built using advanced data structures and algorithms, showcasing complex problem-solving capabilities.",
      image: "/3 nodes game.png",
      technologies: ["C++", "DSA", "Expo Go"],
    },
    {
      id: "ai-sentiment",
      title: "AI Sentiment Analysis",
      description: "Cross-platform UI for sentiment analysis using AI to analyze text and provide insights.",
      image: "/sentiment analysis 1.png",
      technologies: ["TypeScript", "Next.js", "AI"],
    },
    {
      id: "sports-league",
      title: "Sports League Management",
      description: "Comprehensive system for managing teams, leagues, and player statistics with real-time updates.",
      image: "/placeholder.svg",
      technologies: ["React", "Next.js", "Database"],
    },
    {
      id: "legal-cases",
      title: "Legal Cases Management",
      description: "Platform for efficient management of legal cases, documents, and client information for law firms.",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "Next.js", "PostgreSQL"],
    },
  ]

  const hackathonWins = [
    {
      title: "ITRIX '25 - Vision Solve AI",
      description: "Built an AI video generation platform that helps students visualize concepts, break down complex equations, and convert handwritten notes into video content. The innovative solution earned us internship opportunities.",
      date: "March 2025",
      prize: "Internship Won",
    },
    {
      title: "Sparkathon Healthcare AI",
      description: "Developed an AI-powered appointment booking website with automated consultation and doctor matching based on patient needs. Features bilingual support in English and Tamil for wider accessibility.",
      date: "February 2025",
      prize: "Runner-up",
    },
  ]

  const skills = ["React", "Next.js", "Python", "C++", "Flask", "Git", "Expo Go", "TypeScript", "C", "PostgreSQL"]

  return (
    <div className="space-y-16">
      <section className="py-12">
        <Terminal
          text="Hello, World. I am Vijay Krishna S. Young entrepreneur, full-stack developer, and AI enthusiast from Chennai, India. Welcome to my digital realm."
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Hackathon Wins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathonWins.map((win, index) => (
            <div key={index} className="bg-background/50 border border-primary/20 rounded-lg p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{win.title}</h3>
                  <p className="text-sm text-muted-foreground">{win.date}</p>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Trophy size={14} />
                  <span className="text-sm font-medium">{win.prize}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{win.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
