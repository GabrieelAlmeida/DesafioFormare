import React, {useState} from 'react';

import '../form/formRegisterConsultor.css';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';


export default function FormRegisterConsultor() {

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    function handleRegister(e){
        e.preventDefault();
        //console.log(data);

        const data = {name, password};

       api.post('/consultor/register', data);
       //console.log(data.status());

       history.push('/login-consultor');

        
    }

    return(
        <div id='form-app'>
        <div id='title'>
            <h3>(Área Consultor)</h3>
            <h3>Faça o Cadastro:</h3>
        </div>
        <div id='form'>
            <form onSubmit={handleRegister}>
                <div className='inputElements'>
                    <input value={name} className='input' onChange={e => setName(e.target.value)} required placeholder='Digite seu username'/>
                    <input value={password} type='password' className='input' onChange={e => setPassword(e.target.value)} required placeholder='Digite seu username'/>
                </div>
                <div className='btnLogin'> 
                    <button type='submit'>Cadastrar</button>
                    <Link to='/login-consultor' id='register'>Voltar</Link>
                </div>
            </form>
        </div>
     </div>
    
    );

}
    



