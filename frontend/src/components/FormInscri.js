import '../styles/Form.css'
import { useNavigate } from "react-router-dom";

function Signup() {

    let navigate = useNavigate()

     const handleClick = async (e) => {
        e.preventDefault()
        const user = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        console.log(user)


        try {
          const response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
    
          const result = await response.json();
    
          console.log('result is: ', JSON.stringify(result, null, 4));
    
          navigate('/', {replace: true })
        } catch (err) {

        } 
      };
    
    return (
        <div className="container">
            <form method="post" className='group-form'>
                <h1>S'inscrire</h1>

                <label>Nom d'utilisateur</label>
                <input type="text" placeholder="Entrer votre nom d'utilisateur" name="username" id="username"></input>

                <label>Adresse email</label>
                <input type="text" placeholder="Entrer votre adresse email" name="email" id="email"></input>

                <label>Mot de passe</label>
                <input type="password" placeholder="Entrer votre mot de passe" name="password" id="password"></input>

                <input type="submit" value="S'inscrire" onClick={handleClick}></input>

            </form>
        </div>
    )
}

export default Signup