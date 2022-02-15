import { Container, Row, Col } from "react-bootstrap";

const Details = () => {
    return (
        <section id="details">
            <Container>
                <Row className="mb-5 mb-lg-0">
                    <Col lg={8} className="p-4">
                        <img src={require("../Images/details/details1.jpg")} alt="Details1" />
                    </Col>

                    <Col lg={4} className="col-description">
                        <div>
                            <h2 style={{ fontWeight: 'normal' }}>This is a very nice building.</h2>
                            <p>I would love to tell more about it, but you'll have to press the button down here.</p>
                            <span className="button button-hero">Find out</span>
                        </div>
                    </Col>
                </Row>

                <Row className="mb-5 mb-lg-0">
                    <Col lg={4} className="col-description">
                        <div>
                            <h2 style={{ fontWeight: 'normal' }}>This is cool too.</h2>
                            <p>There's a particular story about this building.. maybe you should check out!</p>
                            <span className="button button-hero">Discover this one</span>
                        </div>
                    </Col>

                    <Col lg={8} className="p-4">
                        <img src={require("../Images/details/details2.jpg")} alt="Details2" />
                    </Col>
                </Row>

                <Row className="mb-5 mb-lg-0">
                    <Col lg={8} className="p-4">
                        <img src={require("../Images/details/details3.jpg")} alt="Details3" />
                    </Col>

                    <Col lg={4} className="col-description">
                        <div>
                            <h2 style={{ fontWeight: 'normal' }}>Woah, this is really nice.</h2>
                            <p>I think ananas are really bad.. what do you think?</p>
                            <span className="button button-hero">Tell me about</span>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default Details;