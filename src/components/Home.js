import React, { useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import styled from "styled-components";
import YouTube from "react-youtube";
import Feedback from "react-bootstrap/esm/Feedback";
import FAQ from "./FAQ";

const Styles = styled.div`
    .main-bg {
        background-color: #2e151b;
    }
    .text {
        color: #dbf1fb;
    }
    .heading {
        font-weight: 500;
    }
    .custom-text {
        font-size: 140%;
        font-family: Helvetica;
    }
    .twitter {
        transition: all 0.2s ease-in-out;
        :hover {
            color: #00acee;
            transform: scale(1.5);
        }
    }
    .facebook {
        transition: all 0.2s ease-in-out;
        :hover {
            color: #3b5998;
            transform: scale(1.5);
        }
    }
    .linkedin {
        transition: all 0.2s ease-in-out;
        :hover {
            color: #0e76a8;
            transform: scale(1.5);
        }
    }
`;

const Home = (props) => {
    const youtubeOptions = {
        width: "100%",
    };

    const [showFAQModal, setFAQModal] = useState(false);

    return (
        <Styles>
            <FAQ
                show={showFAQModal}
                closeModal={() => setFAQModal(false)}
                onHide={() => setFAQModal(false)}
            />
            <div className="main-bg">
                <Carousel autoplay="true">
                    <Carousel.Item>
                        <img className="w-100" src={img1}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img2}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img3}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img4}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img5}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img6}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img7}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img8}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img9}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img10}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100" src={img11}></img>
                    </Carousel.Item>
                </Carousel>
                <Button
                    style={{ position: "fixed" }}
                    variant="outline-light"
                    size="lg"
                    onClick={() => setFAQModal(true)}
                >
                    ?
                </Button>
                <Container>
                    <div className="text-center display-2 my-3 text">
                        Welcome To IEEE<br></br>
                        Gujarat Section GRSS Chapter
                    </div>
                    <div className="h4 text-center text my-5">
                        Scroll to explore more<br></br>
                        <i className="fa fa-chevron-down my-5"></i>
                    </div>
                    <div className="display-2 my-5 text-center text">
                        Who are we?
                    </div>

                    <Row className="py-5">
                        <Col>
                            <div className="text-justify text custom-text">
                                The IEEE Geoscience and Remote Sensing Society
                                (GRSS) is a professional society of the IEEE,
                                active in the fields of geoscience and remote
                                sensing. The Geoscience and Remote Sensing
                                Society seeks to advance science and technology
                                in geoscience, remote sensing and related fields
                                using conferences, education, and other
                                resources.The fields of interest of the Society
                                are the theory, concepts, and techniques of
                                science and engineering as they apply to the
                                remote sensing of the earth, oceans, atmosphere,
                                and space, as well as the processing,
                                interpretation and dissemination of this
                                information. Gujarat,one of the most vibrant
                                states of India,houses renowned research and
                                academic institutes which are actively involved
                                in the field of geoscience and remote
                                sensing.This lead to the inception of Gujarat
                                chapter of IEEE GRSS which brings together
                                researchers and academicians under one umbrella
                                where the ideas and vision can be dissipitated
                                in the form of conferences,
                                meetings,lectures,workshops and other activiies.
                            </div>
                        </Col>
                        <Col>
                            <YouTube
                                videoId="JZrCOuquSN0"
                                opts={youtubeOptions}
                            />
                            <br></br>
                            <Row className="my-5">
                                <Col className="text-center">
                                    <a
                                        href="https://www.facebook.com/groups/546023775454229/"
                                        target="blank"
                                    >
                                        <i className="fa fa-5x fa-facebook text facebook"></i>
                                    </a>
                                </Col>
                                <Col className="text-center">
                                    <i className="fa fa-5x fa-linkedin text linkedin"></i>
                                </Col>
                                <Col className="text-center">
                                    <a
                                        href="https://twitter.com/IEEE_GRSS"
                                        target="blank"
                                    >
                                        <i className="fa fa-5x fa-twitter text twitter"></i>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Feedback></Feedback>
            </div>
        </Styles>
    );
};

export default Home;
