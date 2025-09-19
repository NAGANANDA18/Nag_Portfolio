"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Users, Target } from "lucide-react"

const projects = [
  {
    title: "A Real-Time ETL Pipeline and Interactive Dashboard for Social Media Data Collection and Visualization",
    category: "Major Project",
    year: "2025",
    status: "Completed",
    description: "Comprehensive data pipeline extracting and processing social media data from multiple platforms",
    longDescription:
      "A sophisticated ETL pipeline that aggregates data from Twitter, Reddit, and YouTube APIs, processes it through MongoDB, and presents insights via an interactive Streamlit dashboard. The project demonstrates end-to-end data engineering capabilities with real-time processing and visualization.",
    technologies: [
      "Python",
      "MongoDB",
      "Streamlit",
      "Twitter API",
      "Reddit API",
      "YouTube API",
      "Pandas",
      "Apache Airflow",
    ],
    features: [
      "Real-time data extraction from multiple social media APIs",
      "Automated data cleaning and preprocessing pipelines",
      "Interactive dashboard with sentiment analysis",
      "Scalable MongoDB storage architecture",
      "Scheduled data updates using Apache Airflow",
      "Performance monitoring and error handling",
    ],
    challenges: [
      "Handling rate limits across different APIs",
      "Implementing efficient data deduplication",
      "Designing scalable storage schema",
      "Creating responsive real-time visualizations",
    ],
  },
  {
    title:
      "ENHANCING A TWITTER-BASED ETL PIPELINE WITH VALIDATION, AUTOMATION, AND VISUALIZATION FOR SCALABLE SOCIAL MEDIA ANALYTICS",
    category: "Data Engineering",
    year: "2025",
    status: "Completed",
    description: "Real-time Twitter data processing pipeline with advanced analytics and visualization",
    longDescription:
      "A focused ETL pipeline specifically designed for Twitter data analysis, featuring real-time tweet processing, sentiment analysis, trend detection, and comprehensive visualization dashboards. Built with scalability and performance in mind.",
    technologies: ["Python", "Twitter API v2", "Apache Kafka", "PostgreSQL", "Power BI", "Docker", "Redis"],
    features: [
      "Real-time tweet streaming and processing",
      "Advanced sentiment analysis using NLP",
      "Trend detection and hashtag analysis",
      "Geographic data visualization",
      "Automated report generation",
      "Containerized deployment with Docker",
    ],
    challenges: [
      "Managing high-volume real-time data streams",
      "Implementing efficient sentiment analysis at scale",
      "Creating responsive real-time dashboards",
      "Optimizing database performance for time-series data",
    ],
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    year: "2024",
    status: "Completed",
    description: "ML model predicting customer churn with 92% accuracy using ensemble methods",
    longDescription:
      "A comprehensive machine learning solution for predicting customer churn in subscription-based businesses. The project includes extensive data analysis, feature engineering, model comparison, and deployment of the best-performing ensemble model.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn", "Flask", "AWS"],
    features: [
      "Comprehensive exploratory data analysis",
      "Advanced feature engineering and selection",
      "Multiple ML algorithm comparison",
      "Ensemble model with 92% accuracy",
      "Interactive web interface for predictions",
      "Model interpretability with SHAP values",
    ],
    challenges: [
      "Handling imbalanced dataset",
      "Feature selection from high-dimensional data",
      "Model interpretability for business stakeholders",
      "Deployment and monitoring in production",
    ],
  },
  {
    title: "Secure Cloud File Encryption System",
    category: "Security & Cloud",
    year: "2022",
    status: "Completed",
    description: "End-to-end encrypted file storage system with advanced security features",
    longDescription:
      "A robust cloud-based file storage system implementing AES-256 encryption, secure key management, and user authentication. The system ensures data privacy and security while maintaining ease of use and scalability.",
    technologies: ["Python", "AWS S3", "Flask", "SQLAlchemy", "Cryptography", "JWT", "Docker", "Nginx"],
    features: [
      "AES-256 encryption for all stored files",
      "Secure key management system",
      "User authentication and authorization",
      "File versioning and backup",
      "Audit logging and monitoring",
      "RESTful API with comprehensive documentation",
    ],
    challenges: [
      "Implementing secure key derivation and storage",
      "Balancing security with performance",
      "Designing scalable encryption architecture",
      "Ensuring compliance with data protection regulations",
    ],
  },
  {
    title: "Responsive E-Commerce Website",
    category: "Web Development",
    year: "2023",
    status: "Completed",
    description: "Full-stack e-commerce platform with modern UI/UX and payment integration",
    longDescription:
      "A complete e-commerce solution featuring product catalog, shopping cart, user authentication, payment processing, and admin dashboard. Built with modern web technologies and responsive design principles.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Material-UI", "Redux"],
    features: [
      "Responsive design for all devices",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Secure payment processing with Stripe",
      "User account management",
      "Admin dashboard for inventory management",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing performance for large product catalogs",
      "Creating intuitive user experience",
      "Managing complex state across the application",
    ],
  },
  {
    title: "Internet of Things (IoT) - Communication and Control Using XBee Protocol",
    category: "IoT & Embedded Systems",
    year: "2022",
    status: "Completed",
    description: "Wireless communication system for sensors and control devices using XBee Protocol",
    longDescription:
      "A comprehensive IoT solution implementing wireless communication between sensors and control devices using the XBee Protocol. The project features optimized module configurations for seamless remote control and a real-time monitoring system built with VB.NET for improved automation capabilities.",
    technologies: ["XBee Protocol", "VB.NET", "Wireless Communication", "Sensor Integration", "Real-time Systems"],
    features: [
      "Wireless communication between sensors and control devices",
      "Optimized XBee module configurations for reliability",
      "Real-time monitoring and control system",
      "Seamless remote control capabilities",
      "Automated data collection and processing",
      "User-friendly interface for system management",
    ],
    challenges: [
      "Optimizing wireless communication range and reliability",
      "Configuring XBee modules for different sensor types",
      "Implementing real-time data processing",
      "Ensuring stable wireless connections in various environments",
    ],
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in data engineering, machine learning, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/90 text-white">
                      {project.category}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={
                        project.status === "In Progress"
                          ? "bg-yellow-500/90 text-white"
                          : project.status === "Ongoing"
                            ? "bg-blue-500/90 text-white"
                            : "bg-green-500/90 text-white"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedProject(project)}
                          className="text-primary border-primary hover:bg-primary hover:text-white w-full"
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold gradient-text">
                            {selectedProject?.title}
                          </DialogTitle>
                        </DialogHeader>
                        {selectedProject && (
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="flex items-center space-x-2">
                                <Target className="h-5 w-5 text-primary" />
                                <div>
                                  <p className="text-sm font-semibold">Category</p>
                                  <p className="text-sm text-muted-foreground">{selectedProject.category}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                <div>
                                  <p className="text-sm font-semibold">Year</p>
                                  <p className="text-sm text-muted-foreground">{selectedProject.year}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="h-5 w-5 text-primary" />
                                <div>
                                  <p className="text-sm font-semibold">Status</p>
                                  <p className="text-sm text-muted-foreground">{selectedProject.status}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                              <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                              <ul className="space-y-1">
                                {selectedProject.features.map((feature, index) => (
                                  <li key={index} className="text-muted-foreground text-sm flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-2">Technical Challenges</h4>
                              <ul className="space-y-1">
                                {selectedProject.challenges.map((challenge, index) => (
                                  <li key={index} className="text-muted-foreground text-sm flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                    {challenge}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
