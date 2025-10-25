import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tim from "../images/tim.jpg";

function Hero() {
  return (
    <Container className="mb-5 mt-3" fluid id="hero">
      <Row className="align-items-center">
        <Col md={6} xs={12} className="text-center text-md-start">
          <h1 className="display-2 mb-3" id="name">
            Tim Gubski
          </h1>
          <p id="top-text" className="display-6">
            Robotics + AI Engineer
            <br /> Web, Mobile, and XR Developer
          </p>
        </Col>
        <Col md={6} xs={12}>
          <img src={tim} alt="" className="d-block mx-lg-auto img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
