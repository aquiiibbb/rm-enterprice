import { useState } from 'react'
import './service.css'

export default function Servicesupport() {
    const [formData, setFormData] = useState({
        customerName: '',
        mobileNumber: '',
        landphoneNumber: '',
        productName: '',
        invoiceNumber: '',
        date: '',
        itemSerialNumber: '',
        complaints: ''
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

        if (!formData.complaints.trim()) {
            newErrors.complaints = 'Please describe your complaint'
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
                invoiceNumber: '',
                date: '',
                itemSerialNumber: '',
                complaints: ''
            })
            
            alert('Your service request has been submitted successfully!')
        } catch (error) {
            alert('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="service-support-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-decoration">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Service Support</h1>
                        <p className="hero-subtitle">
                            Need help with your laboratory equipment? Our expert support team is here to assist you. 
                            Fill out the form below and we'll get back to you promptly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="form-section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Submit Your Service Request</h2>
                            <p>Please provide the following details to help us serve you better</p>
                        </div>

                        <form onSubmit={handleSubmit} className="service-form">
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

                                {/* Invoice Number */}
                                <div className="form-group">
                                    <label htmlFor="invoiceNumber" className="form-label">
                                        Invoice Number
                                    </label>
                                    <input
                                        type="text"
                                        id="invoiceNumber"
                                        name="invoiceNumber"
                                        value={formData.invoiceNumber}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="Enter invoice number (if available)"
                                    />
                                </div>

                                {/* Date */}
                                <div className="form-group">
                                    <label htmlFor="date" className="form-label">
                                        Purchase Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>

                                {/* Item Serial Number */}
                                <div className="form-group">
                                    <label htmlFor="itemSerialNumber" className="form-label">
                                        Item Serial Number
                                    </label>
                                    <input
                                        type="text"
                                        id="itemSerialNumber"
                                        name="itemSerialNumber"
                                        value={formData.itemSerialNumber}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="Enter serial number (if available)"
                                    />
                                </div>
                            </div>

                            {/* Complaints */}
                            <div className="form-group full-width">
                                <label htmlFor="complaints" className="form-label">
                                    Complaints / Issue Description *
                                </label>
                                <textarea
                                    id="complaints"
                                    name="complaints"
                                    value={formData.complaints}
                                    onChange={handleInputChange}
                                    className={`form-textarea ${errors.complaints ? 'error' : ''}`}
                                    placeholder="Please describe the issue you're experiencing with the product..."
                                    rows="5"
                                ></textarea>
                                {errors.complaints && (
                                    <span className="error-message">{errors.complaints}</span>
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
                                            Submitting...
                                        </>
                                    ) : (
                                        'Send Request'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                   
                </div>
            </section>
        </div>
    )
}