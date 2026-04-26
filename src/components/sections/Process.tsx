"use client";

import { motion } from "framer-motion";
import { BarChart, MonitorPlay, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";

const processes = [
  {
    step: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: BarChart,
  },
  {
    step: "2",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: MonitorPlay,
  },
  {
    step: "3",
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: Users,
  }
];

export function Process() {
  return (
    <SectionWrapper id="process" className="bg-slate-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </h2>
          <p className="text-slate-600">
            A Structured Three-Step Approach to <span className="font-semibold text-blue-600">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {processes.map((process, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group z-10 relative">
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 w-6 h-6 rounded-md bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">
                  {process.step}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                  <process.icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {process.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
