import {welcomeTextStyle} from "./style";
import Stock from "../components/body-components/home/Stock";

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <p className="display-6" style={welcomeTextStyle}>Hello. I am Nando.</p>
                    <p className="display-6" style={welcomeTextStyle}>I am a Software Engineer.</p>
                </div>
                <div>
                    <Stock/>
                </div>
            </div>
        </>
    )
};

export default Home;