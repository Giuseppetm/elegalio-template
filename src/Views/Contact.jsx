import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Fade bottom duration={500} delay={600} distance="30px">
                    <h1>Get in touch</h1>
                    <p>Would you like to talk with me?</p>
                    <a href="mailto:giuseppe.delcampo@outlook.com"><span className="button button-hero">Send me an e-mail</span></a>
                </Fade>
            </Container>
        </section>
    )
};

export default Contact;