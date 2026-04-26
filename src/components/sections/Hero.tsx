"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
              <br /> For Your Enterprise
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Cultivate high-performance teams through expert learning. Tailored solutions, industry insights, and expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-8" onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}>
                Enquire Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                Explore Programs
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Industry Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Expert Guidance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-full bg-blue-50 rounded-3xl overflow-hidden shadow-2xl glass-card">
               <Image 
                 src="/images/hero.png" 
                 alt="Corporate Professional Team" 
                 fill 
                 className="object-cover"
                 priority
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent mix-blend-multiply" />
               
               {/* Floating cards for "Next-Gen SaaS" feel */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-10 -left-6 glass px-6 py-4 rounded-xl shadow-lg flex items-center gap-4 bg-white/90 backdrop-blur-md"
               >
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                   <span className="text-green-600 font-bold">↑</span>
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-medium">Performance</p>
                   <p className="font-bold text-slate-900">+124%</p>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="absolute bottom-10 -right-6 glass px-6 py-4 rounded-xl shadow-lg bg-white/90 backdrop-blur-md"
               >
                 <p className="text-xs text-slate-500 font-medium mb-1">Top rated</p>
                 <div className="flex gap-1 text-yellow-400">
                   {Array.from({length: 5}).map((_, i) => <span key={i}>★</span>)}
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
