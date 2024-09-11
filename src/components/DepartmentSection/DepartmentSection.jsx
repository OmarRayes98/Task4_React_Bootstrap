import HeadingCommon from "../HeadingCommon/HeadingCommon";
import "./DepartmentSection.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { categoryTypeData,categoryInfoData } from "../../constants/DepartmentData";
import { useState } from "react";


const DepartmentSection = () => {

    const [activeCategory, setActiveCategory] = useState("category1");


    const handleActiveType = (type)=>{
        setActiveCategory(type);
    }

  return (
    <section className="department" id="departments">
    <HeadingCommon
    title="Departments"
    subtext="Duis aute irure dolor in reprehenderit in voluptate"
    />

<Row className="" data-aos="fade-up">
        <Col xs="12" md="3">
        {
            <section className="department__types">
                {
                    categoryTypeData.map((item)=>(
                        <p key={item.id} style={{color:activeCategory===item.type ? 'var(--bs-color-primary':'initial'}} onClick={()=>handleActiveType(item.type)}>
                        {item.type}
                        </p>
                    ))
                }
            </section>
        }

        </Col>

        <Col xs="12" md="9" className="position-relative">

        {categoryInfoData.map((item)=>(
                    <section className={`position-absolute gap-3 my-5 my-md-0 d-flex flex-column-reverse flex-md-row opacity-0 ${activeCategory===item.type ?'active-category':''}`}  key={item.id}>

                    <section >
                    <h3>
                        {item.title}
                    </h3>
                    <p>
                        {item.text}
                    </p>
                    </section>

                    <img className="department__img" src={item.image} alt="image category" />

                    </section>
        ))}



    
        </Col>
    </Row>

    </section>
  )
}

export default DepartmentSection
