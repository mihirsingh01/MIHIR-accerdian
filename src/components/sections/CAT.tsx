"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Settings } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: Lightbulb,
    color: "text-blue-500",
    borderColor: "border-blue-500",
  },
  {
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: Code,
    color: "text-indigo-500",
    borderColor: "border-indigo-500",
  },
  {
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: Settings,
    color: "text-purple-500",
    borderColor: "border-purple-500",
  }
];

export function CAT() {
  return (
    <SectionWrapper id="cat" className="bg-white overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>
          <p className="text-slate-600">
            Our Proven Approach to <span className="font-semibold text-blue-600">Learning Excellence</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Curved Line (visible on md+) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connecting arrow for mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-12 bg-slate-200 my-4" />
                )}
                
                <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full border-2 ${step.borderColor} border-dashed flex items-center justify-center p-2 mb-6 group-hover:rotate-12 transition-transform duration-500 bg-white`}>
                  <div className={`w-full h-full rounded-full border border-slate-100 flex flex-col items-center justify-center p-6 shadow-sm group-hover:shadow-lg transition-shadow bg-white`}>
                    <step.icon className={`w-10 h-10 mb-3 ${step.color}`} />
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                  </div>
                </div>
                
                <div className="max-w-[250px]">
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
