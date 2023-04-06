import '../Styles/App.sass'
import '../Styles/App.css'
import db from '../firebaseConfig'

import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import { useState , useEffect} from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext';

import swal from 'sweetalert';


const Registrarse = () => {

    const { listaDeUsarios, setListaDeUsarios, showCart, setShowCart, setHayUsuario, hayUsuario, showLogIn, setshowLogIn, busqueda, setbusqueda, showLogin, setShowLogin, showModal, setShowModal, showSalir, setShowSalir, showRegistrarse, setShowRegistrarse, userOK, setUserOK, formDataUser, setFormdataUser
    } = useContext(CartContext)


    const [existeUsuario, setExisteUsuario] = useState(false)

    const usuariosOK = []
    const usuariosOK2 = [{
        name: '',
        phone: '',
        email: '',
        password: ''
    }]

    const [formData, setFormdata] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        date: new Date().toLocaleString(),
    })



    // TO-DO-0  USAR USEEFFECT ??

    
    useEffect(() => {
// TO-DO-1  FUNCION PARA TRAER LOS USUARIOS
        const traerdatosDeUsuario = async () => {
            const collectionUser = collection(db, 'users')
            const usuariosDB = await getDocs(collectionUser)
                .then(res => setListaDeUsarios(res.docs.map((uno) => {
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))
    
            }




    
 


    }, [])
    
    
  
              // TO-DO-2 FUNCION PARA AGREGAR UN USUARIO A COLLECCION

    // pushUserstoFireabase  = async (formData)
    const pushUserstoFireabase = async (newOrder) => {
        const collectionUser = collection(db, 'users')

        const usuariosDB = await addDoc(collectionUser, formData)

        funcionQueSeteaCosas()
        console.log('usuariosDB', usuariosDB)

    }






    
    // FUNCION QUE SETEA COSAS
    const funcionQueSeteaCosas = () => {
        setHayUsuario(true)
        setUserOK(formData)
    }







    

    // TO-DO-3  FUNCION CUANDO TOCAMOS EL SUBMIT DEL FORMULARIO

    const onsubmitfuntion = (e) => {
        // consultandooo()

        {
            listaDeUsarios.map((user) => {

                if (user.email == formData.email) {
                    swal(`existe  ${formData.email}  ! aca tengo que codear la parte de que este bien la contraseña `)
                    if (user.password == formData.password) {
                        swal("entro correcto")
                    } else {
                        swal("contraseña INCORRECTA")
                    }
                    swal("entro correcto")

                } else {
                    //  TO-DO-5 ESTO POR AHI ME CAGA TODO ????? 
                pushUserstoFireabase()
                }
            })
        }

        e.preventDefault()
    }


  
       

    

        // TO-DO-4  FUNCION QUE SETEA EN FORMDATA LO QUE EL USUARIO VA ESCRIBIENDO.  
        const handleChange = (e) => {
            e.preventDefault()
            console.log("--SE PONE EN ....   : ", e.target.name)
            console.log("->>EL VALOR DE ....: ", e.target.value)
            setFormdata({ ...formData, [e.target.name]: e.target.value })
    
    
        }
    








    // const pushUserstoFireabase = (e) => {
    //     var aleatorio = Math.random()
    //     console.log("jajajja")
    //     console.log("formData", formData)
    //     // cambia formData (los valores de adentro) , pero siempre me muestra ese formData (uno solo)
    //     usuariosOK2.push({ ...usuariosOK2, formData })
    //     // usuariosOK  = usuariosOK.concat(usuariosOK2)
    //     console.log("usuariosOK :: ", usuariosOK)
    //     console.log("usuariosOK2 :: ", usuariosOK2)
    //     e.preventDefault()

    //     swal("formData", formData);
    // }







    //



    //         getDocs(queryFilter)
    //             .then(res => setListProducts(res.docs.map((uno) => {
    //                 let product = uno.data()
    //                 product.id = uno.id
    //                 return product
    //             })))
    //     } else {
    //         getDocs(queryCollection)
    //             .then(res => setListProducts(res.docs.map((uno) => {
    //                 let product = uno.data()
    //                 product.id = uno.id
    //                 return product
    //             })))

    //     }
    // }, [categoryid])




    //


    //     if ( && formData) {
    //     setUsuariosOK(usuariosDB.id)
    //     console.log('usuarios:  ', usuariosDB)
    //     console.log('usuario nuevo:', usuariosOK)
    //     setHayUsuario(true)
    // } if () {

    // } 


    //////////



    // if (hayUsuario) {
    //     const collectionUser = query(collectionUser, where("email", "==", formData.email))
    //     console.log("GGGGGGGGGGGGGGGGGGG",collectionUser )
    // }
    ////////////




    return (
        <>
            {hayUsuario ? <>
                <h3> Bienvenido {formData.email}</h3>




                {existeUsuario ? <p>encontro uno !</p> : <Link to="/home" className="ptext" href="#">Productos</Link>}



            </> : <>


                <h3>Formulario de Registro</h3>


                <form
                    onSubmit={onsubmitfuntion}
                // onSubmit={() => pushUserstoFireabase({ formData })}
                >
                    Name<input className='inputt' type='text'
                        name='name'
                        placeholder='nombre'
                        value={formData.name}
                        onChange={handleChange}
                    /><br />



                    Apellido <input className='inputt' type='text'
                        name='apellido'
                        placeholder='apellido'
                        value={formData.apellido}
                        onChange={handleChange}
                    /><br />

                    Phone<input className='inputt' type='number'
                        name='phone'
                        placeholder='telefono'
                        value={formData.phone}
                        onChange={handleChange}
                    /><br />

                    Card<input className='inputt' type='number'
                        name='card'
                        placeholder='card'
                        value={formData.card}
                        onChange={handleChange}
                    /><br />

                    Card-Code<input className='inputt' type='number'
                        name='code'
                        placeholder='card-code'
                        value={formData.cardcode}
                        onChange={handleChange}
                    /><br />

                    Adress<input className='inputt' type='text'
                        name='direccion'
                        placeholder='direccion'
                        value={formData.adress}
                        onChange={handleChange}
                    /><br />


                    Other<input className='inputt' type='text'
                        name='otro'
                        placeholder='otro'
                        value={formData.other}
                        onChange={handleChange}
                    /><br />


                    Email<input className='inputt' type='email'
                        name='email'
                        placeholder='correo electronico'
                        value={formData.email}
                        onChange={handleChange}
                    /><br />


                    Check Email<input className='inputt' type='email'
                        name='email2'
                        placeholder='Confirme correo electronico'
                        value={formData.email2}
                        onChange={handleChange}
                    /><br />

                    Password<input className='inputt' type='password'
                        name='password'
                        placeholder='Confirme correo electronico'
                        value={formData.password}
                        onChange={handleChange}
                    /><br />

                    Check Password<input className='inputt' type='password'
                        name='password2'
                        placeholder='Confirme correo electronico'
                        value={formData.password2}
                        onChange={handleChange}
                    /><br />



                    {(formData.name != "" && formData.password2 != "" && formData.password != "" && formData.apellido != "" && formData.phone != "" && formData.email != "" && formData.email == formData.email2 && formData.password == formData.password2) ?
                        <> <br /> <button type="submit" > INGRESAR</button></>
                        : <><br /> <h4>Ingresa todos los datos con (*) asteriscos .</h4>
                            <h4> Las constraseñas deben coincidir.</h4></>}




                </form>


            </>}</>

    )


}

export default Registrarse