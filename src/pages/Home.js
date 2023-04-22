import Stock from "../components/body-components/home/Stock";
import {useEffect, useState} from "react";
import {stockData} from "../data/stockData";
import HomeCarousel from "../components/body-components/home/HomeCarousel";
import {crslData} from "../data/crslData";
import {homeStyle} from "./style";
import Welcome from "../components/body-components/home/Welcome";
import {welcomeData} from "../data/welcomeData";

const apiToken = process.env.REACT_APP_API_TOKEN;

const Home = () => {
    const [stock, setStock] = useState([]);

    const url = `https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=${apiToken}`;

    const handleGetStock = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data.data));
    };

    useEffect(() => {
        handleGetStock();
        // handleGetCrypto();
    }, []);

    return (
        <>
            <div style={homeStyle}>
                <div>
                    <HomeCarousel data={crslData}/>
                <div>
                    <Welcome data={welcomeData}/>
                </div>
                    <Stock data={stock} imgs={stockData}/>
                </div>
            </div>
        </>
    )
};

export default Home;