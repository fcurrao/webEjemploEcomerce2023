
import CartProvider, { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import "../pages/pages.css"
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import { useState, useEffect } from 'react'
import db from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

import swal from 'sweetalert';


const Checkout = () => {
    let total = 0
    let subtotal = 0
    const { cartProducts, clear, removeProductToCart } = useContext(CartContext)
    const { totalPrice } = useContext(CartContext)
    const [succes, setSucces] = useState()
    const [unidadesAComprar, setUnidadesAComprar] = useState()
    const [showModal, setShowModal] = useState(false)
    const [order, setOrder] = useState({
        items: cartProducts.map((product => {
            return {
                id: product.id,
                title: product.title,
                qty: product.qty,
                price: product.price
            } 
        })),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })

    const [formData, setFormdata] = useState({

        name: '',
        phone: '',
        email: '',

    })

    // w.target.name (queda: name, phone y email)
    const handleChange = (e) => {
        console.log("valor ingresado por el usuario, TARGET : ", e.target)
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }



    const submitData = (e) => {
        console.log("formData.email 1y2 : ", formData.email, formData.email2)
        if (formData.email == formData.email2) {
            e.preventDefault()
            console.log("order para enviar:", { ...order, buyer: formData })
            pushDatatoFireabase({ ...order, buyer: formData })
        } else {
            e.preventDefault()

            swal("Los emails no coinciden");
        }
    }

    const pushDatatoFireabase = async (newOrder) => {
        const collectionOrder = collection(db, 'OrdenDeCompra')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSucces(orderDoc.id)
        console.log('ORDER GENERADA ', orderDoc)
        clear()
    }

 
    return (
        // <>hola</>
        
        <>

            <section>
              
                <h1  style={{margin:"5px", fontSize:"30px",justifyContent:"center", display:"flex", fontFamily:"Poppins"}}  >Tu Carrito  </h1>
                {cartProducts.length !== 0 ? <>
                    <div style={{ scale: "0.82" , justifyContent:" space-evenly", flexWrap:"wrap", flexDirection:"row", display:"flex"}}>
                    

                        {cartProducts.map((product) => {
                            {
                                subtotal = product.price * product.qty;
                                total = subtotal + total
                            }
                            return <>
                           
                                <div 
                                style={{ boxShadow: "30px 0  30px black", margin:"40px", width:"min-content" }}
                                 className="item-product hoverr">
                                     <div style={{ scale: "1.1",     display: "flex",    flexDirection: "column",    flexWrap: "nowrap",    alignItems: "center"
}} className="item-product2" >
                                    <img   style={{width:"90%"}} src={`../assets/img/${product.image}`} alt="Imagen producto" />
                                    {/* {namee} */}
                                   
                                        <span className="chiquito1 badge badge-warning">{product.category}</span>
                                        {/* <p className='description2'>Producto Organico</p> */}
                                        <h4 >{product.title}</h4> 
                                        {/* <button onClick={()=>restaUnidad(unidadesAComprar,product.id)}>-</button> */}
                                        <h6 className='description2 azul'> {product.qty} unidades </h6>
                                        {/* <button onClick={()=>sumaUnidad(unidadesAComprar,product.id, product.stock)}>+</button> */}
                                       
                                                                                 <h6 className='description2'>$ {product.price}</h6>
                                        <span className="btn2 btn btn-primary"> Total: {subtotal} </span> 
                                        <div style={{margin:"35px", display:"flex"}}>
                                            <button   className="btn btn-group2 bttn" onClick={() => removeProductToCart(product)}>Remover</button>
                                            <Link to={`/productos/${product.id}`}>
                                                <button  className="btn btn-group2 bttn" >Agregar mas</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </>
                            
                        })}
                        
                    </div>
                    <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}> 
                        <h3 className='margin2 float-left'>Total del Carro: {total} $</h3>
                       


                    </div>
                    <div  style={{display:"flex", flexDirection: "row", justifyContent:"center", margin:"10px"}} className='medioo'> 
                    <button  style={{  margin:"10px"}}  className="btn-success btn btn-group2 bttn  float-left margin3" onClick={() => setShowModal(true)}> Continuar PAGO</button>
                    <Link to={`/productos`}>
                        <button style={{  margin:"10px"}}  className="btn-primary btn btn-group2 bttn  float-left margin3 cvred"> Seguir comprando ...</button>
                    </Link>
                    </div>
                    <div  style={{display:"flex", flexDirection: "row", justifyContent:"center", margin:"10px"}} className='medioo'> 
                        <button  style={{  margin:"10px"}} className="btn-dark btn btn-group2 bttn float-left margin4"> Mas Info</button>
                        <button  style={{  margin:"10px"}}  className="btn-danger btn btn-group2 bttn  float-left margin4 red" onClick={clear}>Limpiar Carrito</button>
                    </div>
                                    <img className='margin2' style={{width:"100%"}}   src={`../assets/img/otras/tarjetas.png`} alt="Imagen tarjetas" />
                </> : <div style={{display:"flex", flexDirection: "column"}}>
                    <h2 style={{textAlign:"center"}} className='margin2 float-left'>  No hay ítems en el carro</h2>
                  <div  style={{justifyContent:"center", display:"flex"}} >  <Link to={`/productos`}>
                        <button   className="btn btn-group2 bttn  float-left margin3"> Comprar Productos </button>
                    </Link></div>
                </div>
                }
            </section>
            {showModal && <Modal title="Datos de contacto" setModalState={() => setShowModal(false)}>

       
                {succes ? <>
                    <h3>Su orden fue Generada correctamente  </h3><br />
                    <p> Id de compra: <h2 className='red'>{succes}</h2></p><br></br>
                    
                    <h5>Muchas Gracias  </h5><br />
                </> : <>

                *******************************
                        <h5>FACTURA:</h5>
                    {cartProducts.map((product) => { 
                         {
                            subtotal = product.price * product.qty;
                           
                        }
                            return <>
                           
                        {product.title} ➡ {product.qty}x{product.price} $  = {subtotal}$   <br></br>
                        </>})}
                        <h5>   Total del Carro: {total}💲</h5>
                        *******************************

                    <h3>Formulario de compra</h3>
                    <form onSubmit={submitData}>
                        Name<input className='inputt' type='text'
                            name='name'
                            placeholder='nombre'
                            value={formData.name}
                            onChange={handleChange} /><br />
                        Apellido <input className='inputt' type='text'
                            name='apellido'
                            placeholder='apellido'
                            value={formData.apellido}
                            onChange={handleChange} /><br />
                        Phone<input className='inputt' type='number'
                            name='phone'
                            placeholder='telefono'
                            value={formData.phone}
                            onChange={handleChange} /><br />
                        Card<input className='inputt' type='number'
                            name='card'
                            placeholder='card'
                        //  value={formData.phone}
                        //  onChange={handleChange}
                        /><br />
                        Card-Code<input className='inputt' type='number'
                            name='code'
                            placeholder='card-code'
                        //  value={formData.phone}
                        //  onChange={handleChange}
                        /><br />
                        Adress<input className='inputt' type='text'
                            name='direccion'
                            placeholder='direccion'
                        //  value={formData.phone}
                        //  onChange={handleChange}
                        /><br />
                        Other<input className='inputt' type='text'
                            name='otro'
                            placeholder='otro'
                        //  value={formData.phone}
                        //  onChange={handleChange}
                        /><br />
                        Email<input className='inputt' type='email'
                            name='email'
                            placeholder='correo electronico'
                            value={formData.email}
                            onChange={handleChange} /> <br />
                        Check Email<input className='inputt' type='email'
                            name='email2'
                            placeholder='Confirme correo electronico'
                            value={formData.email2}
                            onChange={handleChange} /><br />
                        {(formData.name != "" && formData.apellido != "" && formData.phone != "" && formData.email != "") ?
                            <button  className="btn-success btn" style={{margin:"15px"}} type="submit" > COMPRAR</button>
                            : <></>}
                    </form></>}
            </Modal>}
        </>
    )
}



export default Checkout