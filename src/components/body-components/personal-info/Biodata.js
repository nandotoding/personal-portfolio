const Biodata = () => {
    return (
        <div className="m-2 p-2 card">
            <div className="card-header text-center">
                <h6>Biodata</h6>
            </div>
            <div className="card-body text-sm-start">
                <table className="table table-bordered">
                    <tr>
                        <td>Full Name</td>
                        <td>Fernando Toding Bua</td>
                    </tr>
                    <tr>
                        <td>Nickname</td>
                        <td>Nando</td>
                    </tr>
                    <tr>
                        <td>Birth Date</td>
                        <td>27<sup>th</sup> November 1999</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Pancoran, South Jakarta, Jakarta</td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default Biodata;