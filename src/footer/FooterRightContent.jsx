import React from 'react';
export default function FooterRightContent() {
  return (
    <div className="flex flex-col items-center md:items-end">
      <div className="flex space-x-6 mb-8 mt-2">
        {[
          { icon: 'fab fa-github', href: 'https://github.com/Khalil-deve' },
          { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/khalil-dev' },
          { icon: 'fab fa-twitter', href: 'https://x.com/Muhammadkh45596?t=jXc_m4dYsp0H1tUPC1ZvWg&s=09' },
          { icon: 'fab fa-instagram', href: '#' }
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 text-xl"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
      <p className="text-[var(--text-muted)] text-sm font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} Khalil.dev • All rights reserved.
      </p>
    </div>
  );
}
