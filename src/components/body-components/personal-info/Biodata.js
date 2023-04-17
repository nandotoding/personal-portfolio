import {bioTitleStyle, cardStyle} from "./style";
import BioList from "./BioList";

const Biodata = (props) => {
    return (
        <div className="m-2 p-2 card" style={cardStyle}>
            <div className="card-header text-center bg-transparent">
                <h6 style={bioTitleStyle}>Biodata</h6>
            </div>
            <div className="d-flex">
                <div className="card-body text-sm-start">
                    <BioList data={props.data}/>
                </div>
                <div>
                    <img src={props.photo.photo} className="rounded-circle p-2 m-1 me-2" height="110px" alt="Photo"/>
                </div>
            </div>
        </div>
    )
};

export default Biodata;