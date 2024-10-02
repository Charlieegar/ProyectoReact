
import { useProductsById } from "../hooks/useProductsById";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { useParams } from "react-router";
import { Flex, Spinner } from "@chakra-ui/react";


export const Detalles = () => {
    //EL PARAMETRO useParams ES UN HOOK QUE NOS PERMITE ACCEDER A LOS PARAMETROS DE LA URL
    const { id } = useParams();
    const { ProductData, Loading } = useProductsById(id);

    return Loading === true ?
        (
            <Flex width={'100%'} height={'90vh'} alignItems={'center'} justifyContent={'center'}>
                <Spinner size={"xl"} />
            </Flex>
        ) :
        (

            <ItemDetailContainer product={ProductData}/>


        );
}


