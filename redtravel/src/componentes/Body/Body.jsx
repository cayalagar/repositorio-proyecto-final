import React from 'react'
import Busqueda from './../Busqueda/Busqueda'
import Referencias from './../Referencias/Referencias'
import Buscar from "./../Buscar/Buscar"
import "./Body.css"

const Body = () => {
    return (
        <div>
            <Busqueda/>
            <Buscar/>
            <Referencias/>
        </div>
    )
}

export default Body
