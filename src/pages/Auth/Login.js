import React, { useState } from 'react';
import Retour from '../../components/public/Retour';
import { useNavigate } from 'react-router-dom/dist';
import { accountService } from '../../services/account.service';
import axios from 'axios'

const Login = () => {

    let navigate = useNavigate()

    //const [ login, setLogin] = useState('')
    //const [password, setPassword] = useState('') 

    const [credential, setCredential] = useState({
        email: 'jujo@live.nh',
        password: 'passwordalo'
    })

    const onChange = (e) => {

        setCredential({
            ...credential,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(credential)
        axios.post('http://localhost:8989/auth/login', credential)
        .then(res => {
            
            console.log(res)
            accountService.saveToken(res.data.access_token)
            navigate('/admin')
        })
        .catch(error => console.log(error))
        
    }
    return (
        <div>
            <Retour/>
            <form onSubmit={onSubmit}>

                <div className='group'>
                    <label htmlFor='login'>Identifiant</label>
                    <input type='text' name='email' value={credential.email} onChange={onChange}></input>
                </div>
                <div className='group'>
                <label htmlFor='password'>Password</label>
                <input type='text' name='password' value={credential.password} onChange={onChange}></input>
                </div>
                <div className='group'>
                    <button>Connexion</button>
                </div>
            </form>
        </div>
    );
};

export default Login;