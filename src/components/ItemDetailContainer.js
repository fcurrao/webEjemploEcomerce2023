
import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import db from "../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { async } from "@firebase/util"
import { useContext } from 'react'
import CartProvider, { CartContext } from '../context/CartContext'

const ItemDetailContainer = ({ }) => {

    const { id } = useParams()
    const [productData, setProductData] = useState([])
    const { addProductToCart, cartProducts, clear, removeProductToCart, quantitiSelected, setQuantitiSelected , setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)


    // filterById()
    useEffect( () => {
        getProduct()
        .then((res) => {
            setProductData(res)
        })
    }, [id])



    


    // const filterById = () => {

    //     // filter o some
    //     products.some((product) => {
    //         if (product.id == id) {

    //             setProductData(product)

    //         }
    //     })
    // }


 

    // filtrar por categoria: 
// pero categoria === "nombre de la categoria"
// WHERE (diapositiva 59 - clase 11)


// const categorys = query(collection(db, "products"), where(" product.category, "==", "Almacen")

    const getProduct = async () => {
        const docRef = doc(db , 'products', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('product', product)
        return product
    } 



    return (

        <div>

            <ItemDetail data={productData} />


        </div>

    )
}

export default ItemDetailContainer