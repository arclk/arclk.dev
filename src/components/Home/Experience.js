import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from "react-bootstrap/Badge";
import { RxLaptop } from "react-icons/rx";
import { HiOutlineAcademicCap } from "react-icons/hi2";


class Experience extends Component {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2021 - present"
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ background: 'rgb(153 211 126)', color: '#fff' }}
          icon={<RxLaptop />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Developer & Data Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Iconsulting</h4>
          <p>
            Web Development, Cloud Computing, Middleware Integration, ETL Workflows
          </p>
          <div style={{ textAlign: "left", marginTop: "15px" }}>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="FastAPI">
                FastAPI
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="Angular">
                Angular
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="AWS">
                AWS Services
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="Talend">
                Talend
            </Badge>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2019 - 2021"
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ background: 'rgb(153 211 126)', color: '#fff' }}
          icon={<HiOutlineAcademicCap />}
        >
          <h3 className="vertical-timeline-element-title">M.Sc. in Artificial Intelligence</h3>
          <h4 className="vertical-timeline-element-subtitle">Alma Mater Studiorum – Università di Bologna</h4>
          <p>
            Artificial Intelligence, Machine Learning, Computer Vision, Natural Language Processing
          </p>
          <div style={{ textAlign: "left", marginTop: "15px" }}>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="Python">
                Python
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="Pytorch">
                Pytorch
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="Tensorflow">
                Tensorflow
            </Badge>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2019 - 2021"
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ background: 'rgb(153 211 126)', color: '#fff' }}
          icon={<HiOutlineAcademicCap />}
        >
          <h3 className="vertical-timeline-element-title">B.Sc. in Computer Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Università degli Studi di Salerno</h4>
          <p>
            Math, Physics, Computer Programming, Electornics, Automation, Signal Theory
          </p>
          <div style={{ textAlign: "left", marginTop: "15px" }}>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="C">
                C
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="Java">
                Java
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="WebDev">
                Web Development
            </Badge>
            <Badge pill bg="success" className="experience-badge mr-2 mb-2" key="SQL">
                SQL
            </Badge>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}

export default Experience;