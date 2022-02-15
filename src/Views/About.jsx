import { Container } from "react-bootstrap";

const About = () => {
    return (
        <section id="about">
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
        </section>
    );
};

export default About;