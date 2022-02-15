import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
    return (
        <section id="hero">
            <Container fluid style={{ height: '100vh' }} className="desktop">
                <Row style={{ height: '100vh' }}>

                    <Col lg={6} className="col-content">
                        {Content()}
                    </Col>

                    <Col lg={6}>
                        {/* Image here */}
                    </Col>

                </Row>


            </Container>
            <div className="mobile">
                { /* Qui ci va l'immagine sotto un po' oscurata, e il testo sopra con gli elementi identico, quindi conviene modularizzarlo. */}
                <img />
                <Container fluid>
                    {Content()}
                </Container>
            </div>
        </section>
    );
};

const Content = () => {
    return (
        <div>
            <h1>A simple and elegant apartments website template</h1>
            <p>You can insert whatever you want in this template, from yours text to images: if you want you can change the context to what you need.</p>
        </div>
    );
}

export default Hero;