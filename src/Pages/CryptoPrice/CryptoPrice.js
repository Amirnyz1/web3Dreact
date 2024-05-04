import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaHashtag } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import axios from 'axios';
import './CryptoPrice.css'
import { useEffect, useState } from 'react';
import { UseDispatch, useDispatch } from "react-redux";
import { addCoin } from "../../redux/reducers/notesData/notesData";
import { coinsD } from "../../redux/reducers/dataReducer/dataReducer";

function CryptoPrice() {


    const [coinsData, setCoinsData] = useState([]);
    const [sortingMode, setSortingMode] = useState(1); // Default sorting mode

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Csolana%2Cxrp%2Ccardano%2Cdogecoin%2Ctron%2Cpolkadot%2Cpolygon%2Clitecoin%2Cdai%2Cbnb%2Cusdc%2Ckaspa%2Ccelestia%2Cstellar%2Captos%2Chedera%2Carbitrum%2Ccronos%2Cmenero%2Csui%2Cmaker%2Crender%2Csei%2Calgorand%2Cmina%2Chelium%2Caave%2Cflow%2Cfantom%2Castar%2Cflare%2Ctezos%2C%2Cchiliz%2Cdecentraland%2Cbonk%2Cneo%2Ceos%2Cronin%2Cosmosis%2Cblur%2Ckava%2Cklaytn%2Cpendle%2Cwoo%2Cjupiter%2Cgala%2Cgnosis%2Caxelar%2Cpancakeswap%2Carweave&vs_currencies=usd&include_market_cap=true&include_24hr_vol=treu&include_24hr_change=true&include_last_updated_at=true', { timeout: 5000 })
            .then((response) => {
                if (response.data) {
                    // Initial sorting based on USD value
                    const sortedData = sortData(response.data, sortingMode);
                    setCoinsData(sortedData);
                } else {
                    console.log('Data not found');
                }
            })
            .catch((error) => {
                console.error('Error fetching data from CoinGecko API:', error);
            });
    }, [sortingMode]);

    function setBtnNum(btnNum) {
        setSortingMode(btnNum);
    }

   


    function sortData(data, mode) {
        const coinsArray = Object.entries(data);
        if (mode === 1) {
            // Sort the array based on USD value
            coinsArray.sort((a, b) => b[1].usd - a[1].usd);
        } else if (mode === 2) {
            coinsArray.sort((a, b) => b[1].usd_24h_change - a[1].usd_24h_change);
        } else if (mode === 3) {
            coinsArray.sort((a, b) => b[1].usd_market_cap - a[1].usd_market_cap);
        }

        // Convert the sorted array back to an object
        return Object.fromEntries(coinsArray);
    }

    

    const setApi = Object.keys(coinsData).map((key, index) => {
        const price = coinsData[key].usd;
        const marketCap = coinsData[key].usd_market_cap;
        const changeP = coinsData[key].usd_24h_change?.toFixed(3);
        return {
            coinNum: index + 1,
            coinName: key,
            price: price,
            marketCap: marketCap.toFixed(0),
            changeP: changeP,
        };
    }); 


    const dispatch = useDispatch();

    function clickCoinStar(item) {
        dispatch(addCoin({
            coin: {
                key: Date.now(),
                coinName: item.coinName,
                price: item.price,
                changeP: item.changeP,
                marketCap: item.marketCap
            }
        }))
    }




   

    useEffect(()=>{
        dispatch(coinsD({ coinsDatas: setApi }))
    })








    return (
        <div className='priceContainer'>
            <Header />
            <div className='priceDiv'>
                <div className='priceHeaderDiv'>
                    <h1 className='priceHeader'>The price of cryptocurrencies</h1>
                    <span className='priceDes'>
                        Here you can see the price and price changes and other information of cryptocurrencies
                    </span>
                </div>

                <div className='selectPriceShowType'>
                    <label className='optionLable'>
                        <button className={sortingMode === 1 ? 'priceBtnActive' : 'selectBtn'} value='1' onClick={() => setBtnNum(1)}>Price</button>
                    </label>

                    <label className='optionLable'>
                        <button className={sortingMode === 2 ? 'changeBtnActive' : 'selectBtn'} value='2' onClick={() => setBtnNum(2)}>24h Changes</button>
                    </label>

                    <label className='optionLable'>
                        <button className={sortingMode === 3 ? 'marketBtnActive' : 'selectBtn'} value='3' onClick={() => setBtnNum(3)}>MarketCap</button>
                    </label>
                </div>

                <div className='priceBoxDiv'>

                    <div className='priceBox'>
                        <div className='pricesHeaderDiv'>
                            <div className='hashtagNameDiv'>
                                <div className='nullDiv'></div>
                                <div className='hashtagNameDiv2'>
                                    <div className='hashtagIconDiv'>
                                        <FaHashtag className='hashtagIcon' />
                                    </div>
                                    <span className='HeaderName'>Name</span>
                                </div>
                            </div>
                            <div className='price24ChangeDiv'>
                                <span className='HeaderName'>Price</span>
                                <span className='HeaderName'>24h Changes</span>
                                <span className='HeaderName'>Market Cap</span>
                            </div>
                        </div>
                        {setApi.map((item) => {
                            return (

                                <div className='coinBox' key={item.coinName}>
                                    <div className='iconNameDiv'>
                                        <div className='starIconDiv'>
                                            <CiStar className='starIcon' onClick={() => clickCoinStar(item)} />
                                        </div>
                                        <div className='coinNumNameDiv'>
                                            <span className='coinNum'>{item.coinNum}</span>
                                            <div className='logoNameDiv'>
                                                <img className='coinLogo' src={`${item.coinName}.png`} />
                                                <span className='coinName'>{item.coinName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='coinPricesDiv'>
                                        <span className='prices'>{item.price}</span>
                                        <span className={item.changeP < 0 ? 'changeDown' : 'changeUp'}>{`%${item.changeP}`}</span>
                                        <span className='prices'>{item.marketCap}</span>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CryptoPrice





/*
1 : تابع entries : برای تبدیل یک متغیر به یک متغیر آرایه است
let test = {

        bitcoin: { usd: 125675, market: 878698 },
        tether: { usd: 125675, market: 878698 },
        ethereum: { usd: 125675, market: 878698 },
        dogecoin: { usd: 125675, market: 878698 },

    }

مثلا این متغیر را تبدیل به آرایه میکنه 
یعنی آبجکت اولی حذف خواهد شد و تمام چهارتا داده داخل آرایع قرار خواهند گرفت و همچنین هر یک از آن چهار تا هم یک آرایه خواهند شد که دوتا ایندکس خواهند داشت که یکیش همان کلید ها خواهد بود  مثل بیتکوین و تتر و ... یکی هم آبجکت داخل آنها خواهد بود.

*/

