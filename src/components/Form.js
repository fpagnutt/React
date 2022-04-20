import React from 'react'
import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
import {Formik} from 'formik'


const Form = () => {
  const {carrito, calcTotal} = useContext(contexto)
  
  const finalizar = (valores) => {
    const orden = {
      buyer:{
        name: valores.name,
        email: valores.email
        },
      items: carrito,
      date: serverTimestamp(),
      total: calcTotal()
    }

    const ordenesCollection = collection(db, "orders")
    const pedido = addDoc(ordenesCollection, orden)
      
    pedido
    .then((resultado)=>{
      toast.success("Muchas gracias " + valores.name + ". Se envio la info de pago a : " + valores.email + ". Orden de compra: " + resultado.id, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: true,
      });
      
    })
    .catch(error=>{
      toast.error("El pedido no pudo ser realizado")
    })
  }
  
  return (
    <Formik
      initialValues={ {
        name: "",
        
        email:""
      }}
      validate={(valores)=>{
        let errores = {}

        if(!valores.name){
            errores.name = "Por favor ingrese su nombre"
        }else if(/^[a-zA-Z\s]{1,40}$/.test(valores.name) === false){
            errores.name = "Por favor ingrese un nombre valido"
        }

        if(!valores.email){
            errores.email = "Por favor ingrese su email"
        }else if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(valores.email) === false){
            errores.email = "Por favor ingrese un email valido"
        }
        return errores;
      }}
      onSubmit = {(valores, {resetForm}) => {
        resetForm()
        finalizar(valores)
      }}
    > 
      {({values, handleSubmit, handleChange, handleBlur, errors, touched} )=>(
        <form onSubmit={handleSubmit} id="form">
          <div>
            <h2>Por favor, complete los datos para finalizar con la compra</h2>
            <h4>Recibira en su correo electronico la informacion para continuar con el pago</h4>
          </div>
          <div className='paddingTop'></div>
          <div className='paddingTop'></div>
          <label htmlFor="name" className="textLabel paddingRight">Nombre</label>
          <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="inputs"
          />
          {touched.name && errors.name && <p className="error">{errors.name}</p>}
          <div className='paddingTop'></div>
          <label htmlFor="email" className="textLabel paddingRight">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="inputs"
          />
          {touched.email && errors.email && <p className="error">{errors.email}</p>}
          <div className='paddingTop'><button type='submit' className='btn btn-dark'>FINALIZAR COMPRA</button></div>
          <div className='listadoForm paddingTop'>
              {carrito.map((cart) => {
              return (
                <div >
                  <div key={cart.id} className="contItemForm">
                    <img className="imageItemForm" src={cart.image}></img>
                    <h5>Cantidad: {cart.cantidad}</h5>
                  </div>
                </div>    
                )
            })} 
          </div>  
        </form>
    )}    
    </Formik> 
     
  );
}

export default Form