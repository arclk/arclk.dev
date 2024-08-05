import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="PracGSMLN"
              description="PyTorch implementation of a neurosymbolic framework that integrates neural networks with Markov Logic Networks (MLNs). The framework allows for merging symbolic and sub-symbolic reasoning by introducing neural networks to provide grounding-specific weights for different instantiations of the same first-order logic formula in MLNs."
              ghLink="https://github.com/arclk/pracgsmln-neurosymbolic-framework"
              // demoLink={}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Object Recognition on Store Shelves"
              description="The project focuses on developing object detection systems to identify single and multiple instances of products in given scene images."
              ghLink="https://github.com/arclk/object-recognition-on-store-shelves"
              // demoLink={}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="COVID-19 SEQIJR Model"
              description="NetLogo implementation of the SEQIJR epidemiological model for studying the evolution of the COVID-19 epidemic."
              ghLink="https://github.com/arclk/covid-19-seqijr-model"
              // demoLink={}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Quadcopter Simulator"
              description="Simulation tool of 2D quadcopters that navigate using noisy GPS position mitigated by the usage of a Kalman filter for state estimation."
              ghLink="https://github.com/arclk/quadcopter-simulator"
              // demoLink={}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Perfect Weighted Packing (PWP) Problem"
              description="This project focuses on solving the Perfect Weighted Packing (PWP) problem, which involves packing a set of rectangles into a strip without overlapping, using two different approaches: Constraint Programming (CP) and Satisfiability Modulo Theories (SMT)."
              ghLink="https://github.com/arclk/perfect-weighted-packing-problem"
              // demoLink={}
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Clickbait Titles Analysis"
              description="Text mining analysis on clickbait titles, aiming to identify the causes and patterns that make a title a clickbait."
              ghLink="https://github.com/arclk/clickbait-titles-analysis"
              // demoLink={}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
