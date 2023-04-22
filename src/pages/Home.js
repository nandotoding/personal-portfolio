import Stock from "../components/body-components/home/Stock";
import {useEffect, useState} from "react";
import {stockData} from "../data/stockData";
import HomeCarousel from "../components/body-components/home/HomeCarousel";
import {crslData} from "../data/crslData";
import {homeStyle} from "./style";

const apiToken = process.env.REACT_APP_API_TOKEN;

const Home = () => {
    const [stock, setStock] = useState([]);
    // const [crypto, setCrypto] = useState({});

    // const url = `https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=${apiToken}`;
    const url = 'http://localhost:8080';

    // const cryptoApiUrl = url + '/crypto';

    const handleGetStock = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data.data));
    };

    // const handleGetCrypto = () => {
    //     fetch(cryptoApiUrl)
    //         .then(res => res.json())
    //         .then(data => setCrypto(data));
    // };

    useEffect(() => {
        handleGetStock();
        // handleGetCrypto();
    }, []);

    return (
        <>
            <div style={homeStyle}>
                <div>
                    <HomeCarousel data={crslData}/>
                </div>
                <div>
                    <Stock data={stock} imgs={stockData}/>
                </div>
            </div>
        </>
    )
};

export default Home;