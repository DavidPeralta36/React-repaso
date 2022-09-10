import React from 'react'
import Card from './Card'

export const ListaUsuarios = ({dtusr}) => {
  return (
    <>
    {
        //map para recorrer el objeto recibido de helpers
        //dentro de los parentecis se pinta el resultado del recorrido
        //se le pasa el contecto de los datos al card  como parametro y una key de indentificacion
        dtusr.results.map(usuario => (
            <Card key={usuario.login.uuid} usuario={usuario}/>
            /*
                <div key={usuario.login.uuid} usuario={usuario}>
                  <img src={usuario.picture.medium} />
                  <p>{usuario.name.first}{usuario.name.last}</p>
                </div>
            */
        ))
    }
    </>
    
  )
}
