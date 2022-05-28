import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner() {
    const title = 'Jungle House';

    return (
        <div className="header">
            <div className='header-row'>
                <img src={logo} alt="Logo" className='logo' />
                <h1 className='title'>{title}</h1>
            </div>
            <Recommendation />
        </div>
    )
}

export default Banner