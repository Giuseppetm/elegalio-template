import { useScrollLock } from '@mantine/hooks';
import { Container, Row, Col } from "react-bootstrap";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const Hero = () => {
    let [lateralMenu, setLateralMenu] = useScrollLock(false);

    return (
        <section id="hero">

            <Container fluid style={{ height: '100vh' }} className="desktop">
                <Row style={{ height: '100vh' }}>

                    <Col lg={6} className="col-content">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <div className="header">
                                <div className="header-content">
                                    <div><a href="https://elegalio.netlify.app/"><b>Elegalio</b></a></div>
                                    <div style={{ display: 'flex' }}>
                                        <div className="navbar-item"><Link to="about" smooth duration={500}>About</Link></div>
                                        <div className="navbar-item"><Link to="details" smooth duration={500}>Details</Link></div>
                                        <div className="navbar-item" style={{ marginRight: 0 }}><Link to="contact" smooth duration={500}>Contact</Link></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {Content()}
                    </Col>

                    <Col lg={6} className="p-0">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <img src={require("../Images/hero.jpg")} alt="Hero" />
                        </Fade>
                    </Col>

                </Row>
            </Container>

            <div className="mobile">
                <Fade bottom duration={500} delay={600} distance="30px">

                    <img src={require("../Images/hero.jpg")} alt="Hero" />
                    <div className="header">
                        <div className="header-content">
                            <div><a href="#dennis"><b>Elegalio</b></a></div>
                            <div>
                                {!lateralMenu 
                                ? <HiMenuAlt2 style={{ fontSize: 24 }} onClick={() => setLateralMenu(true)} /> 
                                : <HiX style={{ fontSize: 24, color: lateralMenu ? "#383535" : "#eeeded"  }} onClick={() => setLateralMenu(false)} /> }
                            </div>
                        </div>
                    </div>
                    <Container fluid style={{ height: '100vh' }} className="content">
                        <div className="margin-adder">
                            {Content()}
                        </div>
                    </Container>

                </Fade>

                    <div style={{ display: lateralMenu ? 'block' : 'none' }} className="sidebar">
                        <Fade right duration={400} distance="30px">
                            <div className="sidebar-backdrop" />
                            <div className="sidebar-content">
                                <div className="menu-container">
                                    <div className="menu-title">Menu</div>
                                    <div className="menu-item"><Link to="about" smooth duration={500} onClick={() => setLateralMenu(false)}>About</Link></div>
                                    <div className="menu-item"><Link to="details" smooth duration={500} onClick={() => setLateralMenu(false)}>Details</Link></div>
                                    <div className="menu-item"><Link to="contact" smooth duration={500} onClick={() => setLateralMenu(false)}>Contact</Link></div>
                                </div>
                                <div className="menu-container" style={{ marginTop: 30 }}>
                                    <div className="menu-title">Get in touch</div>
                                    <div><a href="mailto:giuseppe.delcampo@outlook.com">giuseppe.delcampo@outlook.com</a></div>
                                </div>
                            </div>
                        </Fade>
                    </div>

            </div>

        </section>
    );
};

const Content = () => {
    return (
        <div>
            <Fade left duration={500} delay={600} distance="30px">
                <div className="mb-4">
                    <h1 className="primary-color">Elegalio</h1>
                    <h2>A simple and elegant website template</h2>
                    <p style={{ maxWidth: 550 }}>You can insert whatever you want in this template, from yours text to images: if you want you can change the context to what you need.</p>
                </div>

                <Link to="about" smooth duration={500}>
                    <span className="button button-hero" data-cursor-text="Click me">
                        Tell me more
                    </span>
                </Link>
            </Fade>
        </div>
    );
}

export default Hero;