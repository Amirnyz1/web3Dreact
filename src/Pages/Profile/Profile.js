import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Dashboard from '../../components/Dashboard/Dashboard'
import './Profile.css'



const Profile = () => {
    return (
        <div className='profileContainer'>
            <Header />
            <div className='profileMain'>
                <Dashboard />
                <div className='profileDetails'>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile