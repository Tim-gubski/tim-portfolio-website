import Container from "react-bootstrap/esm/Container";

function AboutMe() {
  return (
    <Container className="my-5">
      <h1
        className="display-1 text-light monospace bold text-center"
        id="about"
      >
        About Me
      </h1>
      <p className="text-light text-center h5">
        Hey there! I'm Tim, an Electrical and Computer Engineering recent
        graduate from Princeton University interested in software development,
        robotics, autonomous vehicles, and entrepreneurship - feel free to reach
        out to chat! I’ve been programming and learning engineering skills for
        most of my life and love sharing my knowledge by teaching young students
        while continually developing and enhancing my own skills. Outside of
        school and robotics, I'm typically found at the bouldering wall or in
        front of a piano practicing my favorite tunes!
      </p>
    </Container>
  );
}

export default AboutMe;
