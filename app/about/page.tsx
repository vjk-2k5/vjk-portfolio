"use client"

import { useState } from "react"
import { Terminal } from "@/components/terminal"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)

  const experiences = [
    {
      title: "CEO & Founder",
      company: "Vision Solve AI",
      period: "Mar 2025 - Present",
      description: "After winning ITRIX '25, engaged with users to build an AI video generation platform with a comprehensive study ecosystem including quizzes, mindmaps, and other features. Currently preparing for public release.",
    },
    {
      title: "System Designer",
      company: "Sixth Sense AI",
      period: "Feb 2025 - Mar 2025",
      description: "Designed architectures, reviewed code, and led technical planning for AI systems.We have kept this at pause to focus on Vision Solve AI.",
    },
    {
      title: "Front-End Developer & Prompt Engineer",
      company: "AI Sentiment Analysis",
      period: "Dec 2024 - Mar 2025",
      description:
        "Developed cross-platform UIs using TypeScript, Next.js, and Tailwind CSS for sentiment analysis applications.",
    },
  ]

  const education = {
    degree: "B.Tech in Information Technology",
    institution: "College of Engineering Guindy – Anna University",
    period: "Expected May 2027",
    gpa: "8.3",
    roles: ["NSS Member", "Tech Head @ Anna University Entrepreneurship Club"],
  }

  const hackathons = [
    {
      name: "ITRIX 2025",
      project: "Vision Solve AI Platform",
      venue: "CEG",
      achievement: "Winner - Secured Internship Opportunities",
    },
    {
      name: "Nexathon 2025",
      project: "AI Voice Assistant",
      venue: "VIT Chennai",
      achievement: "Semi-Finalist",
    },
    {
      name: "Smart India Hackathon 2024",
      project: "AI Job Recommender",
      venue: "Govt. of India",
      achievement: "Semi-Finalist",
    },
    {
      name: "ITRIX 2024",
      project: "Solar Energy Project",
      venue: "CEG",
      achievement: "Special Mention",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Expo Go"] },
    { category: "Backend", items: ["Python", "Flask", "PostgreSQL"] },
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "C"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Docker"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Adaptability"] },
  ]

  return (
    <div className="space-y-16">
      <section>
        <Terminal
          text="Initializing personal profile... Access granted. Loading bio data..."
          typingSpeed={30}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <Terminal
            text="Hello, I'm Vijay Krishna S. A tech-savvy innovator with hands-on experience in emerging technologies and a passion for continuous improvement. I excel in fast-paced environments and driving tech advancements."
            typingSpeed={20}
            className="max-w-3xl mx-auto mt-4"
            showPrompt={false}
            onComplete={() => setBioComplete(true)}
          />
        )}
      </section>

      {bioComplete && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-6">Personal Info</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">personal_info.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-1">
                  <span className="text-primary">$</span> cat personal_details.txt
                </p>
                <div className="mb-4 space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-primary inline-block w-20">name:</span> Vijay Krishna S
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary inline-block w-20">location:</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" /> Chennai, IN 600042
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary inline-block w-20">email:</span>
                    <span className="flex items-center gap-1">
                      <Mail size={14} className="text-primary" /> svijaykrishna12@gmail.com
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary inline-block w-20">phone:</span>
                    <span className="flex items-center gap-1">
                      <Phone size={14} className="text-primary" /> +91 7305499740
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience Timeline</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">$</span> cat job_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-primary">title:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-primary">period:</span> {exp.period}
                      </p>
                      <p>
                        <span className="text-primary">description:</span> {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">education.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-1">
                  <span className="text-primary">$</span> cat education_details.txt
                </p>
                <div className="mb-4">
                  <p>
                    <span className="text-primary">degree:</span> {education.degree}
                  </p>
                  <p>
                    <span className="text-primary">institution:</span> {education.institution}
                  </p>
                  <p>
                    <span className="text-primary">period:</span> {education.period}
                  </p>
                  <p>
                    <span className="text-primary">gpa:</span> {education.gpa}
                  </p>
                  <p>
                    <span className="text-primary">roles:</span> {education.roles.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Hackathons</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">hackathons.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> cat hackathon_achievements.txt
                </p>
                <div className="space-y-4">
                  {hackathons.map((hackathon, index) => (
                    <div key={index} className="mb-2">
                      <p>
                        <span className="text-primary">event:</span> {hackathon.name}
                      </p>
                      <p>
                        <span className="text-primary">project:</span> {hackathon.project}
                      </p>
                      <p>
                        <span className="text-primary">venue:</span> {hackathon.venue}
                      </p>
                      <p>
                        <span className="text-primary">achievement:</span> {hackathon.achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">System Specs</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> cat /proc/skills
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2">
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Connect</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">network_connections.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> ifconfig
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-primary">github0:</p>
                    <Link
                      href="https://github.com/vjk-2k5"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                      target="_blank"
                    >
                      <Github size={16} />
                      github.com/vjk-2k5
                    </Link>
                  </div>
                  <div>
                    <p className="mb-1 text-primary">linkedin0:</p>
                    <Link
                      href="https://linkedin.com/in/vijay-krishna-s"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                      target="_blank"
                    >
                      <Linkedin size={16} />
                      linkedin.com/in/vijay-krishna-s
                    </Link>
                  </div>
                  <div>
                    <p className="mb-1 text-primary">mail0:</p>
                    <Link
                      href="mailto:svijaykrishna12@gmail.com"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Mail size={16} />
                      svijaykrishna12@gmail.com
                    </Link>
                  </div>
                  <div>
                    <p className="mb-1 text-primary">phone0:</p>
                    <Link
                      href="tel:+917305499740"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Phone size={16} />
                      +91 7305499740
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
