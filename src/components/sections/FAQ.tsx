"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const faqCategories = ["About the Course", "About the Delivery", "Miscellaneous"];

const faqs = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian offers a wide range of corporate training programs tailored to different domains including Data Science, Product Management, AI, and Business Analytics. We customize the curriculum based on your organization's specific needs.",
    },
    {
      q: "What domain specializations are available?",
      a: "Our specializations span across multiple sectors including IT, Healthcare, Finance, Manufacturing, and Retail. Each program is designed with industry-specific case studies and tools.",
    },
    {
      q: "Can the curriculum be customized for our team?",
      a: "Yes, our programs are highly customizable. We start with a skill gap analysis and build a tailored roadmap to address your organizational goals effectively.",
    }
  ],
  "About the Delivery": [
    {
      q: "Do you offer online or offline training?",
      a: "We offer flexible delivery options including 100% online, hybrid, and in-person corporate training based on your requirements and location.",
    },
    {
      q: "Who are the instructors?",
      a: "Our instructors are industry experts and seasoned professionals from top tier companies who bring real-world experience and practical insights to the classroom.",
    }
  ],
  "Miscellaneous": [
    {
      q: "What is the typical batch size?",
      a: "We recommend a batch size of 20-30 participants to ensure highly interactive and personalized learning experiences.",
    },
    {
      q: "Do participants get a certificate?",
      a: "Yes, all successful participants receive a verifiable certificate of completion from Accredian.",
    }
  ]
};

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" className="bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Categories Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(0);
                }}
                className={`text-left px-6 py-4 rounded-xl font-medium transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:border-blue-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <span className={`font-semibold ${openIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center lg:text-left">
              <Button variant="primary" size="lg" onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}>Enquire Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
