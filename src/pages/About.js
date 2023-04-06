import '../Styles/App.sass'
import '../Styles/App.css'

import Resultado from '../components/Resultado';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react'

const About = () => {

    const { resultado, setResultado, newSearch, setNewSearch, listProducts, setListProducts, listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir, setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
    } = useContext(CartContext)

return (  <>
        {newSearch? <>
            <Resultado data={listProducts} />   
        </> : <>

 

<section  style={{margin: "20px 0px"}} className="zoomosetentaycinco  centrado mediapag"> 


<div style={{margin: "10px"}} className="mediapag ">
<div className="texto">
<h2 style={{fontWeight: "700"}}   className="titulo subtexto " >Bonsais Orlando</h2>
<h3 className="titulo subtexto ">La alimentación está cambiando y cada vez somos más quienes participamos de esta transformación. Existen nuevas alternativas para llevar una vida sana y saludable, respetando el medioambiente y apoyando la sustentabilidad.
</h3>
<br/>

<h4>
Así es como nace Natural Deli, con la misión de ofrecer alimentos saludables y nutritivos que ayuden a mejorar la alimentación y a conectarnos con la naturaleza desde un nuevo lugar. Ofrecemos un servicio que te permitirá conocer alternativas para tus comidas y conseguirlas de una forma simple, segura y rápida. Conocé más sobre nuestro servicio en nuestra sección Cómo funciona!
<br/><br/> </h4>
 
</div>
<br/>
<div className="imagenabout">
<img src={"../assets/img/otras/nosotros.jpg"} alt="Imagen producto" />

</div>
</div>

      </section>


      </>} </>
)


}

export default About