import HeadingCommon from "../HeadingCommon/HeadingCommon";
import "./MakeAppointment.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Container  from "react-bootstrap/Container";
import  Button  from "react-bootstrap/Button";

const MakeAppointment = () => {
  return (
    <Container className="padding-y make-appointment">
      <HeadingCommon
      title="Make an Appointment"
      subtext="Duis aute irure dolor in reprehenderit in voluptate velit Duis aute irure reprehenderit in voluptate "
      />
    
    <Row className="py-3" data-aos="fade-up">
            <Col className="col-12 col-md-6 col-lg-4 my-3">
            <Form.Control className="input py-2" type="text" placeholder="Your Name" />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-3">
            <Form.Control className="input py-2" type="email" placeholder="Your Email" />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-3">
            <Form.Control className="input py-2" type="text" placeholder="Your Phone" />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-3">
            <Form.Control className="input py-2" type="date" placeholder="Your Phone" />

            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-3">
            <Form.Select className="input py-2" aria-label="Default select example">
                <option>Select Department</option>
            </Form.Select>
            
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-3">
            <Form.Select className="input py-2" aria-label="Default select example">
                <option>Select Doctors</option>
            </Form.Select>
            </Col>
            <Col className="col-12 my-3">
            <Form.Control as="textarea" rows={5} placeholder="Message (Optional)" />
            
            </Col>
    </Row>

    <div className="w-100 text-center" >
    <Button className="border-0 px-4  order-lg-1 bg-primary-color ms-auto ms-sm-4" variant="primary" >Make an Appointment</Button>
    </div>
    
    
    
    </Container>



    
  )
}

export default MakeAppointment
