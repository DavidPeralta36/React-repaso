import React from 'react'
import  Card  from './Card'

const Listausuarios = ({dtusr}) => {

  return (
    <>
      {
        dtusr.results.map(usuario => (
            <Card key={usuario.login.uuid} usuario= {usuario}/>
        ))
      }
    </>
  )
}

export default Listausuarios
