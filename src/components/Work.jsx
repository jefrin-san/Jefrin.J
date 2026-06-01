import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import inboxIqProject from '../assets/inbox-iq-ai.png';
import smartAgriProject from '../assets/smart-agriculture.png';
import resumeSkillProject from '../assets/resume-skill-matcher.png';

const projects = [
  {
    title: 'InboxIQ AI',
    subtitle: 'AI Email Security & Phishing Detection Platform',
    description: 'AI-powered email security platform that analyzes email content, suspicious links, sender metadata, and spoofing indicators to classify emails as safe, spam, or phishing with a risk score.',
    details: 'AI-powered email security platform that analyzes email content, suspicious links, sender metadata, and spoofing indicators to classify emails as safe, spam, or phishing with a risk score.\n\nBuilt with a focus on robust security, real-time threat detection, and an intuitive user interface to help users quickly identify and mitigate phishing attempts.',
    image: inboxIqProject,
    tags: ['Python', 'FastAPI', 'Gmail API', 'React', 'Supabase', 'RAG Concepts'],
    link: 'https://inbox-iq-ai.vercel.app/',
    sourceLink: 'https://github.com/Jai7525/InboxIQ-AI',
    comingSoon: false,
  },
  {
    title: 'Smart Agriculture',
    subtitle: 'ML + Real-Time Weather API',
    description: 'Smart agriculture system that combines machine learning and real-time weather data such as temperature, humidity, and rainfall to support crop recommendation and farming decisions.',
    details: 'Smart agriculture system that combines machine learning and real-time weather data such as temperature, humidity, and rainfall to support crop recommendation and farming decisions.\n\nThe system utilizes advanced machine learning models trained on agricultural datasets to provide accurate, data-driven crop suggestions based on real-time environmental factors, helping farmers optimize their yield and resource usage.',
    image: smartAgriProject,
    tags: ['Python', 'Machine Learning', 'Weather API', 'Cloud Deployment'],
    link: '#',
    comingSoon: true,
  },
  {
    title: 'Resume Skill Matcher',
    subtitle: 'Python Backend Skill Gap Analyzer',
    description: 'Python-based application that compares candidate skills with job role requirements and identifies matched skills, missing skills, and role-based learning suggestions for freshers.',
    details: 'Python-based application that compares candidate skills with job role requirements and identifies matched skills, missing skills, and role-based learning suggestions for freshers.\n\nBuilt using FastAPI and advanced text processing techniques to parse and analyze resumes against job descriptions, outputting a comprehensive skill gap analysis via a robust REST API.',
    image: resumeSkillProject,
    tags: ['Python', 'FastAPI', 'SQL', 'Text Processing', 'REST API'],
    link: '#',
    comingSoon: true,
  },
];

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="text-[15px] font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="rounded-full bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          <div className="w-full md:w-[55%] h-64 md:h-auto overflow-y-auto bg-[#111] p-6 flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto p-8 md:p-10">
            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] font-medium text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-6 text-[22px] font-bold tracking-tight text-white">About the project</h3>
            <p className="mb-8 text-[15px] leading-[1.8] text-white/60 whitespace-pre-line">
              {project.details || project.description}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-bold text-black transition-colors hover:bg-white/90"
                >
                  Visit Live Site <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              )}
              {project.sourceLink && project.sourceLink !== '#' && (
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#222] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#333]"
                >
                  View Source
                </a>
              )}
              {project.sourceLink === '#' && (
                <span className="flex items-center justify-center gap-2 rounded-full bg-[#222] px-6 py-3 text-[14px] font-bold text-white/40 cursor-not-allowed select-none">
                  View Source
                </span>
              )}
              {project.comingSoon && (
                <span className="flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 text-[14px] font-semibold text-yellow-400">
                  🚧 Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="bg-[#070707] px-6 py-28 border-t border-white/[0.04]">
      <div className="max-w-[1060px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-[32px] md:text-[36px] font-bold tracking-[-0.02em] text-white"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            return (
              <motion.article
                onClick={() => setSelectedProject(project)}
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative mb-6 aspect-[16/11] overflow-hidden rounded-[16px] bg-[#111111] border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-40"
                  />
                  {project.comingSoon && (
                    <span className="absolute right-4 top-4 z-10 rounded-full border border-yellow-500/50 bg-black/40 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-500">
                      Coming Soon
                    </span>
                  )}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 text-[14px] font-semibold text-white shadow-xl">
                      View Project <ArrowUpRight size={18} strokeWidth={2} />
                    </span>
                  </div>
                </div>

                <h3 className="mb-2 text-[18px] font-bold tracking-tight text-white">{project.title}</h3>
                {project.subtitle && <p className="mb-3 text-[14px] font-medium text-white/80">{project.subtitle}</p>}
                <p className="mb-6 text-[14px] leading-[1.6] text-white/50">{project.description}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] font-medium text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
