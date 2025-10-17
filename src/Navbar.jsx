import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaHome } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import portfolioImg from './assets/portfolio.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const menuButtonRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current && 
                !mobileMenuRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        // Close menu when clicking on nav links
        const handleNavLinkClick = () => {
            setIsMenuOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        // Add click event listeners to mobile menu links
        const mobileLinks = mobileMenuRef.current?.querySelectorAll('a');
        mobileLinks?.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            mobileLinks?.forEach(link => {
                link.removeEventListener('click', handleNavLinkClick);
            });
        };
    }, []);

    // Close menu when pressing Escape key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navigation items with icons
    const navItems = [
        { name: 'Home', href: '#home', icon: FaHome },
        { name: 'About', href: '#about', icon: FaUser },
        { name: 'Skills', href: '#skills', icon: FaCode },
        { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
        { name: 'Contact', href: '#contact', icon: FaEnvelope }
    ];

    return (
        // Navigation Bar
        <nav className="fixed w-full bg-white/8 backdrop-blur shadow-lg border-b border-gray-100 z-50">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img 
                            src={portfolioImg} 
                            alt="portfolio" 
                            className="h-12 w-12 rounded-full border-2 border-indigo-500 shadow-sm" 
                        />
                        <div className="hidden md:block">
                            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                M.Khalil
                            </div>
                            <div className="text-xs text-gray-500 font-medium">Full Stack Developer</div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => {
                            return (
                                <a 
                                    key={item.name}
                                    href={item.href} 
                                    className="nav-link relative text-gray-400 hover:text-indigo-600 font-medium transition-colors duration-300 group flex items-center space-x-1"
                                >
                                    <span>{item.name}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        ref={menuButtonRef}
                        className="md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <FaTimes className="text-2xl text-gray-400 transition-transform duration-300 transform rotate-90" />
                        ) : (
                            <FaBars className="text-2xl text-gray-400 transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div 
                    ref={mobileMenuRef}
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="py-4 space-y-2 border-t border-gray-200">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <a 
                                    key={item.name}
                                    href={item.href} 
                                    className="flex items-center space-x-3 py-3 px-4 text-gray-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 group"
                                >
                                    <IconComponent className="text-lg text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                                    <span>{item.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}