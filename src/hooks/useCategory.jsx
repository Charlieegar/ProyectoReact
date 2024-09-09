import { useEffect, useState } from "react"
import { getCategories } from "../services/productos";

export const useCategory = () => {
    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((response) => { 
                setCategories(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    },[])

    return {Categories}
    
}