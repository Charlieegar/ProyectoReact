import { collection, addDoc } from "firebase/firestore";
import { getAllProducts } from "../services/productos";
import {db} from "./../firebase"

export async function createProductsFirestore(collectionName) {
    try {
        //OBTENER LOS PRODUCTOS DE LA API
        const response = await getAllProducts();
        const fetchedProducts = response.data.products;

        if (!Array.isArray(fetchedProducts)) {
            throw new Error("La respuesta de la API no es un array.")
        }

        //REFERENCIA A LA COLECCION DE FIRESTORE
        const productsCollection = collection(db, collectionName)

        //ANADIR LOS NUEVOS PRODUCTOS A FIRESTORE
        const addPromises = fetchedProducts.map ((product) => {
            delete product.id;
            addDoc(productsCollection, {
                ...product,
                createdAt: new Date(),
            })
        }
        )

        await Promise.all(addPromises);

        console.log(`${fetchedProducts.length} productos anadidos a firestore`)
    }
    catch (err){
        console.error("Error al obtener o almacenar productos:", err)
    }

    
    
}