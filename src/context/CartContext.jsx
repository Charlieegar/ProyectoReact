import { createContext, useState } from "react";


//DECLARAMOS EL CONTEXTO
export const CartContext = createContext(); //ESTA ES LA CONSTANTE QUE USAMOS EN OTROS COMPONENTES PARA OBTENER DATOS

//ESTA ES LA CONSTANTE QUE USAMOS PARA ENVOLVER OTROS COMPONENTES
export const CartProvider = ({ children }) => {

    //USAMOS ESTE HOOK PARA OBTENER LA ACTUALIZACION DE PRODUCTOS EN EL CARRITO, CON UN VALOR INICIAL CERO
    const [CartState, setCartState] = useState([]);

    //CREAMOS UNA CONSTANTE PARA QUE SUME Y OTRA PARA QUE RESTE PRODUCTOS DEL CARRITO
    const AddProduct = (product, qtyItem) => {

        const ProductoExistente = CartState.find((item) => item.id === product.id);
        if (ProductoExistente) {
            //SI EL PRODUCTO YA ESTA EN EL CARRITO ACTUALIZAMOS LA CANTIDAD, SUMANDO SOLO LA DIFERENCIA
            setCartState(
                CartState.map((item) =>
                    item.id === product.id ?
                        { ...item, qtyItem: item.qtyItem + 1 }
                        : item)
            )
        }else {
            //SI EL PRODUCTO NO ESTA EN EL CARRITO LO AGREGAMOS
            setCartState([...CartState, {...product, qtyItem}])
        }

    }
    const RemoveProduct = (product) => {
        const ProductoExistente = CartState.find((item) => item.id === product.id);

        if (ProductoExistente){
            //SI LA CANTIDAD DEL PRODUCTO ES 1, ELIMINAMOS EL PRODUCTO DEL CARRITO
            if (ProductoExistente.qtyItem === 1){
                setCartState(CartState.filter((item)=>item.id !== product.id))
            }else {
                //SI LA CANTIDAD ES MAYOR A 1, RESTAMOS 1 A LA CANTIDAD EXISTENTE
                setCartState(
                    CartState.map((item)=>
                        item.id === product.id ?
                            {...item, qtyItem: item.qtyItem - 1} :
                            item)
                )
            }
        }
    }

    const BorrarProducto = (product) => {
        setCartState(CartState.filter((item) => item.id !== product.id));
    }
    return (
        <CartContext.Provider value={{ CartState, AddProduct, RemoveProduct, BorrarProducto }}>
            {children}
        </CartContext.Provider>
    );

};