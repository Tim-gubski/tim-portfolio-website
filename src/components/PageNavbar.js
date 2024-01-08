import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function PageNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Timur Gubskiy</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Experience</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default PageNavbar;
