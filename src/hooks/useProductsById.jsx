import { useEffect, useState } from "react";
import { getProductById } from "../services/productos";


export const useProductsById = (id) => {

    const [ProductData, setProductData] = useState(null);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id).then((res)=>{
            setProductData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })

    },[])
    return {ProductData, Loading};
}

