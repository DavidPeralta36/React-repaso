import React from 'react'
import Listausuarios from './Listausuarios'
import { dtusr } from '../helpers/User'



const Usuariolocal = () => {

  return (
    <div>
      <h2>Usuarios locales</h2>
      
      {
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
