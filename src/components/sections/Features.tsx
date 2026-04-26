"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cog, GraduationCap, Laptop } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

const features = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-100"
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: Cog,
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: GraduationCap,
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: Laptop,
    color: "text-green-500",
    bg: "bg-green-100"
  }
];

export function Features() {
  return (
    <SectionWrapper id="edge" className="bg-slate-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="text-slate-600">
            Key Aspects of Our Strategic Training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-transparent hover:border-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg} ${feature.color}`}>
                    <feature.icon size={24} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
