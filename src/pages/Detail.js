
import ItemDetailContainer from '../components/ItemDetailContainer'

import Resultado from '../components/Resultado';
import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react'

const Detail = ({}) => {
    const { resultado, setResultado, newSearch, setNewSearch, listProducts, setListProducts, listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir, setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
    } = useContext(CartContext)
 

return (
    <>
 

    
<div>
<ItemDetailContainer/>

</div>  </> 
    )
     }
    
    export default Detail

