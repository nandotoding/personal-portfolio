import {useEffect, useState} from "react";
import StockList from "./StockList";
import {bioTitleStyle} from "../personal-info/style";
import {pageTitleStyle} from "../../../pages/style";

const Stock = (props) => {
    const [stock, setStock] = useState([]);

    // const API_TOKEN = 'ZFIhll1tlSRqfpsO62GhqEQwYUF2eGV1i3Bl35eT';
    // const url = `https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=${API_TOKEN}`;

    const url = 'http://localhost:8080';

    const handleGetStock = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data.data));
        console.log(stock[0]);
    };

    useEffect(() => {
        handleGetStock();
    }, []);

    return (
        <div className="m-2 card">
            <div className="mt-1" style={pageTitleStyle}>
                <h6>Stock Prices</h6>
            </div>
            <StockList data={stock}/>
        </div>
    )
};

export default Stock;