import "./AboutCardsSection.css";
import { cardsAboutData } from "../../constants/CardsAboutData";
import  Col  from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";
import MainCustomCard from "../MainCustomCard/MainCustomCard";

const AboutCardsSection = () => {



  return (
    <Row className="" data-aos="fade-up">
      {cardsAboutData.map((item) => (
        <Col key={item.id}  className="col-12 col-md-6 col-lg-3 my-2">
          <MainCustomCard
            icon={item.icon}
            title={item.title}
            text={item.text}
            paddingY="py-2"
            animation="ltr-effect"
            titleCustomClass="fw-bold fs-4"
            subCustomClass="text-muted pe-0"
            bodyCustomClass="d-flex align-items-center gap-3"
          />
        </Col>
      ))}
    </Row>
  );
}

export default AboutCardsSection
