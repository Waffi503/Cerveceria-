import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/product.css';

export default function product(){
return (<>
    <Header productos="enable" informacion="disabled" inicio="disabled" contacto="disabled"/>

<div className="container">

    <div className="contenedor-grid color-beige">
        <div className="container-desc">
            <h1>Dorada Pampeana</h1>
            <div className="container-border">
            </div>
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
            <div className="container-border"></div>
            <p>La elaboración de una cerveza artesanal, nace de la idea de crear algo a menor escala, de forma “manual” para conservar al máximo el control sobre la elaboración, permitiendo hacer pequeños cambios que influirán en el gusto que dará al paladar “menos sofisticado” o “experimentado”.</p>
        </div>
    </div>

    <div className="contenedor-grid color-beige">
        <div className="container-desc">
            <h1>Scottish Ale Export</h1>
            <div className="container-border"></div>
            <p>La Scottish Ale es el nombre con que se conocen algunas cervezas elaboradas en Escocia. Tienden a ser ligeras de sabor y aroma intenso, cuyo grado de alcohol varia entre 2.5 a 6.0% Alc./Vol. Según la graduación podemos dividirlas en Light (2.5% – 3.2%), Heavy (3.2% - 3.9%) y Export (3.9% - 6.0%)
Es una cerveza donde destaca la malta, acaramelada con algunos esteres y ocasionalmente un dejo a butterscotch (caramelo de azúcar morena y mantequilla) con lúpulos solo para apoyar y balancear la malta.  Esta puede ser utilizada seca, en grano, apenas tostada o acaramelada, pero nunca quemada, ni con aroma a humo. El color original de este tipo de cerveza era negro, ya que estaban hechas con maltas marrones o mirto de los pantanos, en lugar de los lúpulos que escaseaban en la región escocesa que por ser una zona fría, era casi imposible cultivar lúpulos de buena calidad, entonces debían ser importados. Por esta razón las Ale Scottish tienen esa predominancia a malta con una fermentación de levadura mas limpia que las cervezas inglesas.</p>
        </div>
        <img src="https://i.imgur.com/7UFhjqq.png" alt="cerveza" className="container-img"/>
    </div>

    <div className="contenedor-grid">  
        <img src="https://i.imgur.com/U0HCkQN.png" alt="cerveza" className="container-img"/>
        <div className="container-desc">
            <h1>Milk Stout</h1>
            <div className="container-border"></div>
            <p>La Milk Stout es una cerveza Ale muy oscura, dulce de cuerpo pleno, de cebada apenas tostada con un sabor sugerente a café con crema que utiliza como endulzante natural, la lactosa presente en la leche. 
La idea original de la Milk Stout fue de John Henry Johnson, que quiso darle un valor nutritivo a la cerveza e imagino que agregándole leche entre sus ingredientes podría lograrlo y así se vendían las primeras en su época, como un tónico recomendado para inválidos y madres lactantes. Se supo con el paso del tiempo que el grado nutritivo aportado por la lactosa, no era tal, por lo que el gobierno de Inglaterra prohibió que se utilizara el nombre Milk en las cervezas de todo su territorio por considerarlo deshonesto. Sin embargo, fuera de ese país, se las sigue denominando como Milk Stout.
Tanto la Stout como la Porter y su descendiente Milk Stout, provienen de Inglaterra.</p>
        </div>
    </div>

    <div className="contenedor-grid color-beige">
        <div className="container-desc">
            <h1>Ipa Argenta</h1>
            <div className="container-border">
            </div>
            <p>La versión Argentina del histórico estilo inglés, ya es un estilo reconocido mundialmente. Se diferencia de la IPA Americana por agregado de trigo a la receta de granos y el uso de lúpulos Argentinos que tienen características únicas de sabor y aroma. Se busca que las caracterísiticas cítricas del lúpulo Argentino armonicen con el trigo, como sucede en la Witbier. El agregado de bajas cantidades de trigo puede recordar al grist de la Kolsch, donde también hay un frutado producto de la fermentación. 

Estamos ante una Pale Ale orgullosamente Argentina decididamente amarga y lupulada, refrescante y moderadamente fuerte. La clave del estilo está en la tomabilidad sin asperezas y con un buen balance.</p>
        </div>
        <div className="container-img">
        <img src="https://i.imgur.com/R85RTO1.png" alt="cerveza" className="img-product"/>
        </div>
    </div>

    <div className="contenedor-grid">  
        <img src="https://i.imgur.com/O6l9v4o.png" alt="cerveza" className="container-img"/>
        <div className="container-desc">
            <h1>Red Fruit</h1>
            <div className="container-border"></div>
            <p>La elaboración de una cerveza artesanal, nace de la idea de crear algo a menor escala, de forma “manual” para conservar al máximo el control sobre la elaboración, permitiendo hacer pequeños cambios que influirán en el gusto que dará al paladar “menos sofisticado” o “experimentado”.</p>
        </div>
    </div>

</div>



</>
)
}