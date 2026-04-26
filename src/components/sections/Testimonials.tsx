"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    author: "Alex Morgan",
    role: "Director of Training",
    company: "ADP",
    color: "text-red-500",
    avatar: "/images/avatar_adp.png",
  },
  {
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    author: "Sarah Chen",
    role: "VP of Learning",
    company: "Bayer",
    color: "text-green-500",
    avatar: "/images/avatar_bayer.png",
  }
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-slate-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonials from <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="text-slate-600">
            What <span className="font-semibold text-blue-600">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 relative shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 w-16 h-16 -z-10 rotate-180" />
              
              <p className="text-slate-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
                  <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-sm text-slate-500">{t.role}, <span className={`font-bold ${t.color}`}>{t.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Dots Simulator */}
        <div className="flex justify-center mt-10 gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
