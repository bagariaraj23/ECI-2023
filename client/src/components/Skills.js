import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import img2 from "../assets/img/eci_2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import "../App.css";
import Card2 from "./Card2";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="skill drk" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn project drkin">
              <section id="project">
                <Container>
                  <Row>
                    <Col size={12}>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__fadeIn"
                                : ""
                            }
                          >
                            {/* <h2>Projects</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p> */}
                            <Tab.Container
                              id="projects-tabs"
                              defaultActiveKey="first"
                            >
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              >
                                <Nav.Item>
                                  <Nav.Link eventKey="first">
                                    Ticketing System
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="second">Rewards</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="third">
                                    Collaborations
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                              <Tab.Content
                                id="slideInUp"
                                className={
                                  isVisible
                                    ? "animate__animated animate__slideInUp"
                                    : ""
                                }
                              >
                                <Tab.Pane eventKey="first">
                                  <Row className="p-5 align-items-center d-flex justify-content-around">
                                    <div className="col-7">
                                      <div className="main-banner position-relative ">
                                        <Card2></Card2>
                                      </div>
                                    </div>
                                  </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  <Row className="p-5 align-items-center d-flex justify-content-center">
                                      <div className="main-banner position-relative ">
                                        <Card2></Card2>
                                      </div>
                                  </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                  <Container class1="famous-wrapper py-5 home-wrapper-2">
                                    <div className="row align-items-center d-flex justify-content-center">
                                      <div className="main-banner position-relative ">
                                        <Card2></Card2>
                                      </div>
                                    </div>
                                  </Container>
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                        )}
                      </TrackVisibility>
                    </Col>
                  </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>
              </section>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
