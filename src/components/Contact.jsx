import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#070707] px-6 py-32 border-t border-white/[0.04]">
      <div className="max-w-[1060px] mx-auto flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.03em] text-white max-w-3xl"
        >
          Looking for a Software Developer? Let’s connect.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14 text-[16px] leading-[1.7] text-white/50 max-w-xl"
        >
          I am currently open to Software Developer, Python Developer, Backend Developer, and AI/ML Intern opportunities. If you would like to discuss a role or project, feel free to reach out.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jefrinnaveen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-14 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-black transition-transform hover:scale-[1.02]"
        >
          <Mail size={18} strokeWidth={2} />
          Get in touch
        </motion.a>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-5"
        >
          <a
            href="https://github.com/jefrin-j"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-[46px] w-[46px] place-items-center rounded-full border border-white/[0.06] bg-transparent text-white/40 transition-colors hover:border-white/20 hover:text-white"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/jefrin-j-2708a4295?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-[46px] w-[46px] place-items-center rounded-full border border-white/[0.06] bg-transparent text-white/40 transition-colors hover:border-white/20 hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jefrinnaveen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-[46px] w-[46px] place-items-center rounded-full border border-white/[0.06] bg-transparent text-white/40 transition-colors hover:border-white/20 hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
