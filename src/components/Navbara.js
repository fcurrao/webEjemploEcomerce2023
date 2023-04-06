import '../Styles/App.sass'
import '../Styles/App.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react'



const Navbara = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  // const [showModal, setShowModal] = useState(false) 



  const { resultado, setResultado, newSearch, setNewSearch, listProducts, setListProducts, listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir, setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
  } = useContext(CartContext)


  const limpiandoSearch = () => {
    setNewSearch(false)
    const arrayResultado = [] 
  }



  const buscando = () => { 
    const arrayResultado = []
    const formulario = document.querySelector('#site-search')
    const texto = formulario.value.toLowerCase()
    console.log(texto)


    for (let producto of listProducts) {

      let nombre = producto.title.toLowerCase()
      let nombre2 = producto.category.toLowerCase()
      let nombre3 = producto.description.toLowerCase()
      if (nombre.includes(texto) || nombre2.includes(texto) || nombre3.includes(texto)) {

        console.log(`se encontro estos id:  ${[(arrayResultado)]}`)
        setNewSearch(true)
        console.log(producto)
        arrayResultado.push(producto)



      } else { }

    } setResultado(arrayResultado)
    console.log("resultado:", resultado)

    // const formulario = document.querySelector('#site-search')
    formulario.value = ""
    formulario.innerHTML = ""
    const input = document.querySelector('#inputsearch')

    formulario.appendChild(formulario);
    alert("se busco")
  }





   



  return (
    <>
      <div className='contenedorGeneralBarra'>
        <div className="contenedorDeLinks">

          <Link to={``}><div className="margensitos" onClick={limpiandoSearch} > Todos</div> </Link>
          <Link to={`/categorias/Bonsai`}  ><div className="margensitos" onClick={limpiandoSearch} > Bonsais</div> </Link>
          <Link to={`/categorias/Paisajismo`}   ><div className="margensitos" onClick={limpiandoSearch}> Paisajismo </div> </Link>
          <Link to={`/categorias/Peijing`}   > <div className="margensitos" onClick={limpiandoSearch} > Peijing</div></Link>
          <NavDropdown className="margensitos drop" title="Mas">
            <Link to={`/categorias/Paisajismo`}    > <div className="margensitos" onClick={limpiandoSearch}> Arboles </div> </Link>
            <Link to={`/categorias/Peijing`}> <div className="margensitos" onClick={limpiandoSearch}> Macetas</div></Link>

          </NavDropdown>
          <Link to={`/About`}  > <div onClick={limpiandoSearch} className="margensitos" > Nosotros</div></Link>
          <Link to={`/Contact`}> <div onClick={limpiandoSearch} className="margensitos"> Contactanos</div></Link>
          <Link to={`/Ayuda`}> <div onClick={limpiandoSearch} className="margensitos"> Como comprar/Ayuda</div></Link>
        </div>
        <div className='barraBusqueda'>
          <div className='inputseearch' id='inputsearch'>
            <input className="search" type="search" placeholder="Buscar" id="site-search" name="q" />

            <svg onClick={() => buscando()} className='svg3 svg2 butonsearch bi bi-search' xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg> </div>
          <form>

          </form>
        </div>
      </div>

    </>
  )
}



export default Navbara