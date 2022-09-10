import React from 'react'

const Card = ({usuario}) => {
    //obtiene los datos de dtusr del listusuarios y los imprime en su respectivo control
  return (
    <div className='card'>
      <img src={usuario.picture.medium}className="card-photo" />
      <div className='card-user'>
        <p className="card-first-name">{usuario.name.first}</p>
        <p className="card-last-name">{usuario.name.last}</p>
      </div>
      
    </div>
  )
}

export default Card
