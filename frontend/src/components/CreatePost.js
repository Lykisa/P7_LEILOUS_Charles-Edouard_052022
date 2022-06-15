import '../styles/Form.css'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePost( { post }) {

    
    const [text, setText] = useState('')

    let navigate = useNavigate()

    const addPostHandler = async (e) => {

        e.preventDefault()

        

        /* const formData = new FormData()
        
        
        formData.append('text', text)
        formData.append('userId', JSON.parse(localStorage.getItem('user')).userId)

        console.log(formData) */

        const body = {
            'text': text,
            'userId': JSON.parse(localStorage.getItem('user')).userId
        }
        await fetch('http://localhost:3000/api/post/', {

            method:"POST",

            body : JSON.stringify(body),

            headers : {
                'Content-type': 'application/json',
                'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            }
        }).then (res => navigate('/wall', {replace : true}))

        
        /* post.push(formData) */
    }
    

    return(
        <div className='container'>
            <form method='post' onSubmit={addPostHandler} className='group-form'>
                <h1>Publiez</h1>

                

                <label>Vos pensées ?</label>
                <input type="text" placeholder="Dites-nous ce qui vous passe par la tête" name="text" onChange={(e) => setText(e.target.value)} />

                <input type="submit" value="Publiez" />
            </form>
        </div>
    )
}

export default CreatePost