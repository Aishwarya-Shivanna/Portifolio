"use client";

import { motion } from "framer-motion";
import { Award, Brain, Building2, Cloud, Code, GraduationCap, Sparkles } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences, previousExperiences } from "@/data/experience";
import { hobbies } from "@/data/hobbies";
import { skillCategories } from "@/data/skills";

export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        {/* Profile Section - First thing recruiters see */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/image.png"
                alt="Aishwarya Shivanna"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Aishwarya Shivanna</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Business Analytics Master's Student
              </p>
             
            </div>
          </div>
        </motion.div>

        {/* Professional Summary - Quick overview of value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Business Analytics graduate based in the United States, specializing in data analysis, business intelligence, and applied statistical modeling. With a strong academic and project-driven foundation, I bring hands-on experience transforming raw, real-world data into actionable insights across healthcare, education, retail, and marketing domains. My work emphasizes clarity, accuracy, and decision-oriented analytics using Python, R, SQL, Excel, Power BI, and Tableau.

              </p>
              <p>
                My recent projects include developing end-to-end BI dashboards using Power Query and Power BI to analyze sales performance, conducting customer segmentation and targeting analysis for Chipotle using clustering, discriminant analysis, ANOVA, and regression, and building predictive classification models in Python to identify key drivers of customer behavior. I have also executed large-scale web scraping pipelines for competitive intelligence and performed healthcare analytics to uncover factors influencing hospital readmission rates.
              </p>
              <p>
               I am experienced in exploratory data analysis, hypothesis testing, forecasting, regression modeling, and data visualization, with a strong ability to translate statistical findings into clear business recommendations. Through my academic and applied work, I consistently focus on building reliable, scalable, and interpretable analytical solutions that support strategic decision-making.
With a Master&apos;s degree in Business Analytics from Northern Arizona University and a strong quantitative foundation, I am driven by curiosity, problem-solving, and continuous learning. I am passionate about leveraging data to improve business performance, optimize operations, and support evidence-based decisions across industries.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className={`${category.color}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Work Experience - Most important for recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={`${exp.title}-${exp.startDate}`}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                      {exp.isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement) => (
                    <li key={`${exp.title}-${achievement.text}`} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={`${exp.title}-${skill.name}`}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </motion.div>
  
        {/* Education - Supporting qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{education.degree}</h3>
                    <p className="text-muted-foreground">{education.school}</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">
                      {education.startDate} - {education.endDate}
                    </p>
                    <p className="text-sm font-medium text-primary">GPA: {education.gpa}</p>
                  </div>
                </div>
                <div className="mt-3">
                  {education.honors.map((honor, index) => (
                    <Badge
                      key={honor.name}
                      variant="outline"
                      className={`bg-primary/5 mb-2 ${index > 0 ? "ml-2" : ""}`}
                    >
                      {honor.name}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                 
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Hobbies & Interests - Personal side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <title>Creative pursuits icon</title>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <div key={hobby.name} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">{hobby.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
