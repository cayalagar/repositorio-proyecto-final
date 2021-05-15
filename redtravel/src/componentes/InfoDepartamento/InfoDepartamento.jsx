import React from "react"
import Presentacion from "./Presentacion/presentacion"
import Atractivos from "./Atractivos/atractivos"
import Info from "./Info/Info"
import "./InfoDepartamento.css"

function InfoDepartamento(){
    return(
        <>
        <Presentacion/>
        <Info/>
        <Atractivos/>
        </>
    )
}
export default InfoDepartamento