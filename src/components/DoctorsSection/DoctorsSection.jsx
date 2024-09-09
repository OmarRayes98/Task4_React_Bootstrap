import Container from "react-bootstrap/Container";
import "./DoctorsSection.css";
import HeadingCommon from "../HeadingCommon/HeadingCommon";
import { doctorsData } from "../../constants/doctorsData";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const DoctorsSection = () => {
    
  return (
    <section className="doctor-section padding-y" id="doctors">

        <HeadingCommon
        title={"Doctors"}
        subtext="Duis aute irure dolor in reprehenderit in voluptate"
        />

        <Container>
        <Row>
            {doctorsData.map((item)=>(
            <Col key={item.id}  className="col-12 col-md-6 col-lg-3 my-2">

        <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className="text-muted">
          {item.work}
        </Card.Text>
      </Card.Body>
    </Card>

            </Col>
            ))}


        </Row>

        </Container>
    
    </section>
  )
}

export default DoctorsSection
