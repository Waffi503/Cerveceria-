import React,{ Component } from 'react';
import '../styles/header.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'wouter'
export default class Header extends Component{
   
    render(){
        function showmenu(){
            document.getElementById("menu-items").classList.toggle("show");
        }

        return(
            <div className="menu">
                <h1 className="logo">Axel Cervezeria</h1>
                <ul id="menu-items" className="Menu-ul">
                    <li><Link className="activado" href="#">Inicio</Link></li>
                    <li><Link className="no-activado" href="#">Productos</Link></li>
                    <li><Link className="no-activado" href="#">Contacto</Link></li>
                    <li><Link className="no-activado" href="#">Informacion</Link></li>
                </ul>
                <span className="btn-menu" onClick={showmenu}>
                    <FaBars/>
                </span>
            </div>
            

        )
    }
} 