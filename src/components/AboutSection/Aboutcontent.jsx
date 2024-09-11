import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import { LiaCheckDoubleSolid } from "react-icons/lia";

import imageAbout from "../../assets/images/about.jpg";

const Aboutcontent = () => {
  return (
    <Row className="" >
        <Col xs="12" md="6" data-aos="fade-right">
        <div className="about-content_img position-relative" >
            <img src={imageAbout} className="h-100 w-100" alt="About Image" />

            <span className="about-content__play">
            <FaPlay/>
            </span>
            <div className="about-content__play_circle"></div>
        </div>
        </Col>

        <Col xs="12" md="6" className="mt-4 mt-md-0" data-aos="fade-left">
        <h3>
        Lorem ipsum is placeholder text commonly used in the graphic
        , print.
        </h3>
        <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur.
        </p>

        <div className="my-3">

            <div className="d-flex align-items-start gap-2 mb-2">
                <span className="about_content__icon"><LiaCheckDoubleSolid/></span>
                <span>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </span>
            </div>

            <div className="d-flex align-items-start gap-2 mb-2">
                <span className="about_content__icon"><LiaCheckDoubleSolid/></span>
                <span>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </span>
            </div>

            <div className="d-flex align-items-start gap-2">
            <span className="about_content__icon"><LiaCheckDoubleSolid/></span>
            <span>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                </span>
            </div>

        </div>

        <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident.
        </p>

        </Col>
    </Row>
  )
}

export default Aboutcontent
