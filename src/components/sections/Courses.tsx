"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    bg: "from-blue-500/80 to-blue-900/90",
    image: "/images/course_program.png",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    bg: "from-indigo-500/80 to-indigo-900/90",
    image: "/images/course_industry.png",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    bg: "from-purple-500/80 to-purple-900/90",
    image: "/images/course_topic.png",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    bg: "from-emerald-500/80 to-emerald-900/90",
    image: "/images/course_level.png",
  }
];

export function Courses() {
  return (
    <SectionWrapper className="bg-slate-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>
          <p className="text-slate-600">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer border-transparent shadow-md hover:shadow-xl transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${course.bg} p-6 flex flex-col justify-end relative overflow-hidden`}>
                  <Image 
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover mix-blend-overlay opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:-translate-y-1 transition-transform">{course.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-6 relative bg-white">
                  <p className="text-sm text-slate-600 mb-4">{course.description}</p>
                  <div className="text-blue-600 font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                    Explore Programs <ArrowRight size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
