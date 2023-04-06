import { createContext } from "react";

import '../Styles/App.sass'
import '../Styles/App.css'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../firebaseConfig"
import { useParams } from 'react-router-dom'
import Catalogo from '../components/Catalogo'
import ElCarousel from '../components/ElCarousel'
import Container from "react-bootstrap/Container";


const CartContext = createContext()

const CartProvider = ({ children }) => {

  const { categoryid } = useParams()
    const [ showCart, setShowCart ]= useState()
    const [hayUsuario, setHayUsuario] = useState(false)


    // 



    const [listProducts, setListProducts] = useState([])



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



    const [showLogIn, setshowLogIn] = useState(false)
  
  
    const [busqueda, setbusqueda] = useState()
    const [showLogin, setShowLogin] = useState(false)
    const [showModal, setShowModal] = useState(false)
  
    const [showSalir, setShowSalir] = useState(false)
  
  
    const [showRegistrarse, setShowRegistrarse] = useState(false)
    const [userOK, setUserOK] = useState({
      password: '',
      password2: '',
      email: '',
      email2: ''
    })
    const [formDataUser, setFormdataUser] = useState({
      password: '',
      password2: '',
      email: '',
      email2: ''
    })

    const [listaDeUsarios, setListaDeUsarios] = useState()

    const [newSearch, setNewSearch] = useState(false)

    const [resultado, setResultado] = useState()

    //





    const [cantidadXCarro, setCantidadXCarro] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const [quantitiSelected, setQuantitiSelected] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const removeProductToCart = (product) => {

        const index = cartProducts.find(uno => uno.id === product.id);


        setCantidadXCarro(cantidadXCarro - index.qty)
        const newCarrito = cartProducts.filter((index) => index.id !== product.id);

        setCartProducts([...newCarrito]);
        console.log(cartProducts)

    }




    const clear = () => {
        setCartProducts([])
        setCantidadXCarro(0)
        setTotalPrice(0)
    }

    const isInCart = (id) => {

        if (cartProducts.some(uno => uno.id == id)) {
            return (
                console.log("TRUE")
            )
                
        } else {
            console.log("FALSE")
        }
    }


    //      let isInCart = cartProducts.find(uno => uno.id == product.id)
    //  if(!isInCart){


    const addProductToCart = (product, qty) => {
        let subtotal2 = product.price * qty 
        setTotalPrice(totalPrice + subtotal2)
        setCantidadXCarro(cantidadXCarro + qty)
        if (cartProducts.some(uno => uno.id == product.id)) {

            let index = cartProducts.findIndex(uno => uno.id == product.id)



            let itemPF = cartProducts[index]
            itemPF.qty = itemPF.qty + qty

            const newCarrito = [...cartProducts]
            newCarrito.splice(index, 1, itemPF)

            setCartProducts([...newCarrito])


        } else {

            let itemF = { ...product, qty }
            setCartProducts([...cartProducts, itemF]);
        }
    }

 
      
    const removeONEProductToCart = (product, qty) => {
        setCantidadXCarro(cantidadXCarro - qty)
        if (cartProducts.some(uno => uno.id == product.id)) {

            let index = cartProducts.findIndex(uno => uno.id == product.id)
            let itemPF = cartProducts[index]
            itemPF.qty = itemPF.qty - qty

            const newCarrito = [...cartProducts]
            newCarrito.splice(index, 1, itemPF)

            setCartProducts([...newCarrito])


        }
    }













    // EXPORT:
     const dataa = {  cantidadXCarro, cartProducts, clear, removeProductToCart, resultado, setResultado, 
        newSearch, setNewSearch, listProducts, setListProducts, listaDeUsarios, setListaDeUsarios, 
        showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, 
        showLogin, setShowLogin, showModal, setShowModal, showSalir,setShowSalir, showRegistrarse,
         setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser,   
             setCantidadXCarro,
             isInCart,
             removeONEProductToCart,
             addProductToCart,
             setQuantitiSelected,
             totalPrice,
             quantitiSelected
        }


     return (
        <CartContext.Provider   value={dataa} >

            {children}
            
        </CartContext.Provider>

    )
}

export default CartProvider

export { CartContext }

    // const [cantidadXCarro, setCantidadXCarro] = useState(0)
    // const [cartProducts, setCartProducts] = useState([])
    // const [quantitiSelected, setQuantitiSelected] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(0)

    // const removeProductToCart = (product) => {

    //     const index = cartProducts.find(uno => uno.id === product.id);


    //     setCantidadXCarro(cantidadXCarro - index.qty)
    //     const newCarrito = cartProducts.filter((index) => index.id !== product.id);

    //     setCartProducts([...newCarrito]);
    //     console.log(cartProducts)

    // }




    // const clear = () => {
    //     setCartProducts([])
    //     setCantidadXCarro(0)
    //     setTotalPrice(0)
    // }

    // const isInCart = (id) => {

    //     if (cartProducts.some(uno => uno.id == id)) {
    //         return (
    //             console.log("TRUE")
    //         )
                
    //     } else {
    //         console.log("FALSE")
    //     }
    // }


    // //      let isInCart = cartProducts.find(uno => uno.id == product.id)
    // //  if(!isInCart){


    // const addProductToCart = (product, qty) => {
    //     let subtotal2 = product.price * qty 
    //     setTotalPrice(totalPrice + subtotal2)
    //     setCantidadXCarro(cantidadXCarro + qty)
    //     if (cartProducts.some(uno => uno.id == product.id)) {

    //         let index = cartProducts.findIndex(uno => uno.id == product.id)



    //         let itemPF = cartProducts[index]
    //         itemPF.qty = itemPF.qty + qty

    //         const newCarrito = [...cartProducts]
    //         newCarrito.splice(index, 1, itemPF)

    //         setCartProducts([...newCarrito])


    //     } else {

    //         let itemF = { ...product, qty }
    //         setCartProducts([...cartProducts, itemF]);
    //     }
    // }


    // const removeONEProductToCart = (product, qty) => {
    //     setCantidadXCarro(cantidadXCarro - qty)
    //     if (cartProducts.some(uno => uno.id == product.id)) {

    //         let index = cartProducts.findIndex(uno => uno.id == product.id)
    //         let itemPF = cartProducts[index]
    //         itemPF.qty = itemPF.qty - qty

    //         const newCarrito = [...cartProducts]
    //         newCarrito.splice(index, 1, itemPF)

    //         setCartProducts([...newCarrito])


    //     }
    // }



    // // setCartProducts(cartProducts => [...cartProducts, product])
    // console.log(cartProducts)

    // const dataa = {
    //     cartProducts,
    //     cantidadXCarro,
    //     setCantidadXCarro,
    //     isInCart,
    //     removeProductToCart,
    //     removeONEProductToCart,
    //     addProductToCart,
    //     setQuantitiSelected,
    //     clear,
    //     totalPrice,
    //     quantitiSelected
    // }    

