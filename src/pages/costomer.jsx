import { useState } from 'react'
import './costomer.css'

export default function CustomerSupport() {
    const [formData, setFormData] = useState({
        customerName: '',
        mobileNumber: '',
        landphoneNumber: '',
        productName: '',
        requirements: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.customerName.trim()) {
            newErrors.customerName = 'Customer/Business Name is required'
        }

        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile Number is required'
        } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\s/g, ''))) {
            newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number'
        }

        if (!formData.productName.trim()) {
            newErrors.productName = 'Product Name is required'
        }

        if (!formData.requirements.trim()) {
            newErrors.requirements = 'Please describe your requirements'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            // Reset form on success
            setFormData({
                customerName: '',
                mobileNumber: '',
                landphoneNumber: '',
                productName: '',
                requirements: ''
            })
            
            alert('Your support request has been submitted successfully!')
        } catch (error) {
            alert('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="customer-support-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-decoration">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Customer Support</h1>
                        <p className="hero-subtitle">
                            We're here to help you with all your laboratory equipment needs. 
                            Get in touch with our expert support team for personalized assistance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="form-section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Get Support</h2>
                            <p>Tell us about your requirements and we'll get back to you soon</p>
                        </div>

                        <form onSubmit={handleSubmit} className="support-form">
                            <div className="form-grid">
                                {/* Customer Name */}
                                <div className="form-group">
                                    <label htmlFor="customerName" className="form-label">
                                        Customer / Business Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        value={formData.customerName}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.customerName ? 'error' : ''}`}
                                        placeholder="Enter your name or business name"
                                    />
                                    {errors.customerName && (
                                        <span className="error-message">{errors.customerName}</span>
                                    )}
                                </div>

                                {/* Mobile Number */}
                                <div className="form-group">
                                    <label htmlFor="mobileNumber" className="form-label">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.mobileNumber ? 'error' : ''}`}
                                        placeholder="Enter your mobile number"
                                    />
                                    {errors.mobileNumber && (
                                        <span className="error-message">{errors.mobileNumber}</span>
                                    )}
                                </div>

                                {/* Landphone Number */}
                                <div className="form-group">
                                    <label htmlFor="landphoneNumber" className="form-label">
                                        Landphone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="landphoneNumber"
                                        name="landphoneNumber"
                                        value={formData.landphoneNumber}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="Enter landphone number (optional)"
                                    />
                                </div>

                                {/* Product Name */}
                                <div className="form-group">
                                    <label htmlFor="productName" className="form-label">
                                        Product Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="productName"
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.productName ? 'error' : ''}`}
                                        placeholder="Enter product name"
                                    />
                                    {errors.productName && (
                                        <span className="error-message">{errors.productName}</span>
                                    )}
                                </div>
                            </div>

                            {/* Requirements */}
                            <div className="form-group full-width">
                                <label htmlFor="requirements" className="form-label">
                                    Requirements *
                                </label>
                                <textarea
                                    id="requirements"
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleInputChange}
                                    className={`form-textarea ${errors.requirements ? 'error' : ''}`}
                                    placeholder="Please describe your requirements, questions, or how we can help you..."
                                    rows="6"
                                ></textarea>
                                {errors.requirements && (
                                    <span className="error-message">{errors.requirements}</span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="form-actions">
                                <button 
                                    type="submit" 
                                    className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Support Options */}
                   
                </div>
            </section>

            {/* Footer */}
            
        </div>
    )
}