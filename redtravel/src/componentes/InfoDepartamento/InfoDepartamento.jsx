import React from "react"
import Presentacion from "./Presentacion/presentacion"
import Atractivos from "./Atractivos/atractivos"
import Info from "./Info/Info"

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