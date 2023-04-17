import SkillList from "./SkillList";
import {cardStyle, groupNameStyle} from "./style";

const SkillGroup = (props) => {
    return (
        <div className="m-2 p-3 card" style={cardStyle}>
            <div className="card-header text-center bg-transparent">
                <h5 style={groupNameStyle}>{props.skillData.groupName}</h5>
            </div>
            <div className="card-body row">
                {props.skillData.skillList.map(sl => <SkillList skill={sl}/>)}
            </div>
        </div>
    )
};

export default SkillGroup;