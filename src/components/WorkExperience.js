import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import experience from "../experience.json";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import afti from "../images/afti.png";
import UT from "../images/UT.png";
import princeton from "../images/princeton.svg";
import pre from "../images/pre.jpg";
import rivian from "../images/Rivian logo.png";

const logos = { afti: afti, UT: UT, princeton: princeton, pre, rivian };

function WorkExperience() {
  return (
    <Container className="" id="experience">
      <h1 className="display-1 text-light monospace bold text-center">
        Work Experience
      </h1>
      <VerticalTimeline>
        {experience.experience.map((exp, index) => {
          return (
            <VerticalTimelineElement
              key={`experience-${index}`}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
                boxShadow: "0px 0px 10px 0px #1d1836",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={exp.date}
              iconStyle={{ background: "white", color: "#fff" }}
              icon={
                <img
                  src={logos[exp.logo]}
                  className="w-100 h-100"
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title bold">
                {exp.role}
              </h3>
              <h5 className="vertical-timeline-element-subtitle text-muted-light">
                {exp.companyName}
              </h5>
              <p>
                <ul>
                  {exp.description.map((desc) => (
                    <li className="timeline-bullet mt-2">
                      <p className="d-inline">{desc}</p>
                    </li>
                  ))}
                </ul>
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Container>
  );
}

export default WorkExperience;
