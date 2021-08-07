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
                <h1 className="logo">BIWALAX</h1>
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