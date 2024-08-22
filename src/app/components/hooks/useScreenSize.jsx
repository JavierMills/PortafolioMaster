'use client'
import React, { useEffect, useState } from 'react'

const useScreenSize = () => {

    // manejamos el estado inicial 
    const [screenSize, setScreenSize] = useState();

    console.log(screenSize, 'screenSize')
    console.log(setScreenSize, 'setScreenSize')

    // creamos un efecto para manejar el estado inicial de el resice de la ventana 
    useEffect(() => {

        // obtenemos el ancho de la pantalla
        function getSreenResize(){
            return window.innerWidth;
        }
// manejamos el cambio de la ventana
        function handleResize(){
            // seteamos el valor de la ventana incial 
            setScreenSize(getSreenResize())
        }
// invocamos la funcion 
        handleResize()

        // agregamos el cambio de evento, al tamaño de la pantalla
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
     
    }, [])
    

    return screenSize;
 
}

export default useScreenSize