const SkillList = (props) => {
    return (
        <div>
            <img src={props.skill.logo} height="100px"/>
            <p>{props.skill.name}</p>
        </div>
    )
};

export default SkillList;