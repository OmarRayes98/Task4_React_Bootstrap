import Container from "react-bootstrap/Container";
import HeadingCommon from "../HeadingCommon/HeadingCommon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import "./ContactSection.css";
import CardContact from "./CardContact";
import Card from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import Form  from "react-bootstrap/Form";

const ContactSection = () => {
  return (
    <section className="padding-y contact" id="contact">
      <HeadingCommon
      title="Contact"
      subtext="Duis aute irure dolor in reprehenderit in voluptate"
      />
      
       <iframe
       
  src="https://www.google.com/maps/embed?pb=1m10!1m8!1m3!1d53226.573543487284!2d36.29128!3d33.5102!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sus!4v1725033723875!5m2!1sar!2sus"
  height="450"
  style={{ border: 'none' }}
  allowFullScreen=""
  loading="lazy"
  className="w-100"
/>

    <Container>
    <Row className="mt-5">
        <Col xs="12" md="6" data-aos="fade-right">
        <Row className="gap-4">
            <Col xs="12">

            <CardContact
            title="Address"
            subtitle="Syria , Latakia "
            icon={<CiLocationOn/>}
            />


            </Col>

            <Col xs="12">
            <Row className="gap-md-0 gap-4">
            <Col xs="12" md="6">

                <CardContact
            title="Call Us"
            subtitle="+964 323 3233 "
            icon={<BsTelephone/>}
            />

          </Col>
          <Col xs="12" md="6">

                <CardContact
            title="Email Us"
            subtitle="info@example.com"
            icon={<MdOutlineEmail/>}
            />

                </Col>
            </Row>

            </Col>
        </Row>
        </Col>


        <Col xs="12" md="6" className="mt-4 mt-md-0" data-aos="fade-left">
        <Card className={`py-4 px-4 border-0 shadow text-center`}>
        <Row className="gap-4">

          <Col md="6 my-3">
          <Form.Control className="input py-2" type="text" placeholder="Your Name" />
          </Col>

          <Col md="6 my-3">
          <Form.Control className="input py-2" type="text" placeholder="Your Email" />
          </Col>

        </Row>
        <Form.Control className="input py-2 my-3" type="text" placeholder="Subject" />

        <Form.Control className="input my-3" as="textarea" rows={5} placeholder="Message" />

        <div className="w-100 text-center my-4">
    <Button className="my-1 border-0 px-4 py-3 order-lg-1 bg-primary-color ms-auto ms-sm-4" variant="primary" >Send Message</Button>
    </div>
        </Card>

        </Col>
    </Row>
    </Container>


      
    </section>
  )
}

export default ContactSection
