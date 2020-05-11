import React from 'react';

import '../../components/header/style.css';
import {Link, useHistory} from 'react-router-dom';

export default function Header(){
    const name = localStorage.getItem('keyName');
    const history = useHistory();

    function limparCache(){
        console.log('hi!, everyone');
        localStorage.removeItem('keyId');
        localStorage.removeItem('keyName');
        
        history.push('/');
        

    }

    return(
    <header id='header'>
    Bem vindo(a), {name} 
    <button id='btn_sair' onClick={limparCache}>Sair</button>
    </header>
    
    );
}