import React from 'react';
import './LiveProjectInternships.css';

const LiveProjectInternships = () => {
  const steps = [
    {
      number: 1,
      title: "Complete Your Course",
      description: "Master the required skills through our comprehensive courses",
    },
    {
      number: 2,
      title: "Get Matched",
      description: "We match you with startups based on your skills and interests",
    },
    {
      number: 3,
      title: "Start Working",
      description: "Begin your internship with full support from our mentors",
    },
  ];

  return (
    <div className="internship-container">
      <div className="header1">
        <h1 className="title1">Live Project Internships</h1>
        <p className="subtitle">Work on real projects with innovative startups</p>
      </div>

      <div className="how-it-works">
        <h2 className="section-title">How It Works</h2>

        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step-item">
              <div className="number-container">
                <div className="number-box">{step.number}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cards-container">
        <div className="card1">
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="card1">
          <button className="apply-btn">Apply Now</button>
        </div>
        <div className="card1">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>

      <button className="view-more-btn">View More Opportunities</button>
    </div>
  );
};

export default LiveProjectInternships;
