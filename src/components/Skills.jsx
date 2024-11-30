import React from "react";
// Styles
import "./Skills.css";
// Multi Carousel Component
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Skills meter Svg
import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
// Background Image
import colorSharp from "../assets/image/color-sharp.png";

function Skills() {
  // Carousel Responsive Settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section id="skills" className="skills">
        <Container>
          <Row>
            <Col>
              <div className="skills-box">
                <h2>Skills</h2>
                <p>
                  As a Software Engineer focused on AI, I continually push the boundaries of what's possible with technology. I have a solid foundation in software development, with specialized skills in AI, machine learning, and cloud computing. My goal is to create innovative, scalable solutions that leverage AI to solve real-world problems.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skills-slider"
                >

                  <div className="item">
                    <img src={meter1} alt="FullStack Development" />
                    <h5>FullStack Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Cloud Computing" />
                    <h5>Cloud Computing</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="AI Development" />
                    <h5>AI Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Machine Learning" />
                    <h5>Machine Learning</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp} className="background-image-left" alt="background" />
      </section>
    </>
  );
}

export default Skills;
