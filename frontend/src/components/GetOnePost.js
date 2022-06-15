import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Form.css'

function GetOnePost() {

    const url = `http://localhost:3000/api/post/`;

    let { postId } = useParams();

    let userId = ''

    getInfoPost();

    async function getInfoPost() {
        await fetch(url + postId, {
            headers : {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).token}
        })
        .then((resp) => (resp.json())
        .then(function(data) {
            console.log(data)

            document.getElementById('txt').innerHTML = data.text

            document.getElementById('author').innerHTML = data.user.username

            document.getElementById('date').innerHTML = data.createdAt.split('T')[0] +' '+ data.createdAt.split('T')[1].slice(0, -5)


            
        }))
    };


    let navigate = useNavigate()
    async function handleDelete(e) {
        e.preventDefault()

        try {

            const response = await fetch('http://localhost:3000/api/post/'+ postId, {
                method: 'DELETE',
                headers : {'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).token}
            })
            console.log(response)

            navigate('/wall', {replace : true})

        } catch (err) {

        }

    }

    
    const button = (JSON.parse(localStorage.getItem('user')).admin)
    ?<input type="submit" value="Supprimer ce post" onClick={handleDelete}></input>
    :``

    localStorage.removeItem('author')

    return(
        <div className="container">

            <h1 id='author'>

            </h1>

            <h2 id='date'>

            </h2>
            
            <p id='txt'>

            </p>
            
            {button}
        </div>

    )
}

export default GetOnePost