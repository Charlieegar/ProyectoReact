import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


export const useCategory = () => {
    const [Category, setCategory] = useState([]);
    const [Loading, setLoading] = useState(true)
    useEffect (() => {
        const ProductsCollection = collection(db, "categories")
        getDocs(ProductsCollection)
            .then(
                (snapshot) => {
                    setCategory(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()}) ));
                }
            )
            .catch(() => setError(true))
            .finally(()=> setLoading(false))

    }, [])
    return {Category, Loading}
}