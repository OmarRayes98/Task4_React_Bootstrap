import HeadingCommon from "../HeadingCommon/HeadingCommon";
import Aboutcontent from "./Aboutcontent";
import "./AboutSection.css";

const AboutSection = () => {
  return (

    <section id="about" className="about-section padding-bottom">
    <HeadingCommon title="About Us" subtext="Lorem Ipsum is simply dummy text of the printing industry"/>
    <Aboutcontent/>
    </section>
  )
}

export default AboutSection
