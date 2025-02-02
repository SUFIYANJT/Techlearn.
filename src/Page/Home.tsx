import React from "react";
import Header from "../Compounts/Header";
import './Home.css';
import { ArrowRight } from 'lucide-react';
import FeaturesSection from "../Compounts/FeaturesSection";
import LiveProjectInternships from "../Compounts/LiveProjectInternships";
import PartnerSection from "../Compounts/PartnerSection";
import ContactForm from "../Compounts/ContactForm";
import Footer from "../Compounts/Footer";


interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="min-h-screen">
      <Header />   
      <section>
      <div className="app-container">
        <div className="content">
          <h1 className="title">
            <span className="highlight">
              Empowering The Youth<br />
              To Lead, To Grow, To Achieve
            </span>
          </h1>
          <p className="description">
            Bridge the gap between academia and industry with project-based
            learning and real-world experience.
          </p>
          
          <div className="buttons-container">
            <div className="buttons">
              <button 
                className="btn explore flex items-center justify-center gap-2"
                onClick={() => window.location.href = '/programs'}
              >
                <span className="flex items-center">
                  Explore Programs
                  <ArrowRight className="ml-1 w-5 h-5" strokeWidth={2} />
                </span>
              </button>
              
              <button 
                className="btn join flex items-center justify-center gap-2"
                onClick={() => window.location.href = '/projects'}
              >
                <span className="flex items-center">
                  Join Live Projects
                  <ArrowRight className="ml-1 w-5 h-5" strokeWidth={2} />
                </span>
              </button>
             
            </div>
          </div>
        </div>
        <div className="rectangle"></div>
      </div>
      </section>
      <FeaturesSection />
      <LiveProjectInternships />
      <PartnerSection />
      <ContactForm />
      <Footer />
    </div>
    
  );
};

export default Home;