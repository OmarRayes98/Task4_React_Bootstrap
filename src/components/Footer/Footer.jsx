import { Col, Container, Row, Stack } from "react-bootstrap";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-4" >
      <Container>
        <Row className="">
            <Col className="" xs="12" md="4">
            <Stack>
                <h2 className="mb-5">
                    Medico
                </h2>
                <p>
                    Aio Adam Street
                </p>
                <p>
                    NewYwork, NY 5424
                </p>

                <div className="">
                    <p className="m-0">
                        <span className="fw-bold text-black">
                        Email:
                        </span>
                        <span>
                        info@exapmle.com
                        </span>
                    </p>
                    <p className="m-0">
                        <span className="fw-bold text-black">
                        Phone:
                        </span>
                        <span>
                        09349553
                        </span>
                    </p>
                </div>
            </Stack>
            </Col>

            <Col className="" xs="12" md="2">
            <Stack>
                <h5 className="mb-4">
                    UsefulLinks
                </h5>
                <p>
                    Home
                </p>
                <p>
                    About Us
                </p>
                <p>
                    Services
                </p>
                <p>
                    Terms of service
                </p>
            </Stack>
            </Col>
            <Col className="" xs="12" md="2">
            <Stack>
                <h5 className="mb-4">
                    UsefulLinks
                </h5>
                <p>
                    Home
                </p>
                <p>
                    About Us
                </p>
                <p>
                    Services
                </p>
                <p>
                    Terms of service
                </p>
            </Stack>
            </Col>
            <Col className="" xs="12" md="2">
            <Stack>
                <h5 className="mb-4">
                    UsefulLinks
                </h5>
                <p>
                    Home
                </p>
                <p>
                    About Us
                </p>
                <p>
                    Services
                </p>
                <p>
                    Terms of service
                </p>
            </Stack>
            </Col>
            <Col className="" xs="12" md="2">
            <Stack>
                <h5 className="mb-5">
                    UsefulLinks
                </h5>
                <p>
                    Home
                </p>
                <p>
                    About Us
                </p>
                <p>
                    Services
                </p>
                <p>
                    Terms of service
                </p>
            </Stack>
            </Col>

        </Row>

        <section className="d-flex align-content-center gap-3">
            <span className="footer__icon">
            <FaFacebook/>
            </span>
            <span className="footer__icon">
            <FaLinkedin/>
            </span>
            <span className="footer__icon">
            <FaInstagram/>
            </span>
            <span className="footer__icon">
            <FaXTwitter/>
            </span>



        </section>
      </Container>
    </footer>
  )
}

export default Footer
