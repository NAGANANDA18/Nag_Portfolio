"use client"

import { motion } from "framer-motion"
import { Trophy, Calendar, MapPin, Award } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Runner-Up - Inter-College Hackathon",
    organization: "Bengaluru City University (BCU)",
    year: "2025",
    type: "Competition",
    description:
      "Secured second place in the Inter-College Hackathon, demonstrating innovative problem-solving skills and technical expertise in a competitive environment.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Introduction to AI",
    organization: "Great Learning",
    year: "2024",
    type: "Certification",
    description:
      "Completed comprehensive course covering artificial intelligence fundamentals, machine learning concepts, and practical AI applications in modern technology.",
    icon: Award,
  },
  {
    id: 4,
    title: "Microsoft Excel: Beginner to Advanced",
    organization: "Udemy",
    year: "2024",
    type: "Certification",
    description:
      "Mastered Excel from basic functions to advanced features including VBA programming, data visualization, and complex analytical techniques for professional data management.",
    icon: Award,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for technical excellence and continuous learning in the field of technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 mb-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{achievement.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {achievement.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{achievement.organization}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{achievement.year}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
