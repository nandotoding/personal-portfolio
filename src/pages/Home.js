import shibaInu from '../assets/shiba-inu.png';
import {welcomeTextStyle} from "./style";

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <p className="display-6" style={welcomeTextStyle}>Hello. I am Nando.</p>
                    <p className="display-6" style={welcomeTextStyle}>I am a Software Engineer.</p>
                </div>
                {/*<div>*/}
                {/*    <img src={shibaInu} alt="Shiba Inuuu" className="me-2"/>*/}
                {/*</div>*/}
            </div>
        </>
    )
};

export default Home;