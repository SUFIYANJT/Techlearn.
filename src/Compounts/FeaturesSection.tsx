import { Card, CardContent, Typography, Box, Container, Grid } from '@mui/material';
import './FwaturesSection.css';
import Bulb from '../assets/bulb-on-svgrepo-com.svg';
import  BoxIcon from '../assets/box-svgrepo-com.svg';
import Team from  '../assets/team-svgrepo-com.svg';
const FeaturesSection = () => {
 
    const features = [
      {
        icon: Bulb,
        title: "Industry-Led Learning",
        description: "Personalized guidance from industry professionals throughout your learning journey"
      },
      {
        icon: BoxIcon,
        title: "Live Projects",
        description: "Work on real startup projects and build a compelling and impressive portfolio"
      },
      {
        icon: Team,
        title: "1:1 Mentorship",
        description: "Personal guidance from industry professionals throughout your learning journey"
      }
    ];

  const additionalFeatures = [
    {
      title: "Placement Assistance",
      items: [
        "Resume Building Workshops",
        "Mock Interviews",
        "Direct Startup Connections"
      ]
    },
    {
      title: "Industry Certifications",
      items: [
        "Recognized Certifications",
        "Digital Badges",
        "LinkedIn Integration"
      ]
    }
  ];

  return (
    <Box className="features-section">
    <Container maxWidth="lg" className="features-container">
      <Typography variant="h1" className="features-title">
        Why Choose Teklearn?
      </Typography>
      <p className='title-desc'>
        Discover what makes our platform unique and effective
      </p> 
      <Grid container spacing={4} className="main-features">
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="feature-card">
              <CardContent className="feature-content">
                <Box className={`feature-icon-box ${index === 0 ? 'bg-1' : index === 1 ? 'bg-2' : 'bg-3'}`}>
                  <img src={feature.icon} alt="Feature Icon" className="feature-icon" />
                </Box>
                <br/>
                <Typography variant="h5" className="feature-heading">
                  {feature.title}
                </Typography>
                <br/>
                <Typography className="feature-description">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

        <Grid container spacing={4} className="additional-features">
          {additionalFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className={`additional-feature-card ${index === 0 ? 'cyan-bg' : 'dark-bg'}`}>
                <CardContent className="additional-feature-content">
                  <Typography variant="h5" className="additional-feature-heading">
                    {feature.title}
                  </Typography>
                  <br/>
                  <Box component="ul" className="feature-list">
                    {feature.items.map((item, itemIndex) => (
                      <Box 
                        component="li" 
                        key={itemIndex} 
                        className="feature-list-item"
                      >
                        <span className="bullet">•</span>
                        {item}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;