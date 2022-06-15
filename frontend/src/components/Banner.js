import logo from '../assets/logos/icon-above-font.png'
import '../styles/Banner.css'
//import { Link } from 'react-router-dom'

function Banner(){
    return(
        <div className="group-banner">
            <img src={logo} alt='Groupomania' className='group-logo'></img>
        </div>
    )
}

export default Banner