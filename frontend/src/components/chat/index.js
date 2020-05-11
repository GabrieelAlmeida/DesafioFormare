import React, {useEffect} from 'react';
import '../chat/style.css';
import queryString from 'querystring';
import io from 'socket.io-client';

let socket;

export default function Chat({location}){

    const endpoint = 'http://localhost:3001/api';
    
    useEffect(() => {
        //const {data} = queryString.parse(location.search);
        const data = localStorage.getItem('keyName');
        socket = io(endpoint);
        console.log(socket);
        

    });

    function sendMessage(){

    }

    return(

        <div className='container'>
            <div id="historico_mensagens"></div>
            <form id='chat' onSubmit={sendMessage}>
                <input type='text' id='texto_mensagem' name='texto_mensagem' placeholder='Digite uma mensagem' />
                <button type='submit' id='btn_msg'>Enviar mensagem!</button>    
            </form>

        </div>
        
        
        
    );
}