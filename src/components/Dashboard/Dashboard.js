import { CgProfile } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { useSelector } from "react-redux";
import './Dashboard.css'
import { clickProfile } from "../../redux/reducers/dataReducer/dataReducer";
import { useState } from "react";


const Dashboard = () => {

    const name = useSelector((state) => state.data.userName);
    const email = useSelector((state) => state.data.email);
    const bio = useSelector((state) => state.data.bio)
    const profilePhoto = useSelector((state) => state.data.profilePhoto)

    const [activeOption, setActiveOption] = useState("profile");
    

    const handleClick = (option) => {
        setActiveOption(option);
    };


    return (
        <div className='dashboardContainer'>
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
            {/* <ul className='profileOptionsList'>
                <li className='profileOption' onClick={clickPro}>
                    <CgProfile className="profileIcons" />
                    <span className='options' id="test" value='mohammad'>Profile</span>
                </li>
                <li className='profileOption' onClick={clickNote}>
                    <GiNotebook className="profileIcons" />
                    <span className='options'>Notes</span>
                </li>
                <li className='profileOption' onClick={clickFavorite}>
                    <MdFavorite className="profileIcons"  />
                    <span className='options'>Favorite Coins</span>
                </li>
                <li className='profileOption' onClick={clickWall}>
                    <FaWallet className="profileIcons" />
                    <span className='options'>Wallet</span>
                </li>
                <li className='profileOption' onClick={clickTran}>
                    <AiOutlineTransaction className="profileIcons" />
                    <span className='options'>Transactions</span>
                </li>
            </ul> */}

            <ul className='profileOptionsList'>
                <li className={`profileOption ${activeOption === 'profile' && 'active'}`} onClick={() => handleClick('profile')}>
                    <CgProfile className="profileIcons" />
                    <span className='options'>Profile</span>
                </li>
                <li className={`profileOption ${activeOption === 'notes' && 'active'}`} onClick={() => handleClick('notes')}>
                    <GiNotebook className="profileIcons" />
                    <span className='options'>Notes</span>
                </li>
                <li className={`profileOption ${activeOption === 'favoriteCoins' && 'active'}`} onClick={() => handleClick('favoriteCoins')}>
                    <MdFavorite className="profileIcons" />
                    <span className='options'>Favorite Coins</span>
                </li>
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
    )
}

export default Dashboard