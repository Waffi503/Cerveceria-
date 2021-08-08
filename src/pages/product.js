import Header from "../components/header";
import '../styles/product.css';

export default function product(){
return (<>
    <Header productos="enable" informacion="disabled" inicio="disabled" contacto="disabled"/>

<div className="container">

    <div className="contenedor-grid color-beige">
        <div className="container-desc">
            <h1>Dorada Pampeana</h1>
            <p>La elaboración de una cerveza artesanal, nace de la idea de crear algo a menor escala, de forma “manual” para conservar al máximo el control sobre la elaboración, permitiendo hacer pequeños cambios que influirán en el gusto que dará al paladar “menos sofisticado” o “experimentado”.</p>
        </div>
        <img src="https://i.imgur.com/XOabvtI.png" alt="cerveza" className="container-img"/>
    </div>

    <div className="contenedor-grid">  
        <img src="https://i.imgur.com/G0qA6V3.png" alt="cerveza" className="container-img"/>
        <div className="container-desc">
            <h1>Honey Beer</h1>
            <p>La elaboración de una cerveza artesanal, nace de la idea de crear algo a menor escala, de forma “manual” para conservar al máximo el control sobre la elaboración, permitiendo hacer pequeños cambios que influirán en el gusto que dará al paladar “menos sofisticado” o “experimentado”.</p>
        </div>
    </div>

    <div className="contenedor-grid color-beige">
        <div className="container-desc">
            <h1>Scottish Ale Export</h1>
            <p>La elaboración de una cerveza artesanal, nace de la idea de crear algo a menor escala, de forma “manual” para conservar al máximo el control sobre la elaboración, permitiendo hacer pequeños cambios que influirán en el gusto que dará al paladar “menos sofisticado” o “experimentado”.</p>
        </div>
        <img src="https://i.imgur.com/7UFhjqq.png" alt="cerveza" className="container-img"/>
    </div>
</div>





</>
)
}