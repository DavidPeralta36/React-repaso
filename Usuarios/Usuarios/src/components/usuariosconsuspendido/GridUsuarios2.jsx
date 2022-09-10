import React from 'react'
import { useEffect, useState } from "react";
import { ListaUsuarios2 } from './Listausuarios2';


export const GridUsuarios2 = ({limiteUsuarios}) => {

    const urlAPI =`https://randomuser.me/api/?results=${limiteUsuarios}`;
    
    const [dtusr, setdtusr]= useState([])

    const getUsr = async ()=>
    {
        const data = await fetch(urlAPI);
        const {results} = await data.json()
        const nuevousr = results.map( usr => {
            return {
              id: usr.login.uuid,
              first: usr.name.first,
              last: usr.name.last,
              gender: usr.gender,
              photo: usr.picture.medium,
              active: true,
            }
          })
        setdtusr(nuevousr)
    };
    useEffect(()=>
    {
        getUsr()
    },[])

    const cambiarAct = (id)=>{
        const nuevousr = dtusr.filter(usuario => usuario.id === id)
        nuevousr[0].active = !nuevousr[0].active
        setdtusr([...dtusr])
    }
  return (
    <>
        <h1>Usuarios Random </h1>
        <div className='grid'>
        
            <ListaUsuarios2 dtusr={dtusr} cambiarAct={cambiarAct} />
         
      
        </div>
    </>
    
  )
}
