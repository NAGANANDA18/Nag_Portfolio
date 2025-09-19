"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "RV Institute of Technology & Management",
    duration: "2023 – 2025",
    location: "Bengaluru, KA",
    cgpa: "7.47",
    description: [
      "Specialized in Data Structures, Algorithms, and Database Management Systems",
      "Completed advanced coursework in Machine Learning and Artificial Intelligence",
      "Developed multiple projects in web development and data analytics",
      "Active participant in technical workshops and coding competitions",
    ],
    highlights: ["Data Structures & Algorithms", "Machine Learning", "Database Systems", "Software Engineering"],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "ASC Degree College",
    duration: "2021 – 2023",
    location: "Bengaluru, KA",
    cgpa: "7.19",
    description: [
      "Strong foundation in programming languages including C, C++, and Java",
      "Comprehensive study of computer fundamentals and software development",
      "Completed projects in web development and database management",
      "Participated in various technical events and coding competitions",
    ],
    highlights: ["Programming Fundamentals", "Web Development", "Database Management", "Software Testing"],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic journey focused on computer science, data engineering, and software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-background" />

                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                          <div className="flex items-center text-primary font-semibold mb-2">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            {edu.institution}
                          </div>
                        </div>
                        <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full">
                          <Award className="h-4 w-4 mr-1" />
                          <span className="text-sm font-semibold">CGPA: {edu.cgpa}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {edu.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground text-sm leading-relaxed flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
