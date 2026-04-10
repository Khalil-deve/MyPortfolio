export default function ContactInfo() {
  return (
    <div className="lg:w-1/2">
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-10 rounded-3xl shadow-2xl h-full flex flex-col justify-between relative overflow-hidden group">
        {/* Decorative background element */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent)]/10 transition-colors duration-500"></div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
             <span className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                <i className="fas fa-address-book"></i>
             </span>
             Contact Information
          </h3>

          <div className="space-y-8">
            {[
              { label: 'Location', value: 'Mardan, KPK, Pakistan', icon: 'fa-map-marker-alt' },
              { label: 'Email', value: 'muhammadkhalil.web@gmail.com', icon: 'fa-envelope' },
              { label: 'Phone', value: '+92 3449478761', icon: 'fa-phone-alt' },
              { label: 'Working Hours', value: 'Mon-Sat: 9AM - 5PM', icon: 'fa-clock' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 group/item">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)] group-hover/item:border-[var(--accent)] group-hover/item:bg-[var(--accent)]/5 transition-all duration-300">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">{item.label}</h4>
                  <p className="text-[var(--text-main)] font-semibold break-words">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
          <h4 className="text-sm font-bold text-[var(--text-main)] mb-6 uppercase tracking-tight">Connect with social</h4>
          <div className="flex flex-wrap gap-4">
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
                className="w-12 h-12 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
