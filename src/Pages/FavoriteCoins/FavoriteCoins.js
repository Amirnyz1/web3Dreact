import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Dashboard from "../../components/Dashboard/Dashboard"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import "./FavoriteCoins.css"
import { useState, useRef, useEffect } from "react"
import { TiDeleteOutline } from "react-icons/ti";
import emailjs from 'emailjs-com';
import { addOrder, deleteOrder } from "../../redux/reducers/notesData/notesData"

const FavoriteCoins = () => {

  const coinDatas = useSelector((state) => state.noteD.coin)
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [coinNameValue, setCoinNameValue] = useState("");
  const dispatch = useDispatch()
  const orderDatas = useSelector((state) => state.noteD.ordersData)

  // Get coins data from Redux state
  const coinsData = useSelector((state) => state.data.coinsDatas);
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
  const [orderSended, setOrderSended] = useState(false)

  const handlePriceInput = (event) => {
    const { value } = event.target;
    setPriceValue(value);
    setLastValue(+priceValue)
  };

  function getValue() {
    setSubmitBtn(true);
    setRegisterBtn(false)
    setOrderD( {
      key : Date.now(),
      orderName: searchQuery,
      orderPrice: lastValue
    })
  }

  function getCoinName(item) {
    setSearchQuery(item.coinName)
  }

  function noSubmitOrder() {
    setSubmitBtn(false)
  }


  // Create a ref for the form
  const formRef = useRef();

  // Function to send the email
  const sendEmailProposal = (e) => {
    e.preventDefault();
    dispatch(addOrder({ order: orderD }))
    setSubmitBtn(false);
    setRegisterBtn(true)
  };



  useEffect(() => {
    // Call your function here whenever coinsData changes
    compareArrays(coinsData);
  }, [coinsData]);

  function compareArrays() {
    orderDatas.forEach((item1) => {
      coinsData.forEach((item2) => {
        if (item1.orderName === item2.coinName && item1.orderPrice === item2.price) {
          const serviceId = 'service_00mnpyn';
          const templateId = 'template_u592nuz';
          const userId = 'RodsZ_VftAF_0Cjb5';
          const testt = "amirreza"

          // Send the form data using emailjs
          console.log(formRef.current)
          emailjs
            .sendForm(serviceId, templateId, formRef.current, userId, testt) 
            .then(
              (result) => {
                console.log(result.text);
                // Optionally, reset the form after successful submission
                formRef.current.reset();
              },
              (error) => {
                console.log(error.text);
              }
            );
          console.log("senEmail")
          dispatch(deleteOrder({ key : item1.key }));
        } else {
          console.log("dont send email")
        }
      })
    })
  }


  function handleOrderDeleteIcon(key){
    dispatch(deleteOrder({ key }));
  }


  console.log(orderDatas)
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
                    <div className="favoriteCoin" key={item.key} >
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

            <form className="orderCount" ref={formRef} onSubmit={sendEmailProposal}>
              <div className="orderCoinNameDiv">
                <div className="ordersHeaderDiv">
                  <span className="orderCoinNameHeader">place your order</span>
                </div>
                <input
                  className="getOrderCoinName"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  name="coinName"
                />
                <ul className="searchUl">
                  {searchResults.map((item) => (
                    <li className="searchCoins" key={item.key} onClick={() => getCoinName(item)}>
                      <img className="searchCoinImg" src={`${item.coinName}.png`} />
                      {item.coinName}</li>
                  ))}
                </ul>
              </div>

              <div className="notifFrom" id="form" >
                <div className="orderPriceDiv">
                  <div className="ordersHeaderDiv">
                    <span className="orderPriceHeader">enter your desired price</span>
                  </div>
                  <input
                    className="getOrderPrice"
                    type="text"
                    disabled={disablePrice === true ? true : false}
                    name="orderPrice"
                    onChange={handlePriceInput} />
                </div>

                <div className="orderBtnDiv">
                  <button className={submitBtn ? "getOrderBtnNone" : "getOrderBtn"} type="button" onClick={getValue}>Register</button>
                  <span className={submitBtn ? "registerQ" : "getOrderBtnNone"}>Are you sure to place your order?</span>
                  <button className={submitBtn ? "regYesBtn" : "regYesBtnNone"} type="submit">Yes</button>
                  <button className={submitBtn ? "regNoBtn" : "regNoBtnNone"} type="button" onClick={noSubmitOrder}>NO</button>
                </div>
              </div>


            </form>

            <div className="ordersCount">

              <span className="ordersHeader">
                Your Orders
              </span>
              <div className="ordersDiv">
                {orderDatas.map((item) => {
                  return (
                    <div className={orderSended ? "sendedOrderDiv" : "orderDiv"}>
                    
                      <span className="orderCoinName">
                        {item.orderName}
                        <TiDeleteOutline className="orderDeleteIcon" onClick={()=> handleOrderDeleteIcon(item.key)} />
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




