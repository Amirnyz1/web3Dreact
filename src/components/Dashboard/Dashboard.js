import { CgProfile } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import './Dashboard.css'


const Dashboard = () => {
    return (
        <div className='dashboardContainer'>
            <div className='profileSection'>
                <div className='profileImgDiv'>
                    <img className='profileImg' src='./bitcoin.png' />
                </div>
                <div className='userNameEmailDiv'>
                    <span className='userNameSpan'>amirNyz1</span>
                    <span className='emailSpan'>amirrezaniyazi70@gmail.com</span>
                </div>
            </div>
            <ul className='profileOptionsList'>
                <li className='profileOption'>
                    <CgProfile className="profileIcons" />
                    <span className='options'>Profile</span>
                </li>
                <li className='profileOption'>
                    <GiNotebook className="profileIcons" />
                    <span className='options'>Notes</span>
                </li>
                <li className='profileOption'>
                    <MdFavorite className="profileIcons" />
                    <span className='options'>Favorite Coins</span>
                </li>
                <li className='profileOption'>
                    <FaWallet className="profileIcons" />
                    <span className='options'>Wallet</span>
                </li>
                <li className='profileOption'>
                    <AiOutlineTransaction className="profileIcons" />
                    <span className='options'>Transactions</span>
                </li>
            </ul>
        </div>
    )
}

export default Dashboard