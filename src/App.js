import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import tim from "./images/tim.jpg";
import afti from "./images/afti.png";
import UT from "./images/UT.png";
import princeton from "./images/princeton.svg";
import github from "./images/github.png";
import experience from "./experience.json";
import projects from "./projects.json";
import virtuocart from "./images/virtuocart.png";
import tigerlaunch from "./images/tigerlaunch.png";

import PageNavbar from "./components/PageNavbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

let colors = ["red", "blue", "green", "purple"];

let pictures = { virtuocart, tigerlaunch };

function App() {
  return (
    <div className="App container-fluid">
      <PageNavbar />
      <Hero />
      <AboutMe />
      <WorkExperience />

      <Container className="mt-5 mb-5 text-center">
        <h1 className="display-1 text-light monospace bold text-center mb-5">
          My Projects
        </h1>
        <Row className="justify-content-center">
          {projects.projects.map((project, index) => {
            return (
              <Col xs={4}>
                <Card
                  style={{ width: "100%", backgroundColor: "#1d1836" }}
                  className="text-light text-start p-3"
                >
                  {project.picture && (
                    <Card.Img
                      variant="top"
                      src={pictures[project.picture]}
                      className="rounded card-image"
                      onClick={() => {
                        window.open(project.website, "_blank").focus();
                      }}
                    />
                  )}
                  {project.video && (
                    <iframe
                      src="https://www.youtube.com/embed/s3LjB8golBE?si=OiE3DZRcCIYXMHeu"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      style={{ width: "100%", aspectRatio: "16/9" }}
                      className="rounded card-image"
                    ></iframe>
                  )}
                  {project.github && (
                    <div className="card-image-overlay p-4">
                      <a
                        href={project.github}
                        target="_blank"
                        className="overlay-button rounded-circle"
                      >
                        <img
                          src={github}
                          alt=""
                          className="overlay-button-image"
                        />
                      </a>
                    </div>
                  )}
                  <Card.Body className="p-0 pt-3">
                    <Card.Title
                      className="boldest card-title"
                      onClick={() =>
                        window.open(project.website, "_blank").focus()
                      }
                    >
                      {project.projectName}
                    </Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Text>
                      {project.tags.map((tag, index) => (
                        <span className="me-1" style={{ color: colors[index] }}>
                          {tag}
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
