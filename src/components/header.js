import React,{ Component } from 'react';
import '../styles/header.css';
export default class Header extends Component{

    render(){
        return(
            <div className="Header"> 
            <header className="Header-logo">
                <img src="https://i.imgur.com/rtBgb6v.png" alt="logo"/>
            </header>
            <ul className="Menu-ul">
                <li>Productos</li>
                <li>Contacto</li>
                 <li>Informacion</li>
            </ul>
            </div>

        )
    }
} 