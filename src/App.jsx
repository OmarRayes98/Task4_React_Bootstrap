import  Container  from "react-bootstrap/Container"
import UpperBar from "./components/UpperBar/UpperBar"
import NavBar from "./components/Navbar/Navbar"
import HeroCarousel from "./components/HeroCarousel/HeroCarousel"
import CardsSection from "./components/CardsSection/CardsSection"
import NeedHelp from "./components/NeedHelp/NeedHelp"
import AboutSection from "./components/AboutSection/AboutSection"
import AboutCardsSection from "./components/AboutCardsSection/AboutCardsSection"
import FeaturedSetion from "./components/FeaturedSetion/FeaturedSetion"
import ServiceSection from "./components/ServiceSection/ServiceSection"
import MakeAppointment from "./components/MakeAppointment/MakeAppointment"
import DepartmentSection from "./components/DepartmentSection/DepartmentSection"
import TestmonialSection from "./components/TestmonialSection/TestmonialSection"
import DoctorsSection from "./components/DoctorsSection/DoctorsSection"
import PricingSection from "./components/PricingSection/PricingSection"
import AccordionSection from "./components/AccordionSection/AccordionSection"
import ContactSection from "./components/ContactSection/ContactSection"
import Footer from "./components/Footer/Footer"
import CopyRight from "./components/CopyRight/CopyRight"
import { useCallback, useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import { FaArrowUp } from "react-icons/fa";
import useThrottled from "./hooks/useThrottled";
import Aos from "aos"


function App() {
  const [visibleTop , setVisibleTop] = useState(false)


  const handleVisibleTop = useCallback(() => {
    window.pageYOffset > 600 ? setVisibleTop(true): setVisibleTop(false);

  }, []);

  const throttledScroll = useThrottled(handleVisibleTop, 300, 0);

  useEffect(()=>{

    window.addEventListener('scroll',throttledScroll);

    return()=>{
      window.removeEventListener('scroll',throttledScroll);

    }

    
  },[throttledScroll])

  const handleScrollUp = () => {
    window.scrollTo({ top:0, behavior: "smooth" });
  };


  useEffect(()=>{
    Aos.init();

  },[])


  return (
    <>
      <UpperBar/>
      <NavBar/>
      <HeroCarousel/>
      <Container className="padding-y">
      <CardsSection/>
      </Container>

      <section className="padding-bottom">
      <NeedHelp/>
      </section>

      <Container>
      <AboutSection/>
      <section className="padding-y">
      <AboutCardsSection />
      </section>

      <FeaturedSetion/>

      <ServiceSection/>
      
      </Container>

      <MakeAppointment/>

      <Container className="padding-y">
        <DepartmentSection/>

        <TestmonialSection/>
      </Container>

      <DoctorsSection/>

      <Container className="padding-y">
      <PricingSection/>
      </Container>

      <AccordionSection/>

      <ContactSection/>

        <Footer/>

      <CopyRight/>

      { 
    
        visibleTop? 
        <Button className="btn-top position-fixed border-0 p-3" onClick={handleScrollUp}>
          <FaArrowUp/>
        </Button> :
        null

      }


    </>
  )
}

export default App
