"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";

// Simulated client logos since we don't have images
const clients = [
  "Reliance", "HCL", "IBM", "CRIF", "ADP", "Bayer"
];

export function Clients() {
  return (
    <SectionWrapper id="clients" className="bg-white py-10 md:py-16 border-b border-slate-100">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by industry leaders</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-black text-slate-400 hover:text-blue-600 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
