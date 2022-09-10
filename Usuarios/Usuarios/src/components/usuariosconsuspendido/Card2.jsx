import React from 'react'


const Card2 = ({usuario, cambiarAct}) => {

    const {id, first, last, photo, active, gender } = usuario

    const cambiaractivo = (id) => {
        cambiarAct(id   )
    }

    //obtiene los datos de dtusr del listusuarios y los imprime en su respectivo control
  return (
    <div className='card'>
      <img 
        src={photo}
        className={active?'card-photo':'card-photo suspendido'}
        onClick={()=>cambiaractivo(id)} />
      <div className='card-user'>
        {   (active)?
            <>
                <p className="card-first-name">{first}</p>
                <p className="card-last-name">{last}</p>
            </>
            :
            <p className="card-first-name">{
                (gender === 'male')?
                'Suspendido'
                :
                'Suspendida'
                }</p>
            
        }
        
      </div>
      
    </div>
  )
}

export default Card2
