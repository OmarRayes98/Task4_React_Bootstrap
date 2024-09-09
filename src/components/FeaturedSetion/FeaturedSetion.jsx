import "./FeaturedSetion.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import featurImage from "../../assets/images/features.jpg";
import HeadingCommon from "../HeadingCommon/HeadingCommon";
import { FaUserDoctor } from "react-icons/fa6";
import { GiChemicalDrop } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { LuBuilding2 } from "react-icons/lu";


const FeaturedSetion = () => {
  return (
    <Row className="about-last padding-bottom">
        <Col xs="12" md="6">
        <div className="about-last_img position-relative">
            <img src={featurImage} className="h-100 w-100" alt="Feature Image" />
        </div>
        </Col>

        <Col xs="12" md="6" className="mt-4 mt-md-0">

        <HeadingCommon title="Duis aute irure dolor in reprehenderit" 
        subtext="Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
        isTextStart={true}/>



        <div className="my-3">

            <div className="d-flex align-items-start gap-2 mb-5">
                <span className="about-last__icon shadow-lg"><FaUserDoctor/></span>
                <div>
                    <h6>
                    Duis irure
                    </h6>
                    <span style={{fontSize:'0.9rem'}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  in voluptate velit esse cillum 
                    </span>
                </div>
            </div>

            <div className="d-flex align-items-start gap-2 mb-5">
                <span className="about-last__icon shadow-lg"><GiChemicalDrop/></span>
                <div>
                    <h6>
                    Duis irure
                    </h6>
                    <span style={{fontSize:'0.9rem'}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  in voluptate velit esse cillum 
                    </span>
                </div>
            </div>

            <div className="d-flex align-items-start gap-2 mb-5">
                <span className="about-last__icon shadow-lg"><LiaAwardSolid/></span>
                <div>
                    <h6>
                    Duis irure
                    </h6>
                    <span style={{fontSize:'0.9rem'}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  in voluptate velit esse cillum 
                    </span>
                </div>
            </div>

            <div className="d-flex align-items-start gap-2 mb-5">
                <span className="about-last__icon shadow-lg"><LuBuilding2/></span>
                <div>
                    <h6>
                    Duis irure
                    </h6>
                    <span style={{fontSize:'0.9rem'}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  in voluptate velit esse cillum 
                    </span>
                </div>
            </div>
        </div>
        </Col>
    </Row>

  )
}

export default FeaturedSetion
