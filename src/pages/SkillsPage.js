import SkillGroup from "../components/body-components/skills/SkillGroup";
import {skillData} from "../data/skillData";
import {pageTitleStyle} from "./style";

const SkillsPage = () => {
    return (
        <>
            <div className="mt-3" style={pageTitleStyle}>
                <h6>Skills</h6>
            </div>
            <div>
                {skillData.map(sd => <SkillGroup skillData={sd}/>)}
            </div>
        </>
    )
};

export default SkillsPage;