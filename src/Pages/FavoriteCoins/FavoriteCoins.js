import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Dashboard from "../../components/Dashboard/Dashboard"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import "./FavoriteCoins.css"
import { useState } from "react"
import { addOrder } from "../../redux/reducers/notesData/notesData"

const FavoriteCoins = () => {

  const coinDatas = useSelector((state) => state.noteD.coin)
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [coinNameValue, setCoinNameValue] = useState("");
  const dispatch = useDispatch()
  const orderDatas = useSelector((state) => state.noteD.ordersData)

  // Get coins data from Redux state
  const coinsData = useSelector((state) => state.data.coinsDatas);
  console.log(coinsData)
  // Function to handle search input change 
  
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Filter data based on search query
    if (Array.isArray(coinsData)) {
      const filteredResults = coinsData.filter((coin) =>
        coin.coinName && typeof coin.coinName === 'string' &&
        coin.coinName.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }

    if (value === "") {
      setSearchResults([])
    }

  };

  const [disablePrice, setDisablePrice] = useState(false);
  const [priceValue, setPriceValue] = useState("");
  const [lastValue, setLastValue] = useState()
  const [submitBtn, setSubmitBtn] = useState(false);
  const [registerBtn, setRegisterBtn] = useState(true);
  const [orderD, setOrderD] = useState([])

  const handlePriceInput = (event) => {
    const { value } = event.target;
    setPriceValue(value);
    setLastValue(parseFloat(priceValue))
  };

  function getValue() {
    setSubmitBtn(true);
    setRegisterBtn(false)
    setOrderD(prevOrder => [...prevOrder, {
      orderName: searchQuery,
      orderPrice: priceValue
    }])
  }

  function getDatas(e) {
    e.preventDefault();
    dispatch(addOrder({ order: orderD }))
    setSubmitBtn(false);
    setRegisterBtn(true)
  }

  function getCoinName(item) {
    setSearchQuery(item.coinName)
  }

  function noSubmitOrder() {
    setSubmitBtn(false)
  }


  return (
    <>
      <div className="favoriteCoontainer">
        <Header />
        <div className="favoriteCount">
          <span className="favoriteHeaderDes">
            In this section, you can save your favorite coins and you can also register a notification order for any coin you like based on price or market cap or price changes.
          </span>

          <div className="favoriteOrderDiv">
            <div className="favoriteCoinsDiv">
              <span className="favoriteHeaderSpan">
                Your Favorite Coins
              </span>
              <div className="favoriteCoins">
                <div className="favoriteCoinsHeader">
                  <span className="favoriteHeaderPrice">Name</span>
                  <div className="favoriteHeaderDiv">
                    <span className="favoriteHeaderPrice">Price</span>
                    <span className="favoriteHeaderElement">24h Changes</span>
                    <span className="favoriteHeaderElement">Market Cap</span>
                  </div>
                </div>
                {coinDatas.map((item) => {
                  return (
                    <div className="favoriteCoin" key={item.key}>
                      <div className="favoriteCoinNameDiv">
                        <img className="favoriteCoinImg" src={`${item.coinName}.png`} />
                        <span className="favoriteHeaderPrice">{item.coinName}</span>
                      </div>
                      <div className="favoriteCoinNumbers">
                        <span className="favoriteCoinPrice">{item.price}</span>
                        <span className="favoriteCoinChange">%{item.changeP}</span>
                        <span className="favoriteCoinMarket">{item.marketCap}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="orderCount">
              <div className="orderCoinNameDiv">
                <div className="ordersHeaderDiv">
                  <span className="orderCoinNameHeader">place your order</span>
                </div>
                <input
                  className="getOrderCoinName"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <ul className="searchUl">
                  {searchResults.map((item) => (
                    <li className="searchCoins" key={item.key} onClick={() => getCoinName(item)}>
                      <img className="searchCoinImg" src={`${item.coinName}.png`} />
                      {item.coinName}</li>
                  ))}
                </ul>
              </div>

              <form className="notifFrom" id="form" onSubmit={getDatas}>
                <div className="orderPriceDiv">
                  <div className="ordersHeaderDiv">
                    <span className="orderPriceHeader">enter your desired price</span>
                  </div>
                  <input
                    className="getOrderPrice"
                    type="text"
                    disabled={disablePrice === true ? true : false}
                    onChange={handlePriceInput} />
                </div>





                <div className="orderBtnDiv">
                  <button className={submitBtn ? "getOrderBtnNone" : "getOrderBtn"} type="button" onClick={getValue}>Register</button>
                  <span className={submitBtn ? "registerQ" : "getOrderBtnNone"}>Are you sure to place your order?</span>
                  <button className={submitBtn ? "regYesBtn" : "regYesBtnNone"} type="submit">Yes</button>
                  <button className={submitBtn ? "regNoBtn" : "regNoBtnNone"} type="button" onClick={noSubmitOrder}>NO</button>
                </div>
              </form>


            </div>

            <div className="ordersCount">

              <span className="ordersHeader">
                Your Orders
              </span>
              <div className="ordersDiv">
                {orderDatas.map((item) => {
                  return (
                    <div className="orderDiv">
                      <span className="orderCoinName">
                        {item.orderName}
                      </span>
                      <span className="orderDes">
                        price : {item.orderPrice}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default FavoriteCoins




/*
import React, { useState } from 'react';

function CoinForm() {
  const [coins, setCoins] = useState([
    {
      name: "bitcoin",
      usd: 3309457,
      market: 930675340,
      Changes: 9057349856
    },
    {
      name: "ethereum",
      usd: 3309457,
      market: 930675340,
      Changes: 9057349856
    },
    {
      name: "tether",
      usd: 3309457,
      market: 930675340,
      Changes: 9057349856
    },
    {
      name: "bnb",
      usd: 3309457,
      market: 930675340,
      Changes: 9057349856
    }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newCoins = [...coins];
    newCoins[index][name] = value;
    setCoins(newCoins);
  };

  return (
    <div>
      {coins.map((coin, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Enter coin name"
            value={coin.name}
            onChange={(e) => handleInputChange(index, e)}
          />
          <p>USD: {coin.usd}</p>
          <p>Market: {coin.market}</p>
          <p>Changes: {coin.Changes}</p>
        </div>
      ))}
    </div>
  );
}

export default CoinForm;

*/