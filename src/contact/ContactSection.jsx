import ContactContainer from "./ContactContainer";

export default function ContactSection(){
    return(
        <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Get In <span className="text-indigo-600">Touch</span></h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
            <ContactContainer />
        </div>
        </section>
    )
}