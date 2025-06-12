import React from "react";
import Badge from "react-bootstrap/Badge";

function TechBadge({ technologies, variant = "secondary", className = "" }) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className={`d-flex flex-wrap gap-1 ${className}`}>
      {technologies.map((tech, index) => (
        <Badge 
          key={index} 
          pill 
          bg={variant}
          className="me-1 mb-1"
          style={{ fontSize: "0.75em" }}
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}

export default TechBadge;