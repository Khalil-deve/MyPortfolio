import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function ContactForm() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = 'Valid email is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log(formData);
        const serviceID = 'service_9375xcf';
        const templateID = 'template_97g6xpu';

        emailjs.sendForm(serviceID, templateID, formRef.current, 'pv01a-y5sSX3cqDvx')
        .then(() => {
            Swal.fire(
              'Success!',
              'Your message has been sent.',
              'success'
            );
          })
          .catch((error) => {
            Swal.fire(
              'Oops!',
              'Something went wrong. Please try again later.',
              'error'
            );
          });


        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        setErrors({});
    };

    return (
        <form ref={formRef} className="space-y-6 bg-[var(--bg-card)] border border-[var(--border-color)] p-10 rounded-3xl shadow-2xl relative overflow-hidden group" onSubmit={handleSubmit}>
            {/* Subtle glow effect on the form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] ml-1">Full Name</label>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="from_name"
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-input w-full px-5 py-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl focus:ring-4 focus:ring-[var(--accent)]/10 transition-all duration-300 placeholder:text-[var(--text-muted)]/50 font-medium"
                            placeholder="John Doe"
                        />
                        <i className="fas fa-user absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]/30"></i>
                    </div>
                    {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] ml-1">Email Address</label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            value={formData.email}
                            onChange={handleChange}
                            className="contact-input w-full px-5 py-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl focus:ring-4 focus:ring-[var(--accent)]/10 transition-all duration-300 placeholder:text-[var(--text-muted)]/50 font-medium"
                            placeholder="john@example.com"
                        />
                         <i className="fas fa-envelope absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]/30"></i>
                    </div>
                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.email}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] ml-1">Subject</label>
                <div className="relative">
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-input w-full px-5 py-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl focus:ring-4 focus:ring-[var(--accent)]/10 transition-all duration-300 placeholder:text-[var(--text-muted)]/50 font-medium"
                        placeholder="Project Inquiry"
                    />
                    <i className="fas fa-tag absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]/30"></i>
                </div>
                {errors.subject && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] ml-1">How can I help?</label>
                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-input w-full px-5 py-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl focus:ring-4 focus:ring-[var(--accent)]/10 transition-all duration-300 placeholder:text-[var(--text-muted)]/50 font-medium resize-none"
                        placeholder="Share your vision with me..."
                    />
                    <i className="fas fa-comment shadow-sm absolute right-5 top-6 text-[var(--text-muted)]/30"></i>
                </div>
                {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1">{errors.message}</p>}
            </div>

            <button
                type="submit"
                className="w-full relative overflow-hidden group/btn bg-[var(--accent)] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-600 transition-all duration-500 shadow-xl shadow-indigo-500/20 active:scale-[0.98]"
            >
                <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message <i className="fas fa-paper-plane group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            </button>
        </form>
    );
};

