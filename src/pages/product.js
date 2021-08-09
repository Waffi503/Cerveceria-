import Header from "../components/header";
import '../styles/product.css';

export default function product(){
return (<>
    <Header productos="enable" informacion="disabled" inicio="disabled" contacto="disabled"/>

<div className="container">

    <div className="contenedor-grid color-beige">
        <div className="container-desc">
            <h1>Dorada Pampeana</h1>
            <p>La versión Argentina del histórico estilo inglés, ya es un estilo reconocido mundialmente. Se diferencia de la IPA Americana por agregado de trigo a la receta de granos y el uso de lúpulos Argentinos que tienen características únicas de sabor y aroma. Se busca que las caracterísiticas cítricas del lúpulo Argentino armonicen con el trigo, como sucede en la Witbier. El agregado de bajas cantidades de trigo puede recordar al grist de la Kolsch, donde también hay un frutado producto de la fermentación. 

Estamos ante una Pale Ale orgullosamente Argentina decididamente amarga y lupulada, refrescante y moderadamente fuerte. La clave del estilo está en la tomabilidad sin asperezas y con un buen balance.</p>
        </div>
        <div className="container-img">
        <img src="https://i.imgur.com/XOabvtI.png" alt="cerveza" className="img-product"/>
        </div>
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