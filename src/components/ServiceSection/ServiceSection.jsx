import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHeartPulse } from "react-icons/fa6";
import { GiTimeTrap } from "react-icons/gi";

import HeadingCommon from "../HeadingCommon/HeadingCommon";
import "./ServiceSection.css";
import CardService from "./CardService";

const ServiceSection = () => {
  return (
    <section className="service-section" id="services">
        <HeadingCommon
        title="Services"
        subtext="Duis aute irure dolor in reprehenderit in voluptate"
        />

        <Row className="padding-y">
            <Col className="col-12 col-md-6 col-lg-4 my-2 text-center">
             <CardService
             Icon={<FaHeartPulse/>}
             title="Nescuint Mete"
             subText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
             />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-2 text-center">
             <CardService
             Icon={<GiTimeTrap/>}
             title="Eosel Mete"
             subText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
             />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-2 text-center">
             <CardService
             Icon={<FaHeartPulse/>}
             title="Nescuint Mete"
             subText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
             />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-2 text-center">
             <CardService
             Icon={<GiTimeTrap/>}
             title="Ledo Mete"
             subText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
             />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-2 text-center">
             <CardService
             Icon={<FaHeartPulse/>}
             title="Nescuint Mete"
             subText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
             />
            </Col>
            <Col className="col-12 col-md-6 col-lg-4 my-2 text-center">
             <CardService
             Icon={<GiTimeTrap/>}
             title="Nescuint Mete"
             subText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
             />
            </Col>

        </Row>
    
    </section>
  )
}

export default ServiceSection
