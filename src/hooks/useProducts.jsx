import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productos";



export const useProducts = () => {
    //GENERAMOS EL EL ESTADO DONDE VAMOS A ALMACENAR LOS PRODUCTOS DE LA API. EN ESTE PUNTO SOLO CREAMOS EL ESTADO (esta vacio)
    const [ProductsData, setProductsData] = useState([]);
    const [Loading, setLoading] = useState(true);
    //LLAMAMOS A LA FUNCION PARA OBTENER LOS PRODUCTOS DE LA API, CON EL useEffect PARA QUE SE LLAMEN LOS PRODUCTOS LUEGO DE RENDERIZARSE EL COMPONENTE
    useEffect(() => {
        //then  SE USA PARA LA RESPUESTA POSITIVA
        getAllProducts().then((res) => {
            if (res.status === 200) {
                //EN ESTE PUNTO ACTUALIZAMOSEL ESTADO CON LA INFORMACION DE LA API
                setProductsData(res.data.products)
            } else {
                console.log(error)
            }
        })
            // cath SE USA PARA LA RESPUESTA NEGATIVA
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { ProductsData, Loading }

}