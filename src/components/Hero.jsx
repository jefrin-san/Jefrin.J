import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.open('/Jefrin_J_Final.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#070707] flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_72%,rgba(124,58,237,0.08),transparent_34%),radial-gradient(circle_at_20%_12%,rgba(30,41,59,0.18),transparent_28%)]" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 mb-14">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-base font-semibold text-white/80">Open to opportunities</span>
          </div>

          <h1 className="max-w-[1000px] text-6xl md:text-8xl font-bold leading-[0.98] tracking-normal text-white mb-10">
            Software Developer building modern, AI-powered applications
          </h1>

          <p className="max-w-3xl text-2xl leading-relaxed text-white/55 mb-14">
            I build clean and practical software solutions using Python, FastAPI, SQL, React, and Machine Learning, with a focus on real-world problem solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
            >
              View Work
              <ArrowRight size={22} />
            </button>

            <button
              onClick={downloadResume}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/5"
            >
              Resume
              <FileText size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
