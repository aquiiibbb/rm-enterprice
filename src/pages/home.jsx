import './home.css'
import { useEffect, useRef, useState } from 'react';

export default function Home(){
    const contentRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const dots = document.querySelectorAll('.dot');
        const leftArrow = document.querySelector('.nav-arrow-left');
        const rightArrow = document.querySelector('.nav-arrow-right');
        
        const updateActiveDot = (activeIndex) => {
            setCurrentSlide(activeIndex);
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
        };

        const scrollToSlide = (slideIndex) => {
            if (contentRef.current) {
                const slideWidth = contentRef.current.offsetWidth;
                contentRef.current.scrollTo({
                    left: slideIndex * slideWidth,
                    behavior: 'smooth'
                });
                updateActiveDot(slideIndex);
            }
        };
        
        // Dot click handlers
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    scrollToSlide(index);
                });
            });
        }
        
        // Arrow click handlers
        if (leftArrow) {
            leftArrow.addEventListener('click', () => {
                const newSlide = Math.max(0, currentSlide - 1);
                scrollToSlide(newSlide);
            });
        }
        
        if (rightArrow) {
            rightArrow.addEventListener('click', () => {
                const newSlide = Math.min(3, currentSlide + 1);
                scrollToSlide(newSlide);
            });
        }
        
        // Scroll event handler
        const handleScroll = () => {
            if (contentRef.current) {
                const currentScroll = contentRef.current.scrollLeft;
                const slideWidth = contentRef.current.offsetWidth;
                const currentSlideIndex = Math.round(currentScroll / slideWidth);
                updateActiveDot(currentSlideIndex);
            }
        };
        
        if (contentRef.current) {
            contentRef.current.addEventListener('scroll', handleScroll);
        }
        
        // Touch/swipe support
        let startX = 0;
        let scrollLeft = 0;
        
        const handleTouchStart = (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = contentRef.current.scrollLeft;
        };
        
        const handleTouchMove = (e) => {
            if (!startX) return;
            const x = e.touches[0].pageX;
            const walk = (startX - x) * 2;
            contentRef.current.scrollLeft = scrollLeft + walk;
        };
        
        const handleTouchEnd = () => {
            startX = 0;
            if (contentRef.current) {
                const slideWidth = contentRef.current.offsetWidth;
                const currentSlideIndex = Math.round(contentRef.current.scrollLeft / slideWidth);
                scrollToSlide(currentSlideIndex);
            }
        };
        
        if (contentRef.current) {
            contentRef.current.addEventListener('touchstart', handleTouchStart);
            contentRef.current.addEventListener('touchmove', handleTouchMove);
            contentRef.current.addEventListener('touchend', handleTouchEnd);
        }
        
        // Auto-slide (optional)
        const autoSlide = setInterval(() => {
            const nextSlide = (currentSlide + 1) % 4;
            scrollToSlide(nextSlide);
        }, 5000);
        
        // Cleanup
        return () => {
            clearInterval(autoSlide);
            if (contentRef.current) {
                contentRef.current.removeEventListener('scroll', handleScroll);
                contentRef.current.removeEventListener('touchstart', handleTouchStart);
                contentRef.current.removeEventListener('touchmove', handleTouchMove);
                contentRef.current.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [currentSlide]);

    return(
        <div>
            <div className="home-container">
                {/* Single Background Video */}
                <video className="background-video" autoPlay muted loop playsInline>
                    <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Overlay for better text readability */}
                <div className="video-overlay"></div>
                
                {/* Navigation Arrows - IMPORTANT: These were missing! */}
             
                
                {/* Scrolling Content */}
                <div className="content-wrapper" ref={contentRef}>
                    <div className="slide">
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>ULT Freezer</h2>
                                <h3>Bio Safety Cabinet</h3>
                                <p>ULT freezer gives you safe long-term storage for lesser-used items. Table-top, Chest and under-bench ULT freezers are also available. With removable inventory racks, an ultra low temperature freezer can be used to store both freezer boxes and larger items.</p>
                                <button className="cta-button">Learn More</button>
                            </div>
                            <div className="slide-image">
                                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=500&fit=crop&crop=center" alt="ULT Freezer" />
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>Laboratory</h2>
                                <h3>Plasticware</h3>
                                <p>The smartest laboratory solutions are the ones you never have to think about. Because they keep you focused on doing the science you need to do. You have the full range of labware you need to achieve your goals</p>
                                <button className="cta-button">Explore Products</button>
                            </div>
                            <div className="slide-image">
                                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=500&fit=crop&crop=center" alt="Laboratory Plasticware" />
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>Water</h2>
                                <h3>Purification</h3>
                                <p>Laboratory water purification systems: Our complete line of water purification technologies includes solutions for your most critical and everyday application needs, from electrodeionization to reverse osmosis and distillation.</p>
                                <button className="cta-button">View Systems</button>
                            </div>
                            <div className="slide-image">
                                <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=500&fit=crop&crop=center" alt="Water Purification" />
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>Autoclaves &</h2>
                                <h3>Chillers</h3>
                                <p>Your success circulates at every degree. Optimize your cooling and heating applications with outstanding performance and innovative technology. Choose from a selection of lab water baths, refrigerated and heated bath circulators, chillers and immersion coolers.</p>
                                <button className="cta-button">Get Quote</button>
                            </div>
                            <div className="slide-image">
                                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop&crop=center" alt="Autoclaves & Chillers" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="navigation-dots">
                    <div className="dot active" data-slide="0"></div>
                    <div className="dot" data-slide="1"></div>
                    <div className="dot" data-slide="2"></div>
                    <div className="dot" data-slide="3"></div>
                </div>
            </div>

            {/* Rest of your sections remain the same */}
            <div className="principals-section">
                <div className="principals-header">
                    <h2>Our Principals</h2>
                </div>
                <div className="logos-container">
                    <div className="logos-scroll">
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/equitron_medica-logo.png" alt="EQUITRON MEDICA" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/906logo_Axygen.jpg" alt="AXYGEN" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/93512.jpg" alt="PALL Life Sciences" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/IKA-LOGO-1.png" alt="IKA" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/THERMO-FISHER-logo.png" alt="ThermoFisher SCIENTIFIC" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/960rivi.jpg" alt="SCHOTT DURAN" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/3959466637.jpg" alt="Motic" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/heir_logo1.png" alt="Haier Biomedical" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/scaletech_logo.png" alt="SCALE-TEC" />
                        </div>
                        
                        {/* Duplicate logos for seamless loop */}
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/equitron_medica-logo.png" alt="EQUITRON MEDICA" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/906logo_Axygen.jpg" alt="AXYGEN" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/93512.jpg" alt="PALL Life Sciences" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/IKA-LOGO-1.png" alt="IKA" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/THERMO-FISHER-logo.png" alt="ThermoFisher SCIENTIFIC" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/960rivi.jpg" alt="SCHOTT DURAN" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/3959466637.jpg" alt="Motic" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/heir_logo1.png" alt="Haier Biomedical" />
                        </div>
                        <div className="logo-item">
                            <img src="https://www.calgonscientific.com/images/logos/scaletech_logo.png" alt="SCALE-TEC" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="products-section">
                <div className="products-container">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://www.calgonscientific.com/images/lab/glass.jpg" alt="Laboratory glassware" />
                        </div>
                        <h3>Laboratory glassware</h3>
                        <p>Laboratory work requires that the apparatus for handling chemicals/media offer maximum inertness...</p>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://www.calgonscientific.com/images/lab/automation_medical_laboratory.jpg" alt="Laboratory equipments" />
                        </div>
                        <h3>Laboratory equipments</h3>
                        <p>Calgon Scientific offers a wide range of innovative equipment for numerous applications in...</p>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://www.calgonscientific.com/images/lab/lab-plasticware-disposable-labware-300x200.jpg" alt="Laboratory plastic wares" />
                        </div>
                        <h3>Laboratory plastic wares</h3>
                        <p>Serving your lab with pipettes, tips, bottles, carboys, beakers, centrifuge tubes, funnels, jugs,...</p>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className="about-container">
                    <div className="about-left">
                        <div className="lab-image">
                            <img src="https://www.calgonscientific.com/images/calgon80.jpg" alt="Modern Laboratory" />
                        </div>
                    </div>
                    
                    <div className="about-right">
                        <div className="about-content">
                            <h2>Who we are?</h2>
                            <p className="about-description">
                                One of the leading suppliers of Laboratory Chemicals, Glasswares, 
                                Equipments, Filtration products and other Consumables etc. in Kerala 
                                reagion.
                            </p>
                            
                            <div className="features-grid">
                                <div className="feature-item">
                                    <div className="feature-image">
                                        <img src="https://www.calgonscientific.com/images/support.jpg" alt="Customer service" />
                                    </div>
                                    <div className="feature-content">
                                        <h3>Customer service</h3>
                                        <p>Our commitment to precision workmanship with unsurpassed customer service has earned us the reputation of a quality supplier. We always strive our best to offer quality products and prompt - after - sales - service.</p>
                                    </div>
                                </div>
                                
                                <div className="feature-item">
                                    <div className="feature-image">
                                        <img src="https://www.calgonscientific.com/images/team.jpg" alt="Professional Team" />
                                    </div>
                                    <div className="feature-content">
                                        <h3>Professional Team</h3>
                                        <p>We believe that our tremendous success belongs to our expert engineers, managers, co-workers and other significant team members who have put their best efforts in the growth of the organization.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}