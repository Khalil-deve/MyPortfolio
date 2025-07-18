import { useState } from "react";

export default function Navbar() {
    const [icon, setIcon] = useState(false);
    return (
        // Navigation Bar
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-indigo-600">MK.</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="nav-link text-gray-700 hover:text-indigo-600">Home</a>
                        <a href="#about" className="nav-link text-gray-700 hover:text-indigo-600">About</a>
                        <a href="#skills" className="nav-link text-gray-700 hover:text-indigo-600">Skills</a>
                        <a href="#projects" className="nav-link text-gray-700 hover:text-indigo-600">Projects</a>
                        <a href="#contact" className="nav-link text-gray-700 hover:text-indigo-600">Contact</a>
                    </div>
                    <button className="md:hidden focus:outline-none" id="menu-btn" onPointerDown={()=>{
                        const mobileMenu = document.getElementById('mobile-menu');
                        mobileMenu.classList.toggle('hidden');
                        setIcon(!icon);   
                    }}>
                        <i className={`fas fa-${icon ? 'times' : 'bars'} text-2xl text-gray-700`} id="icon"></i>
                    </button>
                </div>
                 {/* Mobile Menu  */}
                <div className="md:hidden hidden mt-4" id="mobile-menu">
                    <a href="#home" className="block py-2 text-gray-700 hover:text-indigo-600">Home</a>
                    <a href="#about" className="block py-2 text-gray-700 hover:text-indigo-600">About</a>
                    <a href="#skills" className="block py-2 text-gray-700 hover:text-indigo-600">Skills</a>
                    <a href="#projects" className="block py-2 text-gray-700 hover:text-indigo-600">Projects</a>
                    <a href="#contact" className="block py-2 text-gray-700 hover:text-indigo-600">Contact</a>
                </div>
            </div>
        </nav>
    )
}