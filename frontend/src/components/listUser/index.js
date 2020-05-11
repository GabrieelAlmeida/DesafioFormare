import React, { Component } from 'react';

import '../listUser/style.css';
import api from '../../services/api';

export default class ListUser extends Component{

    state = {
        users: [],
        userInfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = async (page=1) =>{
        const response = await api.get(`/consultor/users/?page=${page}`);


        const {docs, ...userInfo} = response.data;
        this.setState({ users: docs, userInfo, page});

    };

    prevPage = () => {
        
        const {page, userInfo} = this.state;

        if(page === 1) return;

            const pageNumber = page - 1;

            this.loadUsers(pageNumber);


    };

    nextPage = () =>{

        const {page, userInfo} = this.state;

        if(page === userInfo.pages) return;

            const pageNumber = page + 1;

            this.loadUsers(pageNumber);


    };

    render(){
        return  (
            <>
            <div className='appList'>
                {this.state.users.map((user) => (

                    <div className='itemList'>
                        <h2 key={user._id}>Nome do Usuário: <strong>{user.name}</strong></h2> 
                    </div>
                    
                    
                ))}
                
                
            </div>

            <div className='actions'>
                <button onClick={this.prevPage}>Anterior</button>
                <button onClick={this.nextPage}>Próximo</button>
            </div>
            </>

        );

    }
        
    

}