import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Microfinance Solutions",
      description: "Developed mobile apps for 26+ microfinance institutions using Flutter.",
      imgUrl: projImg1,
    },
    {
      title: "Event Management Platform",
      description: "Built for the 36th ACSIC Conference using the MERN stack.",
      imgUrl: projImg2,
    },
    {
      title: "Human Resource Management App",
      description: "Streamlined HR operations for microfinance institutions.",
      imgUrl: projImg3,
    },
    {
      title: "Age Care Management App",
      description: "Designed a comprehensive app for elderly care services.",
      imgUrl: projImg1,
    },
    {
      title: "mPassbook Application",
      description: "Enabled customers to track financial transactions with ease.",
      imgUrl: projImg2,
    },
    {
      title: "UI/UX Design Projects",
      description: "Created intuitive designs for web and mobile applications.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here are some of the key projects I’ve worked on, showcasing my expertise in
                    mobile app development, UI/UX design, and full-stack solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Designs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Focused on creating scalable and intuitive mobile applications
                          that address real-world challenges in industries like microfinance and event management.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Dedicated to delivering user-centered designs that blend functionality
                          and aesthetics for both web and mobile platforms.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
