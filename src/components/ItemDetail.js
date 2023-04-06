
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import CartProvider, { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import Modal from './Modal'


const ItemDetail = ({ data }) => {

    const { id, title, type, description, image, image2, image3, qty, category, filtradito, price, stock } = data
    const { addProductToCart, cartProducts, clear, removeProductToCart, quantitiSelected, setQuantitiSelected, setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)

    const { categoryid, todos } = useParams()
    const [imagensita, setImagensita] = useState('')
    const [fotoGrande, setFotoGrande] = useState(1)
    const [modaleState, setModalState] = useState(false)
    const [processToAdd, setProcessToAdd] = useState(false)
    const [unidadesAComprar, setUnidadesAComprar] = useState(1)

    const en12cuotasSub = (price / 12);
    const en12cuotas = en12cuotasSub.toFixed(2);


    var contadordeunidad = 1;

    const restaUnidad = ()=>{
        if(unidadesAComprar>1){
            contadordeunidad = unidadesAComprar
            contadordeunidad = contadordeunidad-1
            setUnidadesAComprar(contadordeunidad) 
        } 
    }

    const sumaUnidad= (id)=>{
       
        if(unidadesAComprar<stock){ 
            contadordeunidad = unidadesAComprar
            contadordeunidad = contadordeunidad+1
            setUnidadesAComprar(contadordeunidad) 
        }
        
    }

    const onSubmitDetalle = () => {
        console.log("Tocaste Boton   detalle producto")
    }

    const onSubmitComprar = () => {
        console.log("Tocaste Boton   COMPRAR")
        console.log("producto: ", data)
        console.log("cantidad: ", quantitiSelected)
        console.log("aaa: ,", cantidadXCarro)
        console.log("Array del changito", cartProducts)
        qty = quantitiSelected;
        // setQtySelect(counter)
        //  CantidadXCarro(counter)
        // addProductToCart(productData,counter)

    }

    const onSubmitChangePicture1 = () => {
        setFotoGrande(1)
    }

    const onSubmitChangePicture2 = () => {
        setFotoGrande(2)
    }
    const onSubmitChangePicture3 = () => {
        setFotoGrande(3)
    }





    const onModal1 = () => {
        setModalState(true)
        setImagensita(image)
    }

    const onModal2 = () => {
        setModalState(true)
        setImagensita(image2)
    }

    const onModal3 = () => {
        setModalState(true)
        setImagensita(image3)
    }

    return (
        <>
            {id != null ? <>
            <section className='sectorArriba'> 
            <section className='sectorFotos'>
            <section className='sectorFotoGrande'>

            <img src={`../assets/img/${image}`} onClick={onModal2} alt="Imagen producto" /><br></br>
            </section>

            <section className='sectorFotochicas'>
                <p>aca va galeria</p>

            </section>


            </section>
            <section className='sectorOpciones'>
            <h1 className="btn2"> {title}</h1><br></br>
            <h6 style={{ width: "50%" }} > {description}</h6>
            {/* <span className="btn2 btn btn-primary"> {description}</span><br></br> */}
            <span className="btn2 btn " style={{ backgroundColor: "black", color: "white", cursor: "auto" }} >{price} $ </span><br></br>
            
            
         
 
                             
                            
                <ItemCount  productData={data} stock={stock} initial={1} />

            </section>
            </section> 
            <section className='sectorAbajo'> 
                <div>
                    <h3>{description}</h3>
                </div>
                
                </section> 

            </> : <><h1>NO EXISTE ESTE PRODUCTO</h1></>}


    
             






        </>
    )
}

export default ItemDetail

