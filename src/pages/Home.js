
import '../Styles/App.sass'
import '../Styles/App.css'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../firebaseConfig"
import { useParams } from 'react-router-dom'
import Catalogo from '../components/Catalogo'
import ElCarousel from '../components/ElCarousel'
import Container from "react-bootstrap/Container";
import Resultado from '../components/Resultado'

import { CartContext } from '../context/CartContext';
import { useContext } from 'react'

const Home = () => {

    // const [showModal, setShowModal] = useState(false)
    // const {image, title, description, price , qty , tamano} = listProducts 

    const { categoryid } = useParams() 
    
  const { resultado, setResultado, newSearch, setNewSearch, listProducts, setListProducts, listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir, setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
  } = useContext(CartContext)


    useEffect(() => {
        const queryCollection = collection(db, "products")

        if (categoryid) {
            const queryFilter = query(queryCollection, where("category", "==", categoryid))
            getDocs(queryFilter)
                .then(res => setListProducts(res.docs.map((uno) => {
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))
        } else {
            getDocs(queryCollection)
                .then(res => setListProducts(res.docs.map((uno) => {
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))

        }
  
    
    }, [categoryid])

// busquedaid


    return (
        <>
        {newSearch? <> 
            <Resultado data={listProducts} />   
        </> : <>
            {/* <ElCarousel  /> */}
            {/* <ItemListContainer titulo="Listado de Productos" filtro=""/> */}
            <Container>
            <section className='paginaPrincipal'>
                <div className='divTitulo'>
                     
                    <h2 className="textoCentrado subtitulo">Bonsais, paisajismo, Maquetas de Jardines,Paisaje en maceta y Peinjing</h2>
                </div>

                <div className='listaDeProductos' >
                    
                    {/* <div className='tituloDeDiv'> </div> */}
                    {/* {console.log(listProducts)} */}
                    {listProducts.length == 0? <> 
                    <div className='nohay textoCentrado'><h2 className='textoCentrado titulo'> No hay productos aun</h2></div>
                     </>: <>
                     <div> <h3 className='textoCentrado titulo'>{categoryid}</h3></div>
                    <Catalogo data={listProducts} /> </>}
 
                </div>


            </section>
               
    
        </Container></>}</>
    )
}



export default Home