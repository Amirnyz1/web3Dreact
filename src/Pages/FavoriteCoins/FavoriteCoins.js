import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Dashboard from "../../components/Dashboard/Dashboard"
import { UseSelector, useSelector } from "react-redux"
import "./FavoriteCoins.css"
import { useState } from "react"

const FavoriteCoins = () => {

  const coinDatas = useSelector((state) => state.noteD.coin)
  const coinsD = useSelector((state) => state.data.coinsDatas)


  // console.log(coinDatas)


  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  
    // Ensure dataaa is not undefined before filtering
    if (Array.isArray(coinsD)) {
      // Filter dataaa based on search query
      const filteredResults = coinsD.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      // Handle case where dataaa is not an array
      setSearchResults([]);
    }
  };





  const [disablePrice, setDisablePrice] = useState(false);
  const [disableMarket, setDisableMarket] = useState(false);
  const [disableChange, setDisableChange] = useState(false);
  const [coinNameValue, setCoinNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [marketCapValue, setMarketCapValue] = useState("");
  const [changeValue, setChangeValue] = useState("");
  const [lastValue, setLastValue] = useState()

  const handlePriceInput = (event) => {
    const { value } = event.target;
    setPriceValue(value);
    setLastValue(value)


    if (value === "") {
      setDisableMarket(false);
      setDisableChange(false);
    } else {
      setDisableMarket(true);
      setDisableChange(true);
    }
  };

  const handleMarketInput = (event) => {
    const { value } = event.target;
    setMarketCapValue(value);
    setLastValue(value)

    if (value === "") {
      setDisablePrice(false);
      setDisableChange(false);
    } else {
      setDisablePrice(true);
      setDisableChange(true);
    }
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setChangeValue(value);
    setLastValue(value)

    if (value === "") {
      setDisablePrice(false);
      setDisableMarket(false);
    } else {
      setDisablePrice(true);
      setDisableMarket(true);
    }
  };

  console.log(priceValue)


  function getValue() {
    console.log(lastValue)
  }


  function getDatas() {

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
                  onChange={handleSearchChange} />
                <ul className="searchUl">
                  {searchResults.map((item) => {
                    return (
                      <>
                        <li key={item.key}>{item.name}</li>
                      </>
                    )
                  })}
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

                <div className="orderPriceDiv">
                  <div className="ordersHeaderDiv">
                    <span className="orderPriceHeader">enter your desired market cap</span>
                  </div>
                  <input
                    className="getOrderPrice"
                    type="text"
                    disabled={disableMarket === true ? true : false}
                    onChange={handleMarketInput} />
                </div>

                <div className="orderPriceDiv">
                  <div className="ordersHeaderDiv">
                    <span className="orderPriceHeader">enter your desired change</span>
                  </div>
                  <input
                    className="getOrderPrice"
                    type="text"
                    disabled={disableChange === true ? true : false}
                    onChange={handleChangeInput} />
                </div>

                <div className="orderBtnDiv">
                  <button className="getOrderBtn" type="submit" onClick={getValue}>Register</button>
                </div>
              </form>


            </div>

            <div className="ordersCount">
              <span className="ordersHeader">
                Your Orders
              </span>
              <div className="ordersDiv">
                <div className="orderDiv">
                  <span className="orderCoinName">
                    ethereum
                  </span>
                  <span className="orderDes">
                    Market Cap : 235634563736745676
                  </span>
                </div>
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