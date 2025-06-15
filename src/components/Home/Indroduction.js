import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Experience from "./Experience";


function Indroduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              For me programming is more than just a profession; 
              it's an art form that blends logic, problem-solving, and a touch of artistic flair. 
              It's the ability to transform abstract ideas into tangible realities, one keystroke at a time.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="green"> Python </b>and <b className="green"> Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="green">Artificial Intelligence</b>,{" "}
                <b className="green">Data Engineering</b> and  
                also areas related to{" "}
                <b className="green">
                  Web Development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="green">Node.js</b> and
              <i>
                <b className="green">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="green"> React and Angular</b>
              </i>
              &nbsp; or developing funny things on platform like <b className="green"> RaspberryPi.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <div><span>&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;</span></div>
        </Row>
        <Row>
          <div style={{padding: "0.5rem"}}>
            <Experience></Experience>
          </div>
        </Row>
        <Row>
          <div><span>&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;</span></div>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/arclk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arclk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/archi_luke"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Indroduction;
