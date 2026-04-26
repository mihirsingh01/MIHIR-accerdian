"use client";

import { motion } from "framer-motion";
import { Monitor, XCircle, GraduationCap, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";

const targetAudience = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, work more leads, drive innovation.",
    icon: Monitor,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: XCircle,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: Users,
  }
];

export function StrategicSkill() {
  return (
    <SectionWrapper className="py-0 relative overflow-hidden">
      <Container>
        <div className="bg-blue-600 rounded-3xl overflow-hidden relative shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10">
            <div className="p-10 md:p-12 lg:p-16 flex flex-col justify-center text-white">
              <span className="text-blue-200 font-medium tracking-wider uppercase text-sm mb-2">Who Should Join?</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Strategic Skill Enhancement
              </h2>
            </div>
            
            <div className="lg:col-span-2 p-8 md:p-12 lg:p-16 bg-blue-700/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {targetAudience.map((audience, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/30 flex items-center justify-center text-white border border-blue-400/30">
                      <audience.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{audience.title}</h3>
                      <p className="text-blue-100/80 text-sm leading-relaxed">{audience.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
