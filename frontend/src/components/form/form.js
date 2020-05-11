import React, {useState} from 'react';

import '../form/style.css';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';


export default function Form(){
    const [name, setName] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {name};

       await api.post('/user/login', data).then((response) => {

            const {_id, name} = response.data;
            console.log(_id);
            localStorage.setItem('keyId',_id);
            localStorage.setItem('keyName',name);
            history.push(`/home-chat?name=${name}`);


       }).catch((error) => {
           const {data,status} = error.response;

            alert(`O usuário ${name} não foi encontrado!`);

       });


    }

    return(
        <div id='form-app'>
        <div id='title'>
            <h3>Faça o Login:</h3>
        </div>
        <div id='form'>
            <form onSubmit={handleLogin}>
                <div className='inputElements'>
                    <input id="inputUser" value={name} onChange={e => setName(e.target.value)} required placeholder='Digite seu username'/>
                </div>
                <div className='btnLogin'> 
                    <button type='submit'>Logar</button>
                    <p>Não tem conta? <Link to='/register' id='register'>Registre-se</Link></p>
                    <p>Área <Link to='/login-consultor' id='register'>Consultor</Link></p>
                </div>
            </form>
        </div>
    </div>


    );

}
    
    