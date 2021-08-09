import Header from "../components/header";
import '../styles/home.css';
export default function Home(){
    return(
<><Header productos="disabled" informacion="disabled" inicio="enable" contacto="disabled"/>
        
<div className="container-hero">
        <div className="hero">
         <img alt="logo" className="logo-hero" src="https://i.imgur.com/0Ce0UCl.png"/>
        </div>
</div>

</>
    )
}