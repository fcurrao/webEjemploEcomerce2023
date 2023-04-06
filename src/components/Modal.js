// import { Modal } from "bootstrap";
// import './Modal.css'
import { useContext } from 'react'
// import CartProvider, { CartContext } from '../../context/CartContext'


const Modal = ({ setModalState, children }) => {

    return (<>

          <div className='todoOpacity'>
          </div>
          <div className='contenedordeModal'>
             <div style={{width:"60%",  position:"absolute" , left:"20%"}}  className='modalCart'>
          <button className='btn-dark btn botonCerrar' style={{padding:0}}onClick={() => setModalState(false)}>X</button>
                <div><h3  style={{textAlign:"center" , marginBottom: "30px"}}className="ptext subtitulo" >{children}</h3></div>
            

             </div>
            </div>
        </> 
 
     
    )
}

export default Modal