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

import virtuocart from "./images/virtuocart.png";
import tigerlaunch from "./images/tigerlaunch.png";

import PageNavbar from "./components/PageNavbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function App() {
  return (
    <div className="App">
      <PageNavbar />
      <div className="container-fluid">
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
