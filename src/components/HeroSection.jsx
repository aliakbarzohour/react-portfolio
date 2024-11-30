import React, { useState, useEffect } from "react";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Bootstrap Icons
import * as Icon from "react-bootstrap-icons";
// Hero Section image
import headerImg from "../assets/image/header-img.svg";
// Style for the Hero Section
import "./HeroSection.css";

function HeroSection() {
  // Hooks for the Hero Section
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const toRotate = [
     "Software Engineer",
     "AI Enthusiast"
   ,
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (deleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container className="align-items-center">
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to My Portfolio</span>
              <h1>
                {`Hi, I'm Md Abu Rayhan`}
                <br />
                <span className="wrap">{text}</span>
              </h1>
              <p>
                I'm a Software Engineer with a deep focus on AI, dedicated to creating innovative solutions that leverage machine learning and artificial intelligence. My passion lies in developing cutting-edge technology that drives progress and makes a difference. With experience in both startups and consulting, I'm on a journey to merge technical expertise with business strategy.
              </p>
              <button
                onClick={() => {
                  console.log("Connect button clicked.");
                }}
              >
                Let's Connect <Icon.ArrowRightCircle size={25} />{" "}
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Hero Section" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;
