import React,{ Component } from 'react';
import '../styles/header.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'wouter'
export default function Header({inicio,productos,contacto,informacion}){
    
    function showmenu(){
        document.getElementById("menu-items").classList.toggle("show")
    }
    return(
        
       

            <div className="menu">
                <div className="container-logo">
                    <img className="logo-header" src="https://i.imgur.com/0nY2hco.png"/>
                <h1 className="logo">BIWALAX</h1>
                </div>
                <ul id="menu-items" className="Menu-ul">
                    <li><Link className={inicio} href="/" >Inicio</Link></li>
                    <li><Link className={productos} href="/productos" >Productos</Link></li>
                    <li><Link className={contacto} href="/contacto" >Contacto</Link></li>
                    <li><Link className={informacion} href="/informacion" >Informacion</Link></li>
                </ul>
                <span className="btn-menu" onClick={showmenu}>
                    <FaBars/>
                </span>
            </div>
            

       
    
    )
}