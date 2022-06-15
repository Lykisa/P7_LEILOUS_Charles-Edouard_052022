import '../styles/Form.css'
import { useNavigate, Link } from 'react-router-dom'


function FormConnexion() {

    let navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        const user = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        console.log(user)

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`)
            }
            
            const result = await response.json();

            console.log('result is :', JSON.stringify(result, null, 4));

            localStorage.setItem("user", JSON.stringify(result))

            navigate('/wall', {replace: true})

        } catch (err) {

        }
    };

    return (
        <div className="container">
            <form method="post" className='group-form'>
                <h1>Connexion</h1>

                <label>Adresse email</label>
                <input type="text" placeholder="Entrer votre adresse email" name="email" id='email'></input>

                <label>Mot de passe</label>
                <input type="password" placeholder="Entrer votre mot de passe" name="password" id='password'></input>

                <input type="submit" value="Se connecter" onClick={handleClick}></input>

            </form>
            <p>Vous n'avez pas de compte ? Inscrivez-vous <Link to='/signin'>ici</Link></p>
        </div>
    )
}

export default FormConnexion