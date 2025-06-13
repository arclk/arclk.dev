import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import TechBadge from "../common/TechBadge";

function ProjectCards(props) {
  const { viewMode = "grid" } = props;
  
  if (viewMode === "list") {
    return (
      <Card className="project-card-view h-100">
        <Row className="g-0 h-100">
          <Col md={4}>
            {props.imgPath && (
              <Card.Img 
                variant="top" 
                src={props.imgPath} 
                alt={`${props.title} preview`}
                className="card-img-top"
              />
            )}
          </Col>
          <Col md={8}>
            <Card.Body className="d-flex flex-column h-100">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <Badge bg="success" className="text-dark">
                  {props.category}
                </Badge>
                <div className="d-flex align-items-center text-muted">
                  <BiCalendar size={14} className="me-1" />
                  <small>{props.year}</small>
                </div>
              </div>

              <Card.Title className="green">{props.title}</Card.Title>
              
              <Card.Text 
                style={{ textAlign: "justify", fontSize: "0.9em", lineHeight: "1.5" }}
                className="flex-grow-1"
              >
                {props.description}
              </Card.Text>
              
              <TechBadge 
                technologies={props.technologies} 
                className="mb-3"
                variant="secondary"
              />

              <div className="d-flex gap-2 mt-auto">
                {props.ghLink ? (
                  <Button variant="primary" href={props.ghLink} target="_blank" size="sm">
                    <BsGithub /> &nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                  </Button>
                ) : (
                  <Button variant="secondary" disabled size="sm">
                    <BsGithub /> &nbsp;
                    Not Available
                  </Button>
                )}

                {!props.isBlog && props.demoLink && (
                  <Button variant="success" href={props.demoLink} target="_blank" size="sm">
                    <CgWebsite /> &nbsp;
                    Demo
                  </Button>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }

  return (
    <Card className="project-card-view h-100">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt={`${props.title} preview`} />
      )}
      
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <Badge bg="success" className="text-dark">
            {props.category}
          </Badge>
          <div className="d-flex align-items-center text-muted">
            <BiCalendar size={14} className="me-1" />
            <small>{props.year}</small>
          </div>
        </div>

        <Card.Title className="green">{props.title}</Card.Title>
        
        <Card.Text 
          style={{ textAlign: "justify", fontSize: "0.9em", lineHeight: "1.5" }}
          className="flex-grow-1"
        >
          {props.description}
        </Card.Text>
        
        <TechBadge 
          technologies={props.technologies} 
          className="mb-3"
          variant="secondary"
        />

        <div className="d-flex gap-2 mt-auto">
          {props.ghLink ? (
            <Button variant="primary" href={props.ghLink} target="_blank" size="sm" className="flex-grow-1">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          ) : (
            <Button variant="secondary" disabled size="sm" className="flex-grow-1">
              <BsGithub /> &nbsp;
              Not Available
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="success" href={props.demoLink} target="_blank" size="sm" className="flex-grow-1">
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
