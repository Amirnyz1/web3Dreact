import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Home.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { add, remove } from '../../redux/reducers/dataReducer/dataReducer';

function Home() {


    const servicesList = {
        "cryptoPrice": {
            "name": "crypto Price",
            "img": "./cryptoPriceImg.jpg",
            "description": "On this site, you can find out about the price and price changes of various cryptocurrencies.",
        },
        "tweets": {
            "name": "Tweets",
            "img": "./tweetImg.jpg",
            "description": "You can see the tweets shared about the Ethereum network and learn about updates and changes",
        },
        "nft": {
            "name": "NFT",
            "img": "./nftS.jpg",
            "description": "You can view and check all types of NFT collections along with their prices and details",
        },
        "saveCrypto": {
            "name": "Favorite Crypto",
            "img": "./saveCryptoImg.jpg",
            "description": "You can view all your digital assets in your profile and manage them.",
        },
        "wallet": {
            "name": "Crypto Wallet",
            "img": "./walletImg.jpg",
            "description": "You can view all your digital assets in your profile and manage them.",
        },
        "note": {
            "name": "Notes",
            "img": "./noteImg.jpg",
            "description": "You can make your own notes about tweets. Add transfers and... to your profile",
        },
    }

    const setServices = Object.keys(servicesList).map((key) => ({
        name: servicesList[key].name,
        img: servicesList[key].img,
        description: servicesList[key].description,
    }))

    const handleClick = (event) => {
        setInputValue(event.target.value)
    }

    const clikcBtn = () => {
        console.log(inputValue)
    }
    const [inputValue, setInputValue] = useState("")

    return (
        <div className='homeContainer'>
            <Header />

            <div className='homeDiv1'>
                <div className='homeImgDiv'>
                    <img className='homeImg' src='./ethereumImg.jpg' />
                    <img className='homeImg ll' src='nftImg.jpg' />
                </div>

                <div className='homeDesBtnDiv'>
                    <div className='txtDiv1'>
                        <span className='desTxt1'>
                            This website was created to provide web3 and blockchain services.
                            You can also use this website for transfers and blockchain news and digital currencies.
                            Click the button for more details.
                        </span>
                    </div>

                    <div className='desBtnDiv'>
                        <Button variant="success" className='detailsBtn'>Details</Button>
                    </div>
                </div>

            </div>

            <div className='servicesDiv'>
                <h1 className='servicesHeadTxt'>Our Services</h1>
                <div className='services'>
                    {setServices.map((item) => {
                        return (
                            <div className='sevice'>
                                <div className='serviceImgDiv'>
                                    <img className='serviceImg' src={item.img} />
                                </div>
                                <div className='serviceDesDiv'>
                                    <h1 className='serviceDesHeader'>{item.name}</h1>
                                    <span className='serviceDes'>
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home