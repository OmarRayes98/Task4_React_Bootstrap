// import  { Suspense } from "react";
// import { lazy } from "react";


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
// import TestmonialSection from "./components/TestmonialSection/TestmonialSection"
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

// const UpperBar = lazy(() => import("./components/UpperBar/UpperBar"));
// const NavBar = lazy(() => import("./components/Navbar/Navbar"));
// const HeroCarousel = lazy(() => import("./components/HeroCarousel/HeroCarousel"));
// const CardsSection = lazy(() => import("./components/CardsSection/CardsSection"));
// const NeedHelp = lazy(() => import("./components/NeedHelp/NeedHelp"));
// const AboutSection = lazy(() => import("./components/AboutSection/AboutSection"));
// const AboutCardsSection = lazy(() => import("./components/AboutCardsSection/AboutCardsSection"));
// const FeaturedSetion = lazy(() => import("./components/FeaturedSetion/FeaturedSetion"));
// const ServiceSection = lazy(() => import("./components/ServiceSection/ServiceSection"));
// const MakeAppointment = lazy(() => import("./components/MakeAppointment/MakeAppointment"));
// const DepartmentSection = lazy(() => import("./components/DepartmentSection/DepartmentSection"));
// const DoctorsSection = lazy(() => import("./components/DoctorsSection/DoctorsSection"));
// const PricingSection = lazy(() => import("./components/PricingSection/PricingSection"));
// const AccordionSection = lazy(() => import("./components/AccordionSection/AccordionSection"));
// const ContactSection = lazy(() => import("./components/ContactSection/ContactSection"));

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

  //susbense for all : one loading to finish the page 
  // susbense for every component  with same loading and that load has to be 
  //same position wil be like Focal X agency to see component will show step by step 

  return (
    // <Suspense fallback={<h1>Loading...</h1>}>
        <>
        <UpperBar />
      
      
        <NavBar />
      
      
        <HeroCarousel />
      
      <Container className="padding-y">
        
          <CardsSection />
        
      </Container>

      <section className="padding-bottom">
        
          <NeedHelp />
        
      </section>

      <Container>
        
          <AboutSection />
        
        <section className="padding-y">
          
            <AboutCardsSection />
          
        </section>

        
          <FeaturedSetion />
        

        
          <ServiceSection />
        
      </Container>

      
        <MakeAppointment />
      

      <Container className="padding-y">
        
          <DepartmentSection />
        
      </Container>

      
        <DoctorsSection />
      

      <Container className="padding-y">
        
          <PricingSection />
        
      </Container>

      
        <AccordionSection />
      

      
        <ContactSection />
      

      
      

      
        <CopyRight />
      
    

        <Footer/>

      <CopyRight/>

      { 
    
        visibleTop? 
        <Button className="btn-top position-fixed  p-3 shadow-sm border border-white" onClick={handleScrollUp}>
          <FaArrowUp/>
        </Button> 
        :
        null

      }

{/* </Suspense> */}
</>
  )
}

export default App
