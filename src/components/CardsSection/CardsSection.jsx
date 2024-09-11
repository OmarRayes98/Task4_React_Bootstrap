import { cardsSectionData } from "../../constants/CardsSectionData";
import MainCustomCard from "../MainCustomCard/MainCustomCard";
import "./CardsSection.css";
import  Col  from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";

const CardsSection = () => {

  return (
    <Row className=""data-aos="fade-up" id="home">
      {
        cardsSectionData.map((item)=>(
          <Col  key={item.id} className="col-12 col-md-6 col-lg-3 my-2">
            <MainCustomCard icon={item.icon} title={item.title} animation="ltr-effect" text={item.text} paddingY="py-4"/> 
          </Col>
        ))
      }
      
    </Row>
  )
}

export default CardsSection
