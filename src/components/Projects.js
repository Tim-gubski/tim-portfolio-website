import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../projects.json";
import Card from "react-bootstrap/Card";
import github from "../images/github.png";
import virtuocart from "../images/virtuocart.png";
import tigerlaunch from "../images/tigerlaunch.png";
import flamenet from "../images/flamenet.png";
import sustainabite from "../images/sustainabite.png";
import graffitex from "../images/graffitex.jpg";

let colors = ["#ffb3ba", "#bae1ff", "#baffc9", "#ffffba"];

let pictures = { virtuocart, tigerlaunch, flamenet, sustainabite, graffitex };

const Projects = () => {
  return (
    <Container className="mt-5 mb-5 text-center" id="projects">
      <h1 className="display-1 text-light monospace bold text-center mb-5">
        My Favorite Projects
      </h1>
      <Row className="justify-content-center">
        {projects.projects.map((project, index) => {
          return (
            <Col xs={12} sm={6} xl={4} className="my-3">
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
                    src={project.video}
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
                    <div className="d-flex flex-wrap">
                      {project.tags.map((tag, index) => (
                        <div className="">
                          <span
                            className="me-1 bold"
                            style={{ color: colors[index] }}
                          >
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
