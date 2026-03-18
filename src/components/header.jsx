import { useState, useRef, useEffect } from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assest/logo.png'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const handleNavClick = (path) => {
        closeMobileMenu()
        navigate(path)
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
            scrollToTop()
        }, 100)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        if (!isMobileMenuOpen) {
            setIsDropdownOpen(false)
        }
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setIsDropdownOpen(false)
    }

    const toggleDropdown = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDropdownOpen(!isDropdownOpen)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Close mobile menu when window resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false)
                setIsDropdownOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className="calgon-main-header">
            <div className="calgon-header-container">
                <div className="calgon-brand-logo">
                    <button 
                        onClick={() => handleNavClick('/')}
                        className="logo-button"
                    >
                        <img src={logo} alt="Calgon Scientific" className="calgon-logo-image" />
                    </button>
                </div>
                
                <nav className={`calgon-primary-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button 
                        className="calgon-nav-item"
                        onClick={() => handleNavClick('/')}
                    >
                        Home
                    </button>
                    <button 
                        className="calgon-nav-item"
                        onClick={() => handleNavClick('/about')}
                    >
                        About Calgon
                    </button>
                    <button 
                        className="calgon-nav-item"
                        onClick={() => handleNavClick('/product')}
                    >
                        Products
                    </button>
                    
                    <div className="calgon-nav-dropdown" ref={dropdownRef}>
                        <button 
                            className={`calgon-nav-item calgon-dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                            type="button"
                        >
                            Support
                        </button>
                        <div className={`calgon-dropdown-panel ${isDropdownOpen ? 'show' : ''}`}>
                            <button 
                                className="calgon-dropdown-link"
                                onClick={() => handleNavClick('/service')}
                            >
                                <span className="dropdown-icon">🔧</span>
                                Service Support
                            </button>
                            <button 
                                className="calgon-dropdown-link"
                                onClick={() => handleNavClick('/costomer')}
                            >
                                <span className="dropdown-icon">👥</span>
                                Customer Support
                            </button>
                        </div>
                    </div>
                    
                    <button 
                        className="calgon-nav-item"
                        onClick={() => handleNavClick('/contact')}
                    >
                        Contact
                    </button>
                </nav>
                
                {/* Mobile Menu Button */}
                <button 
                    className={`calgon-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && <div className="calgon-mobile-overlay" onClick={closeMobileMenu}></div>}
        </header>
    )
}