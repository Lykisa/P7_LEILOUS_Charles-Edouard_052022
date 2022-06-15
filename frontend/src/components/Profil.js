import { useNavigate } from 'react-router-dom'
import '../styles/Form.css'

function Profil() {


    let name = JSON.parse(localStorage.getItem('user')).username

    let email = JSON.parse(localStorage.getItem('user')).email
    
    let navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()

        try {
            await fetch('http://localhost:3000/api/auth/delete', {
                method: 'DELETE',
                headers : {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).token}
            })
            .then(res => {
                localStorage.clear()
                navigate('/', {replace : true})
            })
            

            

        } catch (err) {

        }
    }

    


    return (
        <div className='container'>
            <h1 id="name">{name}</h1>
            <h2 id="email">{email}</h2>

            <input type="submit" value="Supprimer votre compte" onClick={handleClick} />
        </div>
    )
}

export default Profil