import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/productos";

export const useProductsByCategory = (id) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsByCategory(id)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) =>{
                console.log(error);
            });
        
    }, [id]);

    return {products};
};