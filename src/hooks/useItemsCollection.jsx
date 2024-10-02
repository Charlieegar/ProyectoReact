import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

//COMO YA ESTAMOS TRABAJANDO CON FIREBASE COMO BASE DE DATOS, LE PASAMOS categoryName COMO PARAMETRO PARA QUE ASI CUANDO LLAME LA FUNCION EN OTRO LADO, BASTE SOLO CON COLOCAR EL NOMBRE DE LA CATEGORIA PARA CARGAR LOS PRODUCTOS (products, categoes, etc)
export const useItemsCollection = (categoryName) => {
    //GENERAMOS EL EL ESTADO DONDE VAMOS A ALMACENAR LOS PRODUCTOS DE LA API. EN ESTE PUNTO SOLO CREAMOS EL ESTADO (esta vacio)
    const [ItemsData, setItemsData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(false)
    //LLAMAMOS A LA FUNCION PARA OBTENER LOS PRODUCTOS DE LA API, CON EL useEffect PARA QUE SE LLAMEN LOS PRODUCTOS LUEGO DE RENDERIZARSE EL COMPONENTE
    useEffect(() => {
        //YA TRABAJANDO CON FIREBASE, INICIALIZAMOS LA COLECCION CON LA CONSTANTE, AGREGANDO collection + dt (database) Y EL NOMBRE DE LA COLECCION CREADA EN FIREBASE
        const ProductsCollection = collection(db, categoryName)
        //getDocs ES UNA PROMESA, RECIBE COMO ARGUMENTO LA CONSTANTE (COLECCION) QUE CREAMOS ANTES, ENTONCES TRAEMOS LOS DOCUMENTOS DE DICHA COLECCION
        getDocs(ProductsCollection)
            //EL .then SE USA PARA LA RESPUESTA POSTIVIA
            .then(
                //CUANDO UNO BUSCA DATOS EN FIRESTORE LOS DEVUELVE TIPO snapsshot, ES COMO UNA FOTO DE LA BASE DE DATOS QUE TENEMOS EN LA NUBE
                (snapshot) => {
                    setItemsData(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()}) ));
                }
            )
            //EL .catch SE USA PARA LA RESPUESTA NEGATIVA
            .catch(() => setError(true))
            .finally(()=> setLoading(false))

    }, [categoryName])

    return { ItemsData, Loading, Error}

}








//ESTO ES LO QUE ESTABA DENTRO DEL useEffect antes, lo dejo como info nomas
//then  SE USA PARA LA RESPUESTA POSITIVA
// getAllProducts().then((res) => {
//     if (res.status === 200) {
//         //EN ESTE PUNTO ACTUALIZAMOSEL ESTADO CON LA INFORMACION DE LA API
//         setProductsData(res.data.products)
//     } else {
//         console.log(error)
//     }
// })
//     // cath SE USA PARA LA RESPUESTA NEGATIVA
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         setLoading(false)
//     })