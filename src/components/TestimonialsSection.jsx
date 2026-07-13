import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    text: "Broad Solution Tech completely transformed our platform. Their engineering quality and speed of delivery are unmatched. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthX",
    text: "Working with them was a breeze. They understood our complex requirements and built a scalable solution that exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Aisha Rahman",
    role: "Product Manager",
    text: "The UI/UX design is stunning, and the performance is flawless. They truly care about the end-user experience.",
    avatar: "https://i.pravatar.cc/150?u=aisha"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-[80px] bg-white border-t border-border-subtle">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-[800] tracking-tight mb-4">
              Client Reviews
            </h2>
            <p className="text-text-secondary max-w-[600px] mx-auto text-[17px]">
              Don't just take our word for it. Here is what our clients have to say about our work.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-bg-canvas border border-border-subtle hover:border-brand-accent transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6 text-brand-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-text-primary mb-8 font-medium italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-text-primary">{t.name}</h4>
                  <p className="text-sm text-text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
