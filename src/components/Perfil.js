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

const Perfil = () => {


    const {listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir,setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
    } = useContext(CartContext)

    
    return (<>
        <div className="text titulo centrado ">

            <p className="ptext"> MI PERFIL <br></br> <br></br> 
            Nombre: {userOK.name}<br></br> 
            Apellido: {userOK.apellido}<br></br>             
            Email: {userOK.email}<br></br> 
            Telefono: {userOK.phone}<br></br>
            Direccion: {userOK.direccion}<br></br> 
            
            
             </p> 

             <button> Mis ordenes</button><br></br> 
             <button> Mi carrito</button><br></br> 
             <button> Otros </button><br></br> 


        </div>

    </>)
}

export default Perfil