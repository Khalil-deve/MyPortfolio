import portfolio from "./assets/portfolio.jpg";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-3/5 mb-12 md:mb-0 text-center md:text-left">
          <div className="inline-block px-4 py-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-bold mb-6 animate-fade-in">
            Available for New Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text text-transparent">
              Muhammad Khalil
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-[var(--text-muted)]">
            Crafting Digital Experiences Through <span className="text-[var(--text-main)] font-bold">Innovation & Code</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 text-[var(--text-muted)] max-w-2xl leading-relaxed">
            I am a Full Stack Web Developer dedicated to building responsive, interactive,
            and high-performance websites. Currently engineering the future at UET Mardan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-[var(--accent)] text-white rounded-xl font-bold shadow-lg shadow-indigo-500/25 hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Explore My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-[var(--border-color)] text-[var(--text-main)] rounded-xl font-bold hover:bg-[var(--border-color)] hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center items-center md:pl-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-[var(--bg-card)] rounded-[2rem] overflow-hidden border-2 border-[var(--border-color)] shadow-2xl floating">
              <img
                src={portfolio}
                alt="Profile"
                className="w-auto h-80% object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--bg-card)] p-4 rounded-2xl shadow-xl border border-[var(--border-color)] animate-bounce-slow">
              <div className="text-3xl font-bold text-[var(--accent)]">2+</div>
              <div className="text-xs text-[var(--text-muted)] font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
