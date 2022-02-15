import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
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
    );
};

export default About;