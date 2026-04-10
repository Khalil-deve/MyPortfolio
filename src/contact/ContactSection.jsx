import React from 'react';
import ContactContainer from "./ContactContainer";

export default function ContactSection(){
    return(
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Contact Me
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get In <span className="text-[var(--accent)]">Touch</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out and let's build something amazing together!
          </p>
        </div>
        <ContactContainer />
      </div>
    </section>
    )
}