"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <SectionWrapper className="py-12 md:py-20 bg-white">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
        >
          {/* Abstract background shapes */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-50" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Headphones size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-100 text-lg">
                Get Expert Guidance For Your Team's Success!
              </p>
            </div>
          </div>
          
          <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
            <Button variant="default" size="lg" className="w-full md:w-auto bg-white text-blue-600 hover:bg-slate-50 border-none shadow-lg px-8 py-6 text-lg font-bold group" onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
