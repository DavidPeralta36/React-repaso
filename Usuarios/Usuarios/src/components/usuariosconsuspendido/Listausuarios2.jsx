import React from 'react'
import Card2 from './Card2'

export const ListaUsuarios2 = ({dtusr, cambiarAct}) => {
  return (
    <>
    {
        
        dtusr.map(usuario => (
            <Card2 key={usuario.id} usuario={usuario} cambiarAct={cambiarAct}/>
            
        ))
    }
    </>
    
  )
}
