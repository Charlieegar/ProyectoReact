import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";




export const useProductsById = (id) => {

    const [ProductData, setProductData] = useState({});
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const ProductItem = doc(db, "products", id)
        getDoc(ProductItem)
            .then(
                (snapshot) => {
                    setProductData({id: snapshot.id, ...snapshot.data()})
                }
            )
            .catch((error) => {console.log(error)})
            .finally(() => setLoading(false))

    },[])
    return {ProductData, Loading};
}



// getProductById(id).then((res)=>{
//     setProductData(res.data)
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     setLoading(false)
// })

