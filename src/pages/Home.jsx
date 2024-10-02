import { Flex, Spinner, Box} from "@chakra-ui/react";
import { useItemsCollection} from "../hooks";
import { ItemListContainer } from "../components";



export const Home = () => {
    const {ItemsData, Loading} = useItemsCollection("products");
    // const {ProductData} = useProductsById();
    return Loading === true ?
    (
        <Flex width={'100%'} height={'90vh'} alignItems={'center'} justifyContent={'center'}>
            <Spinner size={"xl"} />
        </Flex>
    ) :
    (
        <Box>
            <ItemListContainer  products={ItemsData} />
        </Box>
    );
};



