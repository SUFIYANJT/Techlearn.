// ContactForm.jsx
import  { useState } from 'react';
import './ContactForm.css';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

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
    console.log('Form submitted:', formData);
  };

  return (
    <section id="ContactForm" >
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">Have questions? We're here to help!</p>
      </div>

      <div className="contact-content">
        {/* Left side - Form */}
        <div className="contact-form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>I'm interested in</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="option1">Live Project</option>
                <option value="option2">For Colleges</option>
                <option value="option3">For Startups</option>
                <option value="option4">For Intership</option>
              </select>
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Contact Info */}
        <div className="contact-info-section">
          <div className="contact-info-box">
            <h2 className="info-title">Contact Information</h2>
            
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Phone className="info-icon" />
              </div>
              <span>Phone</span>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <Mail className="info-icon" />
              </div>
              <span>Email</span>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <MapPin className="info-icon" />
              </div>
              <span>Location</span>
            </div>
          </div>

          <div className="social-media-box">
            <h2 className="social-title">Connect With Us</h2>
            <div className="social-icons">
              <div className="social-icon-circle">
                <Facebook />
              </div>
              <div className="social-icon-circle">
                <Instagram />
              </div>
              <div className="social-icon-circle">
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    </section>
   
  );
};

export default ContactForm;