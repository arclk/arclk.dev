import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="green">Arcangelo Alberico </span>
            from <span className="green"> Bologna, Italy.</span>
            <br />
            I am currently employed as a Full Stack Developer and Data Engineering at Iconsulting.
            <br />
            I have completed M.Sc. in <span className="green">Artificial Intelligence </span>
            and B.Sc. in <span className="green">Computer Engineering.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> Playing Guitar 🎸
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Playing Tennis 🎾
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Travelling ✈️
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
