import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaHome, FaMoon, FaSun } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import portfolioImg from './assets/portfolio.jpg'

export default function Navbar({ theme, toggleTheme }) {
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
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[var(--nav-bg)] border-b border-[var(--border-color)]">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4 group cursor-pointer">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                            <img 
                                src={portfolioImg} 
                                alt="M.Khalil" 
                                className="relative h-12 w-12 object-cover rounded-full border-2 border-[var(--border-color)] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-[var(--text-main)] leading-none uppercase">
                                Khalil<span className="text-[var(--accent)]">.dev</span>
                            </span>
                            <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest mt-1">Full Stack Engineer</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a 
                                    key={item.name}
                                    href={item.href} 
                                    className="px-4 py-2 text-sm font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--accent)]/10 transition-all duration-300 flex items-center gap-2 group"
                                >
                                    <Icon className="text-xs group-hover:text-[var(--accent)] transition-colors" />
                                    {item.name}
                                </a>
                            );
                        })}
                        
                        <div className="ml-4 pl-4 border-l border-[var(--border-color)] flex items-center space-x-4">
                            <button 
                                onClick={toggleTheme} 
                                className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 shadow-sm"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
                            </button>
                            <a 
                                href="#contact"
                                className="px-5 py-2.5 bg-[var(--accent)] text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-105 transition-all duration-300"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Controls */}
                    <div className="flex items-center space-x-3 md:hidden">
                        <button 
                            onClick={toggleTheme} 
                            className="p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)]"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>
                        <button 
                            ref={menuButtonRef}
                            onClick={toggleMenu}
                            className="p-2 rounded-lg bg-[var(--accent)] text-white"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div 
                    ref={mobileMenuRef}
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        isMenuOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-2xl space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a 
                                    key={item.name}
                                    href={item.href} 
                                    className="flex items-center gap-4 p-4 rounded-xl text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 font-bold transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-main)] flex items-center justify-center border border-[var(--border-color)]">
                                        <Icon className="text-lg" />
                                    </div>
                                    <span>{item.name}</span>
                                    <i className="fas fa-chevron-right ml-auto text-[10px] opacity-30"></i>
                                </a>
                            );
                        })}
                        <div className="pt-4 mt-4 border-t border-[var(--border-color)]">
                            <a 
                                href="#contact"
                                className="w-full py-4 bg-[var(--accent)] text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}