import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiMenuAlt2, HiX } from "react-icons/hi";

const Hero = () => {
    let [lateralMenu, setLateralMenu] = useState(false);

    return (
        <section id="hero">

            <Container fluid style={{ height: '100vh' }} className="desktop">
                <Row style={{ height: '100vh' }}>

                    <Col lg={6} className="col-content">
                        <div className="header">
                            <div className="header-content">
                                <div><a href="#dennis"><b>Elegalio</b></a></div>
                                <div style={{ display: 'flex' }}>
                                    <div className="navbar-item"><a href="#dennis">About</a></div>
                                    <div className="navbar-item"><a href="#dennis">Section two</a></div>
                                    <div className="navbar-item" style={{ marginRight: 0 }}><a href="#dennis">Section three</a></div>
                                </div>
                            </div>
                        </div>
                        {Content()}
                    </Col>

                    <Col lg={6} className="p-0">
                        <img src={require("../Images/hero.jpg")} alt="Hero" />
                    </Col>

                </Row>
            </Container>

            <div className="mobile">
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

                <div style={{ display: lateralMenu ? 'block' : 'none' }} className="sidebar">
                    <div className="sidebar-backdrop" />
                    <div className="sidebar-content">
                        <div className="menu-container">
                            <div className="menu-title">Menu</div>
                            <div className="menu-item">About</div>
                            <div className="menu-item">Section two</div>
                            <div className="menu-item">Section three</div>
                        </div>
                        <div className="menu-container" style={{ marginTop: 30 }}>
                            <div className="menu-title">Get in touch</div>
                            <div>giuseppe.delcampo@outlook.com</div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

const Content = () => {
    return (
        <div>
            <div className="mb-4">
                <h1 className="primary-color">Elegalio</h1>
                <h2>A simple and elegant website template</h2>
                <p style={{ maxWidth: 550 }}>You can insert whatever you want in this template, from yours text to images: if you want you can change the context to what you need.</p>
            </div>
            <span className="button button-hero">
                Tell me more
            </span>
        </div>
    );
}

export default Hero;