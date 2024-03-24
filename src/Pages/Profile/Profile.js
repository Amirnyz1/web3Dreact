import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Dashboard from '../../components/Dashboard/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { MdPhotoCamera } from "react-icons/md";
import { addProfile, addBio } from '../../redux/reducers/dataReducer/dataReducer'
import './Profile.css'



const Profile = () => {


    const name = useSelector((state) => state.data.userName)
    const email = useSelector((state) => state.data.email)
    const profilePhoto = useSelector((state) => state.data.profilePhoto)
    const dispatch = useDispatch()

    const [photo, setPhoto] = useState(null);
    const [changePhoto, setChangePhoto] = useState(false)
    const [bio, setBio] = useState('')


    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPhoto(reader.result);
                setChangePhoto(true)
            };
            reader.readAsDataURL(file);
        }
    };

    const acceptChangePhoto = () => {
        dispatch(addProfile({ profilePhoto: photo }))
        setChangePhoto(false)
    }

    const refuseChangePhoto = () => {
        dispatch(addProfile({ profilePhoto: null }))
        setChangePhoto(false)
    }

    const getBio = () => {
        dispatch(addBio({ bio: bio }))
    }

    return (
        <div className='profileContainer'>
            <Header />
            <div className='profileMain'>
                <Dashboard />
                <div className='profileDetails'>
                    <div className='profilePhotoDiv'>
                        <img className='profilePhoto' src={profilePhoto} />
                        <label htmlFor="photo-upload" style={{ cursor: 'pointer' }}>
                            <MdPhotoCamera className='changeProfileImgIcon' />
                            <input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                style={{ display: 'none' }}
                            />
                        </label>
                        <div className={changePhoto ? 'changeProfilePhotoQuiz' : 'notChangeProfilePhotoQuiz'}>
                            <span className='changePhotoQuiz'>Are you sure about changing your profile picture?</span>
                            <div className='changePhotoBtns'>
                                <button className='acceptChangeBtn' onClick={acceptChangePhoto}>YES</button>
                                <button className='refuseChangePhoto' onClick={refuseChangePhoto}>NO</button>
                            </div>
                        </div>
                    </div>
                    <ul className='profileSpecifications'>
                        <li className='fixedInformation'>
                            <span className='fixedInformationHeader'>Name : </span>
                            <span className='fixedInformationValue'>{name}</span>
                        </li>
                        <li className='fixedInformation'>
                            <span className='fixedInformationHeader'>Email : </span>
                            <span className='fixedInformationValue'>{email}</span>
                        </li>
                        <li className='specifications'>
                            <span className='profileBio'>Bio : </span>
                            <textarea className='bio' onChange={(e) => setBio(e.target.value)} />
                            <div className='bioSubBtnDiv'>
                                <button className='bioSubBtn' onClick={getBio}>OK</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile