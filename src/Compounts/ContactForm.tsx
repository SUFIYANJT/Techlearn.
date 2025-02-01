import React, { useState } from 'react';
import './ContactForm.css';
import  Mail  from '../assets/mail-svgrepo-com.svg';
import Phone from '../assets/phone-svgrepo-com.svg';
import Facebook from '../assets/facebook-svgrepo-com(1).svg'
import Location from '../assets/location-pin-svgrepo-com (1).svg';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">Have questions? We're here to help!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group1">
          <label htmlFor="interest">I'm interested in</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <div className='Information-container'> 
      
            <div className='phone-container'>
            <div className="location">
                <img src={Phone} className="location-icon" ></img>
                <span className="Mail-text">Phone</span>
              </div>
            
            
      </div>
      <div className='Mail-container'>
            <div className='Mail-container'>
            <div className="location">
                <img src={Mail} className="location-icon" ></img>
                
                <span className="Mail-text">Mail</span>
                </div>
            </div>
            
      </div>
      <div className="location-container">
  <div className="location">
    <img src={Location} alt="Location-Icon" className="location-icon" />
    <span className="location-text">Location</span>
  </div>
  
</div>
    </div>
    <div className='social'>
  <span className='social_media-title'> Connect With Us</span>
  <div className='social_media'>
    <div className='social_media-container'>
      <div className='social-media-icon-container'>
        <div className='icon-wrapper'>
          <img src={Facebook} className='Facebook-Icon' />
        </div>
      </div>
      <div className='social-media-icon-container'>
        <div className='icon-wrapper'>
          <img src={Facebook} className='Facebook-Icon' />
        </div>
      </div>
      <div className='social-media-icon-container'>
        <div className='icon-wrapper'>
          <img src={Facebook} className='Facebook-Icon' />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ContactForm;