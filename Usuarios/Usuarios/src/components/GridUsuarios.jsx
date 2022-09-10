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


          <ListaUsuarios dtusr={dtusr}/>
        </div>
    </>
    
  )
}
