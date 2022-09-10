import React from 'react'
import { useEffect, useState } from "react";

const urlAPI ='https://randomuser.me/api/?results=3';
const dataInicial= {
    results: [],
    info: {}
}


export const UsuarioAsyncAwait = () => {

    const [dtusr, setdtusr]= useState(dataInicial)

    const getUsr = async ()=>
    {
        const data = await fetch(urlAPI);
        const results = await data.json()
        setdtusr(results)
    };
    useEffect(()=>
    {
        getUsr()
    },[])
  return (
    <div>
      <h2>Usuarios por AsyncAwait</h2>
      
      {
        dtusr.results.map(usuario=>
            (
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
