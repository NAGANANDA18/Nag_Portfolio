"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [{ name: "Python" }, { name: "Java" }, { name: "SQL" }, { name: "C" }, { name: "C#" }],
  },
  {
    title: "Data Engineering",
    skills: [{ name: "ETL Pipelines" }, { name: "Apache Airflow" }, { name: "Apache Spark" }, { name: "Hadoop" }],
  },
  {
    title: "Machine Learning",
    skills: [{ name: "Scikit-learn" }, { name: "TensorFlow" }, { name: "Data Analysis" }, { name: "Model Deployment" }],
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Streamlit" },
      { name: "Matplotlib" },
      { name: "Advanced Excel" },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "MongoDB" }, { name: "MySQL" }, { name: "PostgreSQL" }, { name: "Redis" }],
  },
  {
    title: "Tools & Technologies",
    skills: [{ name: "Git" }, { name: "Jenkins" }, { name: "Linux" }, { name: "VS Code" }],
  },
]

const cloudPlatforms = ["AWS", "Google Cloud", "IBM Cloud"]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning data engineering, machine learning, and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Cloud Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  {platform}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
