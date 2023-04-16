const StockList = (props) => {
    return (
        <>
            <div className="col-sm-4 mb-1">
                <div className="d-flex">
                    <div>
                        <p className="m-0" style={{fontSize: '12pt'}}>{props.data.ticker}</p>
                        <h6 style={{fontSize: '20pt'}}>{props.data.price}</h6>
                    </div>
                    <div>

                    </div>
                </div>
                <p style={{fontSize: '10pt'}}><img src={props.imgs[props.data.ticker]} alt={props.data.ticker} height="20px"/> {props.data.name}</p>
                <div style={{fontSize: '9pt'}}>
                    <table className="table">
                        <tr>
                            <td>Curr.</td>
                            <td>{props.data.currency}</td>
                        </tr>
                        <tr>
                            <td>High</td>
                            <td>{props.data.day_high}</td>
                        </tr>
                        <tr>
                            <td>Low</td>
                            <td>{props.data.day_low}</td>
                        </tr>
                        <tr>
                            <td>Chg.</td>
                            <td>{props.data.day_change}</td>
                        </tr>
                        <tr>
                            <td>Vol.</td>
                            <td>{props.data.volume}</td>
                        </tr>
                        <tr>
                            <td>Last Trade</td>
                            <td>{props.data.last_trade_time.slice(0, 10)}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
};

export default StockList;