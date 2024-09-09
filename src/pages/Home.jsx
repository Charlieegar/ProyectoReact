import { Flex, Spinner, Box} from "@chakra-ui/react";
import { useProducts } from "../hooks";
import { ItemListContainer } from "../components";



export const Home = () => {
    const {ProductsData, Loading} = useProducts();
    // const {ProductData} = useProductsById();
    return Loading === true ?
    (
        <Flex width={'100%'} height={'90vh'} alignItems={'center'} justifyContent={'center'}>
            <Spinner size={"xl"} />
        </Flex>
    ) :
    (
        <Box>
            <ItemListContainer greeting={'Bienvenidos a BEfitnessUY!'} products={ProductsData} />
        </Box>
    );
};



