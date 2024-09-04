import React from "react";
// Styles
import "./Projects.css";
// Project Images
import img1 from "../assets/image/project-img1.png";
import img2 from "../assets/image/project-img2.png";
import img3 from "../assets/image/project-img3.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import colorSharp from "../assets/image/color-sharp2.png";

function Projects() {
  const projects = [
    {
      title: "Showbuj - AI-Driven Recycling Platform",
      description: "Co-founded and developed Showbuj, an AI-powered platform focused on encouraging responsible consumption and waste reduction by transforming waste into worth. Leveraged AI to streamline the recycling process, making it accessible and convenient.",
      img: img1,
    },
    {
      title: "AuraClipAI - AI Video Editing Platform",
      description: "Developed AuraClipAI, an innovative AI video editing platform that automates complex editing tasks, allowing users to create professional-quality videos with minimal effort. Focused on AI-driven features for enhanced user experience.",
      img: img2,
    },
    {
      title: "GPChat - AI in Healthcare",
      description: "Led the development of GPChat, an AI startup project aimed at revolutionizing GP-patient interactions. The platform uses AI to enhance communication and improve patient outcomes, developed during the Build Together: AI Hackathon.",
      img: img3,
    },
    {
      title: "IntEmp - AI Project Management Platform",
      description: "Award-winning AI project management platform designed to streamline and automate the management of AI projects. Received the Most Creative Award by CISSA at UniMelb for its innovative approach to AI-driven project management.",
      img: img1,
    },
    {
      title: "Cloud-Based Machine Learning Deployment",
      description: "Implemented cloud-based solutions for deploying and scaling machine learning models, ensuring high availability and performance across distributed systems.",
      img: img2,
    },
    {
      title: "AgriTech AI Solutions",
      description: "Explored and developed AI-driven solutions for the agricultural sector, focusing on optimizing resource usage and increasing productivity through machine learning and data analysis.",
      img: img3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              As a Software Engineer focused on AI, I've had the opportunity to work on a range of innovative projects. From co-founding startups to developing AI-driven platforms, my work spans across various industries, including recycling, video editing, healthcare, and agriculture. Below are some of the key projects that highlight my skills and experience.
            </p>
            <Tab.Container defaultActiveKey="first" id="projects-tabs">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first"> AI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Cloud</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">ML</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.slice(0, 3).map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(3, 5).map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.slice(5, 6).map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-right" alt="background" />
    </section>
  );
}

export default Projects;
