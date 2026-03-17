import './contact.css'

export default function Contact(){
    return(
        <div className="contact-page">
            {/* Hero Section */}
         

            {/* Map Section */}
            <section className="map-section">
                <div className="container-flud">
                    <div className="map-wrapper">
                        <div className="map-container">
                            <iframe 
                                 src="https://www.google.com/maps?q=B-1,Anupam+Nagar,Nanasanja,Jhagadia,Bharuch,Gujarat+393110&output=embed"
                                width="100%" 
                                height="100%" 
                                style={{border: 0}}
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Calgon Scientific Location"
                            ></iframe>
                        </div>
                        
                        {/* Map Info Card */}
                        <div className="map-info-card">
                            <div className="card-header">
                                <div className="company-logo">
                                    <div className="logo-icon">🏢</div>
                                </div>
                                <div className="company-info">
                                    <h3>RM ENTERPRISE</h3>
                                    <div className="rating-badge">
                                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                        <span className="rating-text">4.4 (1 review)</span>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button className="action-btn directions-btn" title="Get Directions">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                                        </svg>
                                    </button>
                                    <button className="action-btn share-btn" title="Share Location">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.92 18 21.92S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="address-section">
                                <div className="address-item">
                                    <div className="address-icon">📍</div>
                                    <div className="address-text">
                                        <p><strong>B-1, ANUPAM NAGAR,</strong></p>
                                        <p>NANASANJA,JHAGADIA,</p>
                                        <p>BHARUCH, GUJRAT - 393110 , INDIA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info-section">
                            <div className="section-header">
                                <h2>Contact Information</h2>
                                <p>Reach out to us through any of these channels</p>
                            </div>
                            
                            <div className="contact-cards">
                                <div className="contact-card">
                                    <div className="card-icon email-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h4>Email Address</h4>
                                        <p>rmenterprisebharuch@gmail.com</p>
                                        <a href="mailto:info@calgonscientific.com" className="contact-link">Send Email</a>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="card-icon phone-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h4>Phone Number</h4>
                                        <p>+916352306558</p>
                                        <a href="tel:+916352306558" className="contact-link">Call Now</a>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="card-icon location-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h4>Office Address</h4>
                                        <p>B-1, Anupam Nagar, Nanasanja, Jhagadia , Bharuch , Gujrat-393110</p>
                                        <a href="#" className="contact-link">View on Map</a>
                                    </div>
                                </div>

                                <div className="contact-card">
                                    <div className="card-icon website-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
                                        </svg>
                                    </div>
                                    <div className="card-content">
                                        <h4>Website</h4>
                                        <p>www.rmenterprise.com</p>
                                        <a href="http://www.rmenterprise.com" target="_blank" rel="noopener noreferrer" className="contact-link">Visit Website</a>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="business-hours">
                                <h3>Business Hours</h3>
                                <div className="hours-grid">
                                    <div className="hours-item">
                                        <span className="day">Monday - Friday</span>
                                        <span className="time">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span className="day">Saturday</span>
                                        <span className="time">9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span className="day">Sunday</span>
                                        <span className="time">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <div className="form-header">
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours</p>
                            </div>

                            <form className="contact-form">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name <span className="required">*</span></label>
                                        <input type="text" id="firstName" name="firstName" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                                        <input type="text" id="lastName" name="lastName" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address <span className="required">*</span></label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject <span className="required">*</span></label>
                                    <select id="subject" name="subject" required>
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="sales">Sales Question</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message <span className="required">*</span></label>
                                    <textarea id="message" name="message" rows="6" placeholder="Tell us how we can help you..." required></textarea>
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="newsletter" />
                                        <span className="checkmark"></span>
                                        Subscribe to our newsletter for updates and news
                                    </label>
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="copy" />
                                        <span className="checkmark"></span>
                                        Send me a copy of this message
                                    </label>
                                </div>

                                <button type="submit" className="submit-btn">
                                    <span className="btn-text">Send Message</span>
                                    <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            
        </div>
    )
}