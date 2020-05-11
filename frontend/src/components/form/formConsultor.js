import React, {useState} from 'react';

import '../form/formConsultor.css';

import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function FormConsultor(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {name, password};

       await api.post('/consultor/login', data).then((response) => {

            const {_id, name} = response.data;
            console.log(_id);
            localStorage.setItem('keyIdConsultor',_id);
            localStorage.setItem('keyNameConsultor',name);
            history.push('/home-consultor');


       }).catch((error) => {
           const {data,status} = error.response;

            alert(`O Consultor ${name} não foi encontrado!`);

       });


    }

    return(
        <div id='form-app'>
        <div id='title'>
            
            <h3>(Área Consultor)</h3>
            <h3>Faça o Login:</h3>
        </div>
        <div id='form'>
            <form onSubmit={handleLogin}>
                <div className='inputElements'>
                    <input className="input" value={name} onChange={e => setName(e.target.value)} required placeholder='Digite seu username'/>
                    <input className="input" type='password' value={password} onChange={e => setPassword(e.target.value)} required placeholder='Digite sua senha'/>
                </div>
                <div className='btnLogin'> 
                    <button type='submit'>Logar</button>
                    <p>Não tem conta? <Link to='/register-consultor' id='register'>Registre-se</Link></p>
                    <Link to='/' id='register'>Voltar</Link>
                </div>
            </form>
        </div>
    </div>


    );

}
    
    