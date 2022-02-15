import { Container, Row, Col } from "react-bootstrap";
import { DiReact } from "react-icons/di";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"; 

const iconStyle = { fontSize: 23 };

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={7} xs={12} className="footer-col footer-info">
                        <div>
                            <h2><a href="https://github.com/Giuseppetm/elegalio">Elegalio</a></h2>
                        </div>
                        <div>Template made by <a href="https://github.com/Giuseppetm"><b>Giuseppe Del Campo</b></a></div>
                        <div>Made with React and Bootstrap.</div>
                    </Col>

                    <Col lg={5} xs={12} className="footer-col social-icons">
                        <div>
                            <a href="" className="social-link"><span className="circle-icon"><DiReact style={iconStyle} /></span></a>
                            <a href="" className="social-link"><span className="circle-icon"><AiFillFacebook style={iconStyle} /></span></a>
                            <a href="" className="social-link"><span className="circle-icon"><AiFillInstagram style={iconStyle} /></span></a>
                            <a href="" className="social-link"><span className="circle-icon"><AiFillLinkedin style={{ fontSize: 23, marginRight: 0 }} /></span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;