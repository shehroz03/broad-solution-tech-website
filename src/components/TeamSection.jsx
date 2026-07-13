import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const TEAM = [
  {
    name: "Alex Mercer",
    role: "Founder & CEO",
    bio: "Ex-Google engineer with a passion for building scalable startups.",
    image: "https://i.pravatar.cc/300?u=alex",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Elena Rodriguez",
    role: "Lead UI/UX Designer",
    bio: "Award-winning designer obsessed with pixel-perfect interfaces.",
    image: "https://i.pravatar.cc/300?u=elena",
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "James Chen",
    role: "Head of Engineering",
    bio: "System architecture expert specializing in high-load cloud infrastructure.",
    image: "https://i.pravatar.cc/300?u=james",
    socials: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Sophia Patel",
    role: "Product Manager",
    bio: "Bridging the gap between business requirements and technical execution.",
    image: "https://i.pravatar.cc/300?u=sophia",
    socials: { linkedin: "#" }
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-[80px] bg-white dark:bg-[#1A1C20] border-t border-border-subtle">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-[800] tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-text-secondary max-w-[600px] mx-auto text-[17px]">
              The brilliant minds behind Broad Solution Tech who make the magic happen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-[#101214] shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-white hover:text-brand-accent transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-white hover:text-brand-accent transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="text-white hover:text-brand-accent transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-brand-accent font-medium mb-3">{member.role}</p>
              <p className="text-text-secondary text-sm px-4">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
