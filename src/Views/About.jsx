import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { BiBuildings, BiCategoryAlt, BiHotel, BiMapAlt } from 'react-icons/bi';

const iconStyle = { fontSize: 36 };

const About = () => {
    return (
        <>
            <section id="about">
                <Fade left duration={500} delay={600} distance="30px">
                    <Container>
                        <div>
                        <p className="title">
                            <span className="white-color" style={{ fontWeight: 'bold' }}>Elegalio</span> is a responsive, elegant and simple to modify template, made with React.
                        </p>
                        <p className="subtitle">
                            I used Bootstrap for grid system and nice classes that help with the basic structure of a website.
                        </p>
                        </div>
                    </Container>
                </Fade>
            </section>

            <section id="about-p2">
                <Fade left duration={500} delay={600} distance="30px">
                    <Container>
                        <div className="mb-5"><h2>Let's take a look</h2></div>
                        <Row>
                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><BiBuildings style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">A building icon</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>I really like this icon, it's about a building.</p></div>
                            </Col>

                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><BiCategoryAlt style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">Woopsie woopsie</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>Remember that you can find this template on my GitHub profile.</p></div>
                            </Col>

                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><BiHotel style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">A really cool bed</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>I love sleeping.. I would sleep all day, i'm serious.</p></div>
                            </Col>

                            <Col lg={3} md={3} sm={6} xs={12} className="mb-lg-0 mb-4">
                                <div style={{ marginBottom: 32 }}><span className="about-icon"><BiMapAlt style={iconStyle} /></span></div>
                                <div><h5 className="secondary-color">Is this .. a map?</h5></div>
                                <div style={{ marginLeft: 30, marginRight: 30 }}><p>Yeah, this is a map! It can help you in many ways.</p></div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>
            </section>
        </>
    );
};

export default About;