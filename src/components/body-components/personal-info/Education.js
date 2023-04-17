import {bioTitleStyle, cardStyle} from "./style";

const Education = () => {
    return (
        <div className="m-2 p-2 card" style={cardStyle}>
            <div className="card-header text-center bg-transparent">
                <h6 style={bioTitleStyle}>Education</h6>
            </div>
            <div className="card-body text-center">
                <p>
                    Bachelor's degree in Mathematics, Hasanuddin University
                </p>
            </div>
        </div>
    )
};

export default Education;