import portfolio from './assets/portfolio.jpg';
export default function HeroSection(){
    return (
        <section id="home" className="hero-bg text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-indigo-200">Muhammad Khalil</span></h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Full Stack Web Developer</h2>
                <p className="text-lg mb-8 max-w-lg">I build responsive and interactive websites using modern web technologies. Currently pursuing my Bachelor's in Computer Software Engineering at UET Mardan.</p>
                <div className="flex space-x-4">
                    <a href="#projects" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition duration-300">View My Work</a>
                    <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition duration-300">Contact Me</a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-indigo-400 rounded-full overflow-hidden border-4 border-white shadow-xl floating">
                    <img src={portfolio} alt="Profile" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    </section>
    )
}