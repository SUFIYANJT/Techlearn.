import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        industry through practical learning and real-world experience.
      </p>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#" className="social-icon">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h2 className="section-title">Quick Links</h2>
          <nav className="nav-links">
            <a href="#" className="nav-link">Courses</a>
            <a href="#" className="nav-link">Live Projects</a>
            <a href="#" className="nav-link">For Colleges</a>
            <a href="#" className="nav-link">For Startups</a>
            <a href="#" className="nav-link">Contact Us</a>
          </nav>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h2 className="section-title">Resources</h2>
          <nav className="nav-links">
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Student Success Stories</a>
            <a href="#" className="nav-link">Career Guide</a>
            <a href="#" className="nav-link">FAQs</a>
            <a href="#" className="nav-link">Help Center</a>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h2 className="section-title">Stay Updated</h2>
          <p className="footer-text">
            Subscribe to our newsletter for the latest updates and opportunities.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;