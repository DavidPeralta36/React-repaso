import React from 'react'

const Card = ({usuario}) => {
    //obtiene los datos de dtusr del listusuarios y los imprime en su respectivo control
  return (
    <div>
      <img src={usuario.picture.medium} />
      <p>{usuario.name.first}{usuario.name.last}</p>
    </div>
  )
}

export default Card
