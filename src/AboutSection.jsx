import React from 'react';
import portfolio from "./assets/portfolio.jpg";
export default function AboutMeSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[var(--border-color)] shadow-2xl">
              <img
                src={portfolio}
                alt="About"
                className="w-auto h-100% object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
            </div>
            {/* Decorative dots or elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="md:w-3/5">
            <div className="inline-block px-4 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              My Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              About <span className="text-[var(--accent)]">Me</span>
            </h2>
            
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-main)] italic">"Turning vision into reality with code."</h3>
            <p className="text-lg text-[var(--text-muted)] mb-6 leading-relaxed">
              I'm a passionate <span className="text-[var(--text-main)] font-semibold">Full Stack Developer</span> with over 2 years of
              experience crafting high-performance web applications. I specialize in the 
              <span className="text-[var(--accent)] font-semibold uppercase ml-1">Mern</span> stack, 
              delivering scalable and user-centric solutions.
            </p>
            <p className="text-lg text-[var(--text-muted)] mb-10 leading-relaxed">
              My mission is to merge technical excellence with meaningful design. 
              Whether it's a complex backend architecture or a pixel-perfect frontend, 
              I strive for perfection in every line of code.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: 'Problem Solving', icon: 'fa-lightbulb' },
                { label: 'Responsive Design', icon: 'fa-mobile-screen' },
                { label: 'Cloud Architecture', icon: 'fa-cloud' },
                { label: 'Clean Code', icon: 'fa-code' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--accent)] transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent)]/10 rounded-lg text-[var(--accent)]">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="font-bold text-sm text-[var(--text-main)]">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="https://drive.google.com/file/d/14FUoFA2_R4gPK-AC96er8xtp5wTaCj6g/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-2 sm:px-8 py-3 sm:py-4 bg-[var(--text-main)] text-[var(--bg-main)] rounded-xl font-bold hover:bg-[var(--accent)] hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-[10px] sm:text-base whitespace-nowrap"
              >
                <i className="fas fa-file-download text-xs sm:text-base"></i> Download CV
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-none px-2 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] rounded-xl font-bold hover:bg-[var(--accent)] hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-[10px] sm:text-base text-center whitespace-nowrap"
              >
                Hire Me Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
