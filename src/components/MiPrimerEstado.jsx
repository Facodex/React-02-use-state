import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    /*let nombre = "Facundo Benitez";
    
    const cambiarNombre = () =>{
        nombre = "Facodex";
    }
    ASI NO FUNCIONA SIN USESTATE
    */
   
    // 1) aqui crearemos una funcion para cambiar el estado de una variable
   const [nombre, setNombre] = useState("Facu");
   const cambiarNombre = e =>{
       if(nombre === "Facu"){
        setNombre("Facodex");
       }else{
        setNombre("Facu");
       }
   }

//    2) Aqui crearemos una funcion para ir mostrando lo que vamos escribiendo de manera reactiva
   const [nombreU, setNombreU] = useState("UsuarioCapo");
   const darNombreU = (e, usuario) =>{
       setNombreU(usuario);
   }




  return (
    <div>
        <h1>Componente: MiPrimerEstado</h1>
        <h2>Cambia el estado de la variable nombre</h2>
        <strong>{nombre}</strong>
        &nbsp;
        <button onClick={cambiarNombre}>Cambiar nombre</button>

        <h2>Escoge un nombre de usuario</h2>
        <strong>{nombreU}</strong>
        &nbsp;
        <input onChange={e => darNombreU(e, e.target.value)} />
    </div>
  )
}
