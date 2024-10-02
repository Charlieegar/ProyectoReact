import React from "react";
import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks/useProductsByCategory";
import { Flex, Spinner, Box } from "@chakra-ui/react";

export const Category = () => {
    const { categoryId } = useParams();
    const { products, Loading,} = useProductsByCategory(categoryId);
    return Loading === true ?
    (
        <Flex width={'100%'} height={'90vh'} alignItems={'center'} justifyContent={'center'}>
            <Spinner size={"xl"} />
        </Flex>
    ) :
    (
        <Box>
            <ItemListContainer  products={products} />
        </Box>
    );
};
