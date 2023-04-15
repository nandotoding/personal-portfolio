const ExperList = (props) => {
    return (
        <tr>
            <td>{props.data.role}</td>
            <td>{props.data.project}</td>
            <td>{props.data.owner}</td>
            <td>{props.data.tech}</td>
        </tr>
    )
};

export default ExperList;