import React from 'react'
import { useEffect, useState } from "react";
import { ListaUsuarios } from './ListaUsuarios';


export const GridUsuarios = ({limiteUsuarios}) => {

    const urlAPI =`https://randomuser.me/api/?results=${limiteUsuarios}`;
    const dataInicial= {
    results: [],
    info: {}
    }
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
    <>
        <h1>Usuarios Random </h1>
        <div className='grid'>
        {
        //se le pasa el contesto a la lista del dtusr
        }
          <ListaUsuarios dtusr={dtusr}/>
          {
        /*
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
        */
      }
        </div>
    </>
    
  )
}
