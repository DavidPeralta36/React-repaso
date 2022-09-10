//importaciones
import React from 'react'

import { dtusr } from '../helpers/User'



const Usuariolocal = () => {
//no hay ningun proceso antes del return
  return (
    <div>
      <h2>Usuarios locales</h2>
      
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

export default Usuariolocal
