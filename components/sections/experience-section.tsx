"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "IVTREE IT Solutions",
    position: "Software Engineer Intern",
    duration: "2025 – Present",
    location: "Bengaluru, KA",
    description: [
      "Developing scalable web applications using modern frameworks and technologies",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing best practices in code quality, testing, and deployment processes",
      "Contributing to the design and architecture of enterprise-level applications",
    ],
    technologies: ["Python", "Java", "React", "Node.js", "MongoDB"],
  },
  {
    company: "LearnNex",
    position: "Data Science Intern",
    duration: "2024 – 2025",
    location: "Remote",
    description: [
      "Built and optimized machine learning models for predictive analytics",
      "Developed data preprocessing pipelines for large-scale datasets",
      "Created interactive dashboards and visualizations using Power BI and Tableau",
      "Collaborated on research projects involving natural language processing",
    ],
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Power BI", "SQL"],
  },
  {
    company: "Finlatics",
    position: "Data Science Intern",
    duration: "2024",
    location: "Remote",
    description: [
      "Analyzed financial datasets to identify market trends and patterns",
      "Developed predictive models for risk assessment and portfolio optimization",
      "Created automated reporting systems for stakeholder communication",
      "Implemented data quality checks and validation processes",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hands-on experience in software development, data science, and machine learning across various industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
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
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{experience.position}</h3>
                          <div className="flex items-center text-primary font-semibold mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            {experience.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground text-sm leading-relaxed flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
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
