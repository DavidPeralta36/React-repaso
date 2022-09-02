import React from 'react'

const Title = ({texto = 'Este no tiene texto'}) => {

  return (
    <div className='container text-center'>
      <h2>{texto}</h2>
    </div>
  )
}

export default Title
