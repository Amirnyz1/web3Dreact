import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import './Header.css'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clickProfile } from '../../redux/reducers/dataReducer/dataReducer';
import { GiNotebook } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { useState } from 'react';



const Header = () => {

    const [isblock, setIsBlock] = useState(false)


    function menuClick() {
        setIsBlock(!isblock)
    }
    const dataList = useSelector((state) => state.data.isLoggedIn);



    const [testPro, setTestPro] = useState(false)
    function clickProTest() {
        setTestPro(!testPro)
    }


    const name = useSelector((state) => state.data.userName);
    const email = useSelector((state) => state.data.email);
    const bio = useSelector((state) => state.data.bio)
    const profilePhoto = useSelector((state) => state.data.profilePhoto)

    const [activeOption, setActiveOption] = useState("profile");


    const handleClick = (option) => {
        setActiveOption(option);
    };


    return (
        <div className='headerContainer'>
            <div className='logoDiv'>
                <img className='logoImg' src='./logoImg.png' alt='HeaderLogo' />
            </div>

            <div className='headerOptionsDiv'>
                <Link to='/'>
                    <span className='option'>Home</span>
                </Link>
                <span className='option'>AboutUs</span>
                <Link to='/cryptoPrice'>
                    <span className='option'>Crypto Price</span>
                </Link>

                <span className='option'>tweets</span>
            </div>
            <div className='headerBtnDiv'>
                <Link to='/LoginPage' className={dataList ? 'noneBtn' : 'blockBtn'}>
                    <Button variant="success" className='loginBtn'>Login / Sing In</Button>
                </Link>

                <CgProfile className={dataList ? 'blockIcon' : 'noneIcon'} onClick={clickProTest} />

            </div>

            <div className='headerResponsiveDiv'>
                <label className="hamburger">
                    <input type="checkbox" onClick={menuClick} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>

            <div className='responsiveMenuDiv'
                style={{ display: isblock ? 'block' : 'none' }}
            >
                <ul className='responsiveMenuList'>
                    <li className='responsiveOption'>Home</li>
                    <li className='responsiveOption'>AboutUs</li>
                    <li className='responsiveOption'>Crypto Price</li>
                    <li className='responsiveOption'>tweets</li>
                    <li className='responsiveOptionL'>Login</li>
                    <li className='responsiveOptionS'>Sign In</li>
                </ul>
            </div>






            <div className={`dashboardContainer ${testPro ? "open" : ""}`}>
                <div className='profileSection'>
                    <div className="proUserNameDiv">
                        <div className='profileImgDiv'>
                            <img className='profileImg' src={profilePhoto} />
                        </div>
                        <div className='userNameEmailDiv'>
                            <span className='userNameSpan'>{name}</span>
                            <span className='emailSpan'>{email}</span>
                        </div>
                    </div>
                    <div className="bioDiv">
                        <span className="bioSpan">{bio}</span>
                    </div>
                </div>

                <ul className='profileOptionsList'>
                    <Link to="/Profile">
                        <li className={`profileOption ${activeOption === 'profile' && 'active'}`} onClick={() => handleClick('profile')}>
                            <CgProfile className="profileIcons" />
                            <span className='options'>Profile</span>
                        </li>
                    </Link>
                    <Link to="/Notes">
                        <li className={`profileOption ${activeOption === 'notes' && 'active'}`} onClick={() => handleClick('notes')}>
                            <GiNotebook className="profileIcons" />
                            <span className='options'>Notes</span>
                        </li>
                    </Link>
                    <Link to='/FavoriteCoins'>
                        <li className={`profileOption ${activeOption === 'favoriteCoins' && 'active'}`} onClick={() => handleClick('favoriteCoins')}>
                            <MdFavorite className="profileIcons" />
                            <span className='options'>Favorite Coins</span>
                        </li>
                    </Link>
                    <li className={`profileOption ${activeOption === 'wallet' && 'active'}`} onClick={() => handleClick('wallet')}>
                        <FaWallet className="profileIcons" />
                        <span className='options'>Wallet</span>
                    </li>
                    <li className={`profileOption ${activeOption === 'transactions' && 'active'}`} onClick={() => handleClick('transactions')}>
                        <AiOutlineTransaction className="profileIcons" />
                        <span className='options'>Transactions</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header