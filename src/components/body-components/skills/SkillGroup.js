import SkillList from "./SkillList";

const SkillGroup = (props) => {
    return (
        <div>
            <h5>{props.skillData.groupName}</h5>
            {props.skillData.skillList.map(sl => <SkillList skill={sl}/>)}
        </div>
    )
};

export default SkillGroup;