import ExperList from "./ExperList";
import {tBodyStyle, tHeadStyle} from "./style";

const ExperTable = (props) => {
    return (
        <div className="card m-2">
            <table className="table table-striped">
                <thead style={tHeadStyle}>
                    <tr>
                        <th>Role</th>
                        <th>Project Name</th>
                        <th>Project Owner</th>
                        <th>Technologies Used</th>
                    </tr>
                </thead>
                <tbody style={tBodyStyle}>
                    {props.data.map(d => <ExperList data={d}/>)}
                </tbody>
            </table>
        </div>
    )
};

export default ExperTable;