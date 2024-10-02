import { Flex, Text} from "@chakra-ui/react";
import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



export const CartWidget = ()=> {

    const {CartState} = useContext(CartContext)


    const qtyTotalProducts = CartState.reduce((acc, item) => acc + item.qtyItem, 0)

    return(
        <Link to="/Checkout">
            <Flex alignItems={'center'}> 
                <BsCart size={25}/>
                <Text marginLeft={2}>{qtyTotalProducts}</Text>
            </Flex>
        </Link>
    )
};

