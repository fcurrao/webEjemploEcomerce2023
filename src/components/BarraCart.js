import '../Styles/App.sass'
import '../Styles/App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CartWiew from './CartView';
import swal from 'sweetalert';

const BarraCart = () => {

 const { cantidadXCarro,   listaDeUsarios,totalPrice, cartProducts,setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir,setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
 } = useContext(CartContext)

 




  const salirQ = () => {
    setShowSalir(true)
  }


  const salirQ2 = () => {
    setShowSalir(false)
  }

  const cerrarSesion = () => {
    setFormdataUser([])
    setUserOK([])
    setShowSalir(false)
    setShowLogin(false)
    // e.preventDefault()
  }


  const ingresaNewUser = (e) => {
    console.log("asd", formDataUser.password)
    if(formDataUser.password != ""){
      console.log("xxx",formDataUser)
       setHayUsuario(true)}
       else {
        swal("Coloque contraseña")
        e.preventDefault()
       }
      // console.log("aveeeeeeeeeeeeeeer" , formDataUser, formDataUser.email, formDataUser.password)
    }
  

  const  handleChange = (e) => {
    console.log("e.target.name", e.target.name, e.target.value)
    setFormdataUser({...formDataUser,[ e.target.name] : e.target.value})
    setUserOK({...userOK,[ e.target.name] : e.target.value})
    e.preventDefault()
    }
  



  const abrirCartView = () => {
    setShowCart(true)
  }

  const cerrarCartView = () => {
    setShowCart(false)
  }



  const abrirLogin = () => {
    setshowLogIn(true)
  }


  const cerrarLogin = () => {
    setshowLogIn(false)
  }




  return (<>

<h1 style={{right:"42%", position:"absolute"}} className="textoCentrado titulo">Bonsais Orlando</h1>
    <div className="cartwidget ">
      <img className="fotito" src="../assets/img/otras/logo.jpg" alt="logo"></img>

      
      <div className='textosUsuario'>
        <svg className="svg1 bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        
        {hayUsuario ? <> 
          <a className="ptext" href="#" onClick={() => abrirLogin()} ><p className='negrita'>{userOK.email}</p> </a>
          </>: <>
        <a className="ptext" href="#" onClick={() => abrirLogin()} >Iniciar Sesion</a>
        </>
      }
           
        
        
        {hayUsuario ? <> 
          
          </>: <>
          <svg className="svg1 bi bi-person-plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg>
          <Link to="/Registrarse" className="ptext" href="#">Registrarse</Link>
        </>
      }
       
        
      <div style={{  display: cantidadXCarro > 0 ? 'block' : 'none'}}> <a href="#" onClick={() => abrirCartView()} className="ptext"
       style={{textDecoration:"none", position:"relaative", top:"7px", fontSize: "15px"}}> {cartProducts.length}  <svg className="svg1 bi bi-cart3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      {cartProducts.length}    </svg>  =>  {totalPrice}$ </a><div></div></div>
      {console.log("aca", cartProducts)}
        {showCart ? <> 
        <div className='todoOpacity'>
          </div>
          <div className='contenedordeModal'>
            <div className='modalCart'>
              <button className='btn-dark btn botonCerrar' style={{padding:0}}onClick={() => cerrarCartView()}>X</button>
              <div><h3 className="ptext subtitulo" >Mi carrito</h3></div>
              <CartWiew />

            </div>
          </div>
        </> : <>
        </>

        }  
        

 
        {showLogIn ? <> 
        <div className='todoOpacity'>
          </div>
          <div className='contenedordeModal'>
            <div className='modalCart'>
              <button className='botonCerrar' onClick={() => cerrarLogin()}>X</button>
              <div><h3 className="ptext" >Usuario:</h3></div>
        

              {hayUsuario ? <>
                <div title="Datos de contacto" setModalState={() => setShowSalir(false)} > </div>

                
                <h5> Email: {userOK.email}  </h5><br></br>
                <Link to="/perfil" className="ptext" href="#">   <button className='margenesch'  > Mi Perfil</button><br></br> </Link>  
                                            
                <Link to="/" className="ptext" href="#">     <button className='margenesch'  >  Mis Ordenes</button><br></br> </Link>  
                <Link to="/" className="ptext" href="#">       <button className='margenesch'  >  Mi Carrito</button><br></br> </Link>  

                <button  className='margenizq margenesch' onClick={() => setHayUsuario(false)}>  Cerrar Sesion</button><br></br>
              </> :
              
              
              
              <> 
              
              <form
                  onSubmit={ingresaNewUser}

                        >
                             email<input className='inputt' type='email' 
                            name='email' 
                            placeholder='email'
                             value={formDataUser.email}
                            onChange={handleChange}
                            />
                            <br />


 
                             contraseña <input className='inputt' type='password' 
                            name='password' 
                            placeholder='password'
                              value={formDataUser.password}
                            onChange={handleChange}
                            />
                            <br />
                            <button type="submit" > Enviar</button>

                            </form>
              
              
              
              
              
              
              </>}











            </div>
          </div>
        </> : <>
        </>

        }










      </div>
    </div>

  </>)
}

export default BarraCart