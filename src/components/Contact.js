import Container from "react-bootstrap/esm/Container";

const Contact = () => {
  return (
    <>
      <Container className="my-5">
        <h1
          className="display-1 text-light monospace bold text-center"
          id="contact"
        >
          Contact
        </h1>
        <p className="text-light text-center h4">
          Feel free to reach out to me at: <br />
          <a href="mailto:timgubski@princeton.edu">timgubski@princeton.edu</a>
        </p>
      </Container>
    </>
  );
};

export default Contact;
