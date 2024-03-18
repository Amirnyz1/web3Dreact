import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Lottie from 'lottie-react'
import animationData from './Animation - 1710081419916.json'
import animationPro from './Animation - 1710091078475.json'
import loginSuccess from './Animation - 1710770591815.json'
import { useDispatch, useSelector } from "react-redux";
import { add } from '../../redux/reducers/dataReducer/dataReducer'
import { useRef, useEffect, useState } from 'react'

import './LoginPage.css'

const LoginPage = () => {


    const [animationList, setAnimationList] = useState([false, false, false, false]);

    useEffect(() => {
        // Trigger the animations one by one with delays
        setTimeout(() => setAnimationList(prevState => [...prevState.slice(0, 1), true, ...prevState.slice(1)]), 1000);
        setTimeout(() => setAnimationList(prevState => [...prevState.slice(0, 2), true, ...prevState.slice(2)]), 1500);
        setTimeout(() => setAnimationList(prevState => [...prevState.slice(0, 3), true, ...prevState.slice(3)]), 2000);
        setTimeout(() => setAnimationList(prevState => [...prevState.slice(0, 4), true]), 2500);
    }, []);

    const [btnClassName, setBtnClassName] = useState(false)

    const btnClick = () => {
        setBtnClassName(!btnClassName)
    }

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userNameSpan, setUserNameSpan] = useState(true)
    const [emailSpan, setEmailSpan] = useState(true)
    const [passwordSpan, setPasswordSpan] = useState(true)
    const [loginTest , setLoginTest] = useState(false)

    const userNameRegex = /^[a-z0-9_-]{3,15}$/;
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const passwordRegex = /^[a-z0-9_-]{3,15}$/; // Add your password regex


    const dispatch = useDispatch(); // Bring dispatch into scope

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const isValidUserName = userNameRegex.test(userName);
        const isValidEmail = emailRegex.test(email);
        const isValidPassword = passwordRegex.test(password);

        if (!isValidUserName) {
            console.log('Invalid username');
            setUserNameSpan(false)
        } else {
            setUserNameSpan(true)
        }

        if (!isValidEmail) {
            console.log('Invalid email');
            setEmailSpan(false)
        } else {
            setEmailSpan(true)
        }

        if (!isValidPassword) {
            console.log('Invalid password');
            setPasswordSpan(false)
        } else {
            setPasswordSpan(true)
        }

        if (!isValidUserName || !isValidEmail) {
            dispatch(add({ isLoggedIn: false }))
            setLoginTest(false)
        } else {
            dispatch(add({ isLoggedIn: true, userName: userName, email: email }))
            setLoginTest(true)
        }
    };


    const dataList = useSelector((state) => state.data.userName);


    return (
        <div className='loginContainer'>
            <Header />
            <div className='loginMain'>
                <h2 className='loginHeader'>Login / Sign In</h2>
                <div className='loginDesDiv'>
                    <div className='animationDiv'>
                        <Lottie className='animation' loop={false} animationData={animationData} />
                    </div>
                    <div className='loginDescriptions'>
                        <h4 className='loginDes'>By joining us, all the below options will be available for you.</h4>
                        <ul className='animated-text-container'>
                            <li className={`animated-text ${animationList[1] ? 'slide-in' : ''}`}>Access to digital wallet</li>
                            <li className={`animated-text ${animationList[2] ? 'slide-in' : ''}`}>Making transfers and wallet management</li>
                            <li className={`animated-text ${animationList[3] ? 'slide-in' : ''}`}>Save the desired digital currencies in the profile</li>
                            <li className={`animated-text ${animationList[4] ? 'slide-in' : ''}`}>Write a note</li>
                        </ul>
                    </div>
                </div>
                <div className='loginDiv'>
                    <div className={loginTest ? 'loginSuccess' : 'loginNotSucces'}>
                        <Lottie animationData={loginSuccess} className='loginSuccessAnimation' />
                        <span className='animationTxt'>Logged In</span>
                    </div>
                    <div className={loginTest ? 'formNone' : 'formBlock'}>
                        <div className='logSignBtnsDiv'>
                            <button className={btnClassName === false ? 'loginSelect' : 'notLoginSelect'} onClick={btnClick}>Login</button>
                            <button className={btnClassName === true ? 'signInSelect' : 'notSignInSelect'} onClick={btnClick}>Sign In</button>
                        </div>
                        <div className='loginSignImgDiv'>
                            <Lottie animationData={animationPro} className='profileAnim' />
                            <span className='animationTxt'>Login</span>
                        </div>
                        <form className={btnClassName === false ? 'loginForm' : 'notLoginForm'} id='form' onSubmit={handleFormSubmit}>
                            <div className='inputsDiv'>
                                <input type='text' className='textInput' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Username' />
                                <span className={userNameSpan === false ? 'userNameFalse' : 'userNameTrue'}>Please enter the correct amount</span>
                            </div>
                            <div className='inputsDiv'>
                                <input type='text' className='textInput' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                <span className={emailSpan === false ? 'emailFalse' : 'emailTrue'}>Please enter the correct amount</span>
                            </div>
                            <button className='submitBtn' type='submit' >Submit</button>
                        </form>
                        <form className={btnClassName === true ? 'signInForm' : 'notSignInForm'} id='form' onSubmit={handleFormSubmit}>
                            <div className='inputsDiv'>
                                <input type='text' className='textInput' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Username' />
                                <span className={userNameSpan === false ? 'userNameFalse' : 'userNameTrue'}>Please enter the correct amount</span>
                            </div>
                            <div className='inputsDiv'>
                                <input type='text' className='textInput' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                <span className={emailSpan === false ? 'emailFalse' : 'emailTrue'}>Please enter the correct amount</span>
                            </div>
                            <div className='inputsDiv'>
                                <input type='password' className='textInput' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                <span className={passwordSpan === false ? 'passwordFalse' : 'passwordTrue'}>Please enter the correct amount</span>
                            </div>
                            <div className='inputsDiv'>
                                <input type='password' className='textInput' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                <span className={passwordSpan === false ? 'passwordFalse' : 'passwordTrue'}>Please enter the correct amount</span>
                            </div>
                            <button className='submitBtn' type='submit' >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage