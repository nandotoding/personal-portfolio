import {Carousel} from "react-bootstrap";
import {useState} from "react";

const HomeCarousel = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.data.map((slide, i) => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="9%"
                            src={slide.image}
                            alt="slider image"
                        />
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
};

export default HomeCarousel;