import React from 'react';
import { FileText } from 'lucide-react';

export default function Footer() {
  const viewResume = () => {
    window.open('/Jefrin_J_Final.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <footer className="bg-[#070707] px-6 pb-12">
        <div className="max-w-[1060px] mx-auto border-t border-white/[0.04] pt-12 text-center text-[13px] text-white/30">
          <p>© 2026 Jefrin J. All rights reserved.</p>
        </div>
      </footer>

      <button
        onClick={viewResume}
        className="fixed bottom-8 right-8 z-50 grid h-[46px] w-[46px] place-items-center rounded-full bg-white text-[#d62828] shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-transform hover:scale-110 active:scale-95"
        aria-label="View resume"
      >
        <FileText size={22} strokeWidth={1.5} />
      </button>
    </>
  );
}
