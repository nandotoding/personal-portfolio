import {bioTitleStyle} from "./style";
import BioList from "./BioList";

const Biodata = (props) => {
    return (
        <div className="m-2 p-2 card">
            <div className="card-header text-center">
                <h6 style={bioTitleStyle}>Biodata</h6>
            </div>
            <div className="card-body text-sm-start">
                <BioList data={props.data}/>
            </div>
        </div>
    )
};

export default Biodata;