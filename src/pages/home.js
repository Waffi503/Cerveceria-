import Header from "../components/header";
import '../styles/home.css';
export default function Home(){
    return(
<><Header productos="disabled" informacion="disabled" inicio="enable" contacto="disabled"/>
        
<div className="container">
        <div className="hero">
            <img alt="logo" className="logo-hero" src="https://i.imgur.com/0nY2hco.png"/>
            <h1 className="sub-titulo">BIWALAX</h1>
        </div>
</div>

</>
    )
}