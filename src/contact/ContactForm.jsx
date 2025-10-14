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
        <form ref={formRef} className="space-y-6 bg-gray-600 p-8 rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>

            <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
        </form>
    );
};

