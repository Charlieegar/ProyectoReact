//MainRouter ES EL ARCHIVO DONDE VAN LAS RUTAS DE NAVEGACION DE NUESTRO PROYECTO

import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Category, Home, Nosotros, Checkout, Pago } from "../pages"
import { Navbar } from "../components"
import { Detalles } from "../pages/Detalles"






export const MainRouter = () => {
    return (
        //CON ESTA FUNCION SOBRE LA NAVEGACION, SE VA A RETORNAR UN BrowserRouter, QUE CONTIENE UN Routes (Lista de rutas), QUE CONTIENE RUTAS. A CADA RUTA SE LE DA UN 'path' QUE ES EL CAMINO DE LA RUTA, Y UN ELEMENTO.
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path="/Detalles/:id" element={<Detalles/>}/>
                <Route path="/categories/:categoryId" element={<Category/>}/>
                <Route path="/Checkout/" element={<Checkout/>}/>
                <Route path="/Pago" element={<Pago/>}/>
            </Routes>
        </BrowserRouter>
            
    )
}