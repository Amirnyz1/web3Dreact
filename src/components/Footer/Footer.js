import { FaTelegram } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import './Footer.css'


const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerMenuDiv'>
                <div className='footerLogoDiv'>
                    <img className='footerLogo' src='./logoImg2.png' />
                </div>
                <div className='footerMenu'>
                    <span className='menuOption'>Home</span>
                    <span className='menuOption'>Crypto Price</span>
                    <span className='menuOption'>Tweets</span>
                    <span className='menuOption'>NFT</span>
                </div>
                <div className='footerMenu'>
                    <span className='menuOption'>Notes</span>
                    <span className='menuOption'>Favorite Cryptos</span>
                    <span className='menuOption'>Wallet</span>
                    <span className='menuOption'>Profile</span>
                </div>

                <div className='footerEmailDiv1'>
                    <span className='footerEmailTxt'>Enter Your Email Address</span>
                    <div className='footerEmailDiv'>
                        <input type='email' name='footerEmailInput' placeholder='Email Address'  className="footerEmailInput"/>
                        <button className='footerBtn'>Send</button>
                    </div>
                </div>
            </div>
            <div className='footerLine'></div>
            <div className='footerSocialMediaDiv'>
                <span className='footerTxt'>ThemeREX © 2024. All rights reserved.</span>
                <div className="footerIconsDiv">
                    <FaTelegram className="footerIcon" />
                    <LuInstagram className="footerIcon" />
                    <FaLinkedinIn className="footerIcon" />
                    <TiSocialTwitter className="footerIcon" />
                </div>
            </div>
        </div>
    )
}

export default Footer