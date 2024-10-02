import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";



export const useProductsByCategory = (id) => {
    const [products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(true)
    const [Error, setError] = useState(false)

    useEffect(() => {
        console.log("categoryId:", id); // Verifica el ID de categoría recibido

        //QUERY NOS PERMITE HACER UNA CONSULTA MEDIANTE PARAMETROS, EN ESTE CASO LOS PARAMETROS SON collection y where. WHERE, LO QUE HACE ES BUSCAR ALGO QUE 'COINCIDA'  CON ALGO
        const CustomQuery = query (
            collection (db, "products"),
            where("category", "==", id)
        )
        
        getDocs (CustomQuery)
            .then(
                (snapshot) => {
                    setProducts(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()}) ));
                }
            )
            .catch(() => setError(true))
            .finally(()=> setLoading(false))
        
    }, [id]);

    return {products, Loading};
};