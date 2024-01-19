import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tim from "../images/tim.jpg";

function Hero() {
  return (
    <Container className="my-5" fluid id="hero">
      <Row className="align-items-center">
        <Col xs={6} className="text-left">
          <p id="top-text">
            Robotics + AI Engineer, Web, Mobile, and XR Developer
          </p>
          <h1 className="display-1" id="name">
            Timur Gubskiy
          </h1>
        </Col>
        <Col xs={6}>
          <img src={tim} alt="" className="d-block mx-lg-auto img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
