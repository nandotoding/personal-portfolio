import Biodata from "../components/body-components/personal-info/Biodata";
import Education from "../components/body-components/personal-info/Education";
import Contact from "../components/body-components/personal-info/Contact";
import {pageTitleStyle} from "./style";
import {bioData, contData, photoData} from "../data/bioData";

const PersonalInfo = () => {
    return (
        <>
            <div className="mt-3" style={pageTitleStyle}>
                <h6>Biographical Data</h6>
            </div>
            <div style={{fontSize: '12px'}}>
                <Biodata data={bioData} photo={photoData}/>
                <Education/>
                <Contact data={contData}/>
            </div>
        </>
    )
};

export default PersonalInfo;