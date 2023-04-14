import Biodata from "../components/body-components/personal-info/Biodata";
import Education from "../components/body-components/personal-info/Education";
import Contact from "../components/body-components/personal-info/Contact";

const PersonalInfo = () => {
    return (
        <div>
            <Biodata/>
            <Education/>
            <Contact/>
        </div>
    )
};

export default PersonalInfo;