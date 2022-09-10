import React from 'react'
import { useEffect, useState } from 'react';


const url = 'https://randomuser.me/api/?results=3';
const dtinicial= {
    results : [],
    info: []
}

const getUsuarios = new Promise((resolve, reject)=>
{
    fetch (url).then (data => 
        {
            data.json().then(resultado=>
                {
                    resolve(resultado)
                })
        })
})
    


export const UserPromesa = () => {
  const [dtusr, setdtusr] = useState(dtinicial)
  
  useEffect (()=>
  {
    getUsuarios.then(usuarios => setdtusr(usuarios))
  },[])

  return (
    <div>
      <h2>Usuarios por promesa</h2>
      
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
