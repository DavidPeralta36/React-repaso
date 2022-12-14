import React from 'react'
import { useEffect, useState } from "react";

//declaracion de constantes como el url y el objeto inicial
const url = 'https://randomuser.me/api/?results=3';
const initdt = {
  results: [],
  info: {}
}


export const Usuariofetch = () => {

  //set valor del objeto inicial en el dtusr
const [dtusr, setdtusr] = useState(initdt)
//obtener los datos y pasarlo a un tpo de dato legible
const getUsuario = ()=>
{
    fetch(url).then(resultado => resultado.json().then(resultado=> setdtusr(resultado)))
}

//Ejecutar el get
useEffect(()=> 
{
    getUsuario()
},[])

  return (
    <div>
      <h2>Usuarios por fetch</h2>
      
      {
        //map para recorrer el objeto recibido de helpers
        //dentro de los parentecis se pinta el resultado del recorrido
        dtusr.results.map(usuario => (
            <div key={usuario.login.uuid} usuario={usuario}>
                <img src={usuario.picture.medium} />
                <div>
                  <p>{usuario.name.first}{usuario.name.last}</p>
                </div>
            </div>
        ))
      }

    </div>
  )
}
