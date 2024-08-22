'use client'
import React, { useEffect, useState } from 'react';


//definimos el objeto donde s eestarann desarrollando las luciernagas el id lo ocuparemos para la key de map, top, letf para el pocisionamiento
const createFireFly = () => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random()*100}%`,
    animationDuration: `${Math.random()* 5 + 5}s`,
})

console.log(createFireFly, 'create')

const FireFliesBackground = () => {
//inicializamos el estado inicial de las luciernagas,que sera una matriz 
    const [fireflies, setFireflies] = useState([]);

    //efecto que estará creando luciernagas
    useEffect(() => {
        //funcion para crear luciernagas
     const addFireFlyPeriodicallly = () => {

        const newFireFly = createFireFly();
        setFireflies(currentFireflies => [
            ...currentFireflies.slice(-14),
            newFireFly

            
        ])
     }

     const interval = setInterval(addFireFlyPeriodicallly, 10000);


     return () => clearInterval(interval)
    }, [])
    

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
        {
            fireflies.map((firefly) => {
                
                return (
                    <div key={firefly.id} className='absolute rounded-full w-[15px] h-[15px] bg-firefly-radial' 
                    style={{
                        top: firefly.top,
                        left: firefly.left,
                        animation: `move ${firefly.animationDuration} infinite alternate`
                    }}>

                    </div>
                )
            })
        }
    </div>
  )
}

export default FireFliesBackground