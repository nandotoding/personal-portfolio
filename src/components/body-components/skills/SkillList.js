import {skillNameStyle} from "./style";

const SkillList = (props) => {
    return (
        <div className="col-sm-2 text-center">
            <img src={props.skill.logo} height="60px"/>
            <p className="mt-2" style={skillNameStyle}>{props.skill.name}</p>
        </div>
    )
};

export default SkillList;