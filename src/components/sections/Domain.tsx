"use client";

import { motion } from "framer-motion";
import { Cpu, Database, BarChart3, Cloud, Briefcase, Globe } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";

const domains = [
  { name: "Product & Innovation Hub", icon: Cpu },
  { name: "Gen-AI Mastery", icon: Cloud },
  { name: "Leadership Elevation", icon: Briefcase },
  { name: "Tech & Data Insights", icon: Database },
  { name: "Operations Excellence", icon: BarChart3 },
  { name: "Digital Enterprise", icon: Globe },
];

export function Domain() {
  return (
    <SectionWrapper className="bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="text-slate-600">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-lg transition-all bg-white"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-blue-500 group-hover:text-white transition-colors mb-4 text-blue-600">
                <domain.icon size={24} />
              </div>
              <h3 className="font-semibold text-slate-900">{domain.name}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
