import "./HeroCarousel.css";
import { heroCarouselData } from "../../constants/HeroCarouselData";
import Carousel from 'react-bootstrap/Carousel';
import  Button  from "react-bootstrap/Button";

const HeroCarousel = () => {
    return (

    <Carousel interval={null} className="carusel">
        {
            heroCarouselData.map((item)=>(
            <Carousel.Item key={item.id} className="carusel_item h-100">
                <img
                className="d-block w-100 h-100 object-fit-cover  "
                src={item.image}
                alt={`image ${item.id}`}
                />
                <Carousel.Caption className="carousel_caption  px-sm-3">
                <h3 className="text-dark  mb-md-4">{item.title}</h3>
                <p className="text-dark  mb-md-4">{item.text}</p>

                <Button variant="primary" className="carousel_btn border-0 px-4">
                Read More
                </Button>
                </Carousel.Caption>
            </Carousel.Item>

            ))
        }

    </Carousel>
    )
}

export default HeroCarousel
