import '../Styles/App.sass'
import '../Styles/App.css'
import "../pages/pages.css"
import swal from 'sweetalert';
import Resultado from '../components/Resultado';

import { CartContext } from '../context/CartContext';
import { useContext } from 'react'

const Contact = () => {
    const { resultado, setResultado, newSearch, setNewSearch, listProducts, setListProducts, listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir, setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
    } = useContext(CartContext)


const enviarcontacto = (e) =>{
      const descripcionN = document.getElementById("descripcion").value
      const emailN =  document.getElementById("email").value
      const nameN =  document.getElementById("name").value 
      console.log("nameN", nameN)

      if(emailN != "" && descripcionN != "" && nameN != ""){
      console.log("envio comentario y contacto")
      e.preventDefault() 
      document.getElementById("descripcion").value = ""
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("phone").value = ""
      document.getElementById("adress").value = ""
      swal("EXCELENTE! ,  Su comentario se envio con exito, Proximamente le responderemos")
} else{
swal("Debes poner si o si email , nombre y descripcion..")
e.preventDefault() 
}
}



      return (  <>
        {newSearch? <>
            <Resultado data={listProducts} />   
        </> : <>


       
 
           

<section style={{margin: "20px 200px"}} className="zoomosetentaycinco centrado">
  

<div style={{margin: "10px"}}  className="mediapag">
<div className="titulo texto ">
<h2 style={{fontWeight: "700"}}  className="titulo">Contactanos</h2>
<h3 className="titulo subtexto "><br/>
Direción: <br/>
Av. Santa Fe 988, Microcentro. CABA
<br/><br/>
Teléfono: <br/>
11-56062096
<br/><br/>
Email: <br/>
info@bonsaisorlando.com.ar
<br/>
</h3>
<br/>

 
<br/>
Bonsais Orlando
</div>
<br/>
<div className="imagen">
<p className="subtexto" > </p> 

<form  id="formulario1" onSubmit={enviarcontacto}  className=" formulario"> 
      
     <div className="div1" >
     
    

                          name<br /><input id="name" className='inputt' type='text' 
                            name='name' 
                            placeholder='name'
                            //  value={formDataUser.name}
                        //     onChange={handleChange}
                            />
                            <br />
                            <br />

                            phone<br /><input id="phone" className='inputt' type='number' 
                            name='phone' 
                            placeholder='phone'
                            //  value={formDataUser.phone}
                        //     onChange={handleChange}
                            />
                            <br />
                            <br />

                            {/* adress<br /><input id="adress" className='inputt' type='text' 
                           name='adress' 
                            placeholder='adress'
                             value={formDataUser.adress}
                            onChange={handleChange} 
                            />
                            <br />
                            <br /> */}
                            email<br /><input id="email" className='inputt' type='email' 
                            name='email' 
                            placeholder='email'
                        //      value={formDataUser.email}
                        //     onChange={handleChange}
                            />
                            <br />
                            <br />
                            </div>
                            <div className="div2" >

                        descripcion <br /><textarea id="descripcion" className='inputtbig' type='texto' 
                            name='descripcion' 
                            placeholder='descripcion'
                        //      value={formDataUser.email}
                        //     onChange={handleChange}
                            />
                                                          <br />
                                                          <br />


                            <button className='btn btn-group2 bttn' type="submit"> Enviar Consulta</button>
                            <br />
                            </div>


</form>

</div>
</div>

      </section>


      </>} </>
      )


}

export default Contact