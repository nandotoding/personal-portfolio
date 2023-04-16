import StockList from "./StockList";
import {pageTitleStyle} from "../../../pages/style";

const Stock = (props) => {
    return (
        <div className="m-2 card" style={{backgroundColor: '#cef7f7'}}>
            <div className="mt-3 card-header bg-transparent" style={pageTitleStyle}>
                <h6> Realtime Stock Prices</h6>
            </div>
            <div className="d-flex m-2 row">
                {props.data.map(d => <StockList data={d} imgs={props.imgs}/>)}
            </div>
            <div className="card-footer text-end">
                <p style={{fontSize: '8pt', fontStyle: 'italic'}}>Source: <a href="https://stockdata.org/" target="_blank" style={{textDecoration: 'none', color: 'blue'}}>stockdata.org</a> public API</p>
            </div>
        </div>
    )
};

export default Stock;