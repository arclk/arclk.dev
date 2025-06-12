import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from "react-bootstrap/Badge";
import { experiences } from "../../data/experiences";

function Experience() {
  return (
    <VerticalTimeline>
      {experiences.map((experience) => {
        const IconComponent = experience.icon;
        return (
          <VerticalTimelineElement
            key={experience.id}
            className={`vertical-timeline-element--${experience.type}`}
            date={experience.period}
            dateClassName="vertical-timeline-element-date"
            iconStyle={{ background: experience.iconBackground, color: '#fff' }}
            icon={<IconComponent />}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p>{experience.description}</p>
            <div style={{ textAlign: "left", marginTop: "15px" }}>
              {experience.technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  pill 
                  bg="success" 
                  className="experience-badge me-2 mb-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default Experience;