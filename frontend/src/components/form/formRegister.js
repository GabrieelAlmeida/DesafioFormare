import React, {useState} from 'react';

import '../form/formRegister.css';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';




export default function FormRegister() {

    const [name,setName] = useState('');

    const history = useHistory();

    function handleRegister(e){
        e.preventDefault();
        //console.log(data);

        const data = {name};

       api.post('/user/register', data);
       //console.log(data.status());

       history.push('/');

        
    }

    return(
        <div id='form-app'>
        <div id='title'>
            <h3>Faça o Cadastro:</h3>
        </div>
        <div id='form'>
            <form onSubmit={handleRegister}>
                <div className='inputElements'>
                    <input value={name} id ='inputUser' onChange={e => setName(e.target.value)} required placeholder='Digite seu username'/>
                </div>
                <div className='btnLogin'> 
                    <button type='submit'>Cadastrar</button>
                    <Link to='/' id='register'>Voltar</Link>
                </div>
            </form>
        </div>
     </div>
    
    );

}
    



