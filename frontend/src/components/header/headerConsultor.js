import React from 'react';

import '../header/headerConsultor.css';

import '../../components/header/style.css';
import {Link, useHistory} from 'react-router-dom';

export default function HeaderConsultor(){
    const name = localStorage.getItem('keyNameConsultor');
    const history = useHistory();

    function limparCache(){
        console.log('hi!, everyone');
        localStorage.removeItem('keyIdConsultor');
        localStorage.removeItem('keyNameConsultor');
        
        history.push('/');
        

    }

    return(
    <header id='header'>
    Bem vindo(a), {name} 
    <button id='btn_sair' onClick={limparCache}>Sair</button>
    </header>
    
    );
}