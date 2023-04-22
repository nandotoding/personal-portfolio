import {Carousel} from "react-bootstrap";
import {useState} from "react";

const WelcomeSkillCarousel = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            {props.data.map((slide, i) => {
                return (
                    <Carousel.Item>
                        <img src={slide.skill} height="50px"/>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
};

export default WelcomeSkillCarousel;