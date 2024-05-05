import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
  DiRasberryPi,
} from "react-icons/di";
import {
  SiPostgresql,
  SiPytorch,
  SiTensorflow
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch className="tech-icons-smaller" title="PyTorch" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow className="tech-icons-smaller" title="TensorFlow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple title="Angular" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql className="tech-icons-smaller" title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRasberryPi title="Raspberry Pi" />
      </Col>
    </Row>
  );
}

export default Techstack;
