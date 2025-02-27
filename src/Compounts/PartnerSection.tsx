import './PartnerSection.css';
import Flash from '../assets/react.svg'
import Collage from '../assets/Clg.svg'
const PartnerSection = () => {
  return (
    <div className="partner-container">
      <div className="partner-header">
        <h1 className="partner-title">Partner With Us</h1>
        <p className="partner-subtitle">
          Join our ecosystem of innovation and growth
        </p>
      </div>

      <div className="cards-wrapper">
        <div className="partner-card college-card">
          <img src={Collage} className='icon'></img>
          <h2 className="card-title">For Colleges</h2>
          <ul className="feature-list">
            <li>Industry-aligned curriculum</li>
            <li>Placement assistance</li>
            <li>Faculty development programs</li>
          </ul>
          <button className="partner-button college-button">
            Partner as College
          </button>
        </div>

        <div className="partner-card startup-card">
          <img src={Flash}  className='icon'></img>
          <h2 className="card-title">For Startups</h2>
          <ul className="feature-list">
            <li>Access to trained talent pool</li>
            <li>Customized talent solutions</li>
            <li>Flexible engagement models</li>
          </ul>
          <button className="partner-button startup-button">
            Partner as Startup
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;