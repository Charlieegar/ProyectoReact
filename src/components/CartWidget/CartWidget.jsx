import {Center, Flex, Img, Text} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";

const CartWidget = ()=> {
    return(
        <Flex alignItems={'center'}> 
            <BsCart size={25}/>
            <Text marginLeft={2}>0</Text>
        </Flex>

    )
}

export default CartWidget;