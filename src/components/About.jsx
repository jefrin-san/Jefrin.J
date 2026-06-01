import React from 'react';
import { motion } from 'framer-motion';
import jeff from '../assets/jeff.png';

const skillGroups = [
  {
    title: 'CORE',
    skills: ['Python', 'FastAPI', 'SQL', 'React', 'JavaScript'],
  },
  {
    title: 'AI / ML',
    skills: ['Machine Learning', 'Deep Learning', 'Text Processing'],
  },
  {
    title: 'TOOLS',
    skills: ['GitHub', 'Postman', 'Supabase', 'Render', 'Vercel'],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#070707] px-6 py-24 border-t border-white/[0.04]">
      <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-start mt-10">
        
        {/* Avatar / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full max-w-[420px] mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 scale-[1.03] rounded-[32px] bg-white/5 blur-[30px]" />
          <img
            src={jeff}
            alt="Developer portrait"
            className="relative w-full aspect-[4/5] rounded-[24px] border border-white/10 object-cover bg-[#0a0a0a] grayscale hover:grayscale-0 transition duration-700"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <p className="mb-6 text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">
            ABOUT ME
          </p>
          <h2 className="mb-8 text-[36px] md:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-white max-w-lg">
            Building <span className="text-white/70">useful software</span> with code, AI, and clean problem-solving.
          </h2>

          <div className="space-y-6 text-[15px] md:text-[16px] leading-[1.7] text-white/50 mb-14 max-w-[480px]">
            <p>
              I am a B.Tech Information Technology graduate focused on software development, backend systems, and AI/ML applications. I enjoy building practical projects that solve real problems, from email security and phishing detection to smart agriculture and skill-gap analysis.
            </p>
            <p>
              I work mainly with Python, FastAPI, SQL, React, and machine learning tools. I am currently looking for Software Developer, Python Developer, Backend Developer, and AI/ML Intern opportunities.
            </p>
          </div>

          <div className="space-y-7">
            {skillGroups.map((group, groupIndex) => (
              <div key={group.title}>
                <h3 className="mb-3 text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + (groupIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      key={skill}
                      className="rounded-full border border-white/[0.06] bg-[#111111] px-4 py-2 text-[12px] font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
