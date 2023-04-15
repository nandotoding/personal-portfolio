const BioList = (props) => {
    return (
        <>
            <table className="table">
                {props.data.map(d => {
                    return (
                        <tr>
                            <td>{d.attribute}</td>
                            <td>:</td>
                            <td>{d.record}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
};

export default BioList;