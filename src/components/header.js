import React,{ Component } from 'react';
import '../styles/header.css';
export default class Header extends Component{

    render(){
        return(
            
            <ul className="Menu-ul">
                <li className="logo">Axel Cervezeria</li>
                <li className="elemnt">Productos</li>
                <li className="elemnt">Contacto</li>
                <li className="elemnt">Informacion</li>
            </ul>
          
            

        )
    }
} 