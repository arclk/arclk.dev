import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiLinux,
  SiAmazonaws
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos className="tech-icons-smaller" title="MacOs"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux className="tech-icons-smaller" title="Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws className="tech-icons-smaller" title="AWS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="tech-icons-smaller" title="Visual Studio Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="tech-icons-smaller" title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack className="tech-icons-smaller" title="Slack"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
