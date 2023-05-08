import {experData} from "../data/experData";
import ExperTable from "../components/body-components/experiences/ExperTable";
import {pageTitleStyle} from "./style";

const ExperiencesPage = () => {
    return (
        <>
            <div className="mt-3" style={pageTitleStyle}>
                <h6>Project Experiences</h6>
            </div>
            <div>
                <ExperTable data={experData.reverse()}/>
            </div>
        </>
    )
};

export default ExperiencesPage;