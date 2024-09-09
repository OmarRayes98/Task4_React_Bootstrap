import "./UpperBar.css";
import { CiClock2,CiMobile2} from "react-icons/ci";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpperBar = () => {
  return (
    <section className="upper-bar bg-primary-color">

      <Container className="gx-0">

        <Row className="gx-0 py-2 text-white">
        <Col className="col-sm d-none align-items-center d-sm-flex  gap-1">
      <span>
      <CiClock2 className="fs-4"/>
      </span>
      <span>Monday - Saturday,8AM to 10PM</span>
      </Col>

      <Col className="col-sm d-flex align-items-center gap-1 justify-content-center justify-content-sm-end">
      <span>
      <CiMobile2 className="fs-4"/>
      </span>
      <span>Call us now +1 5589 55488 55</span>
      </Col>
        </Row>


      </Container>





    </section>
  )
}

export default UpperBar
