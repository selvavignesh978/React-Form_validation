import React, { useState } from 'react';
import './EstimateForm.css'; // Importing the CSS file

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceUrgency: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.serviceUrgency) {
      newErrors.serviceUrgency = 'Please select a service urgency level';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      alert('Estimate request submitted!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="page-container">
      <div className="form-card">
        
        {/* Header / Logo Section */}
        <div className="logo-header">
          <div className="logo-circle">
            <div className="logo-inner"></div>
            <div className="logo-bg"></div>
          </div>
          <h1 className="company-name">YourCompany</h1>
        </div>

        {/* Title Banner */}
        <div className="title-banner">
          <h2>Schedule Your Estimate</h2>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="form-layout">
          
          {/* Name Row */}
          <div className="name-row">
            <div className="input-group">
              <label className="input-label">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`input-field ${errors.firstName ? 'error' : ''}`}
              />
              {errors.firstName && <p className="error-text">{errors.firstName}</p>}
            </div>

            <div className="input-group">
              <label className="input-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`input-field ${errors.lastName ? 'error' : ''}`}
              />
              {errors.lastName && <p className="error-text">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email Row */}
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* Phone Row */}
          <div className="input-group">
            <label className="input-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`input-field ${errors.phone ? 'error' : ''}`}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          {/* Service Urgency Dropdown */}
          <div className="input-group">
            <label className="input-label">Service Urgency</label>
            <div className="select-wrapper">
              <select
                name="serviceUrgency"
                value={formData.serviceUrgency}
                onChange={handleChange}
                className={`input-field select-field ${errors.serviceUrgency ? 'error' : ''} ${!formData.serviceUrgency ? 'is-placeholder' : ''}`}
              >
                <option value="" disabled>Choose your service urgency</option>
                <option value="low">Low (Within a month)</option>
                <option value="medium">Medium (Within a couple of weeks)</option>
                <option value="high">High (As soon as possible)</option>
                <option value="emergency">Emergency (Immediately)</option>
              </select>
              
              <svg className="select-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                <path d="M5.293 12.707a1 1 0 001.414 0L10 9.414l3.293 3.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" />
              </svg>
            </div>
            {errors.serviceUrgency && <p className="error-text">{errors.serviceUrgency}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="submit-btn">
              Schedule My Estimate
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EstimateForm;