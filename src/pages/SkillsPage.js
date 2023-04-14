import SkillGroup from "../components/body-components/skills/SkillGroup";
import {skillData} from "../data/skillData";

const SkillsPage = () => {
    return (
        <>
            {skillData.map(sd => <SkillGroup skillData={sd}/>)}
        </>
    )
};

export default SkillsPage;