import  Button  from "react-bootstrap/Button";
import "./NeedHelp.css";
import  Container  from "react-bootstrap/Container";

const NeedHelp = () => {
  return (
    <section className="need-help text-center text-white" data-aos="fade-up">
        <Container>
        <h3>
        In an emergency? Need help now?
        </h3>

        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book.
        </p>

        <Button variant="outline-primary" className="custom-button mt-2 text-white border-white">Make an Appointment</Button>
    
        </Container>

    </section>
  )
}

export default NeedHelp
