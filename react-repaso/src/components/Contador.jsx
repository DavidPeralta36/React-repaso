import React from 'react'
import Title from './Title'
import { useState } from 'react'

export const Contador = ({ numInicial = 0}) => {
    const [contador, setContador] = useState(parseInt(numInicial));
    const [contador2, setContador2] = useState(0);

    //prueba commit escuela
  return (
    <>
        <div className ='bg-primary rounded-5 p-3 text-center text-light mt-2 '>
            <Title texto='Contador'/>
            <h2>Haz clickado {contador2} veces </h2>
            <h2> {contador}  </h2>
            <button className='btn btn-danger  '
                onClick={()=>{setContador(contador - 1),setContador2(contador2 +1)}}>Restar</button>
            <button className='btn btn-success'
                onClick={
                            ()=>
                                {
                                setContador(contador + 1), 
                                setContador2(contador2 +1)
                                }
                        }>Sumar</button>
        </div>
        
    </>
    
  )
}
