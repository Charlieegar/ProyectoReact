import { Box } from "@chakra-ui/react";


const ItemListContainer = ({greeting}) => {
    return (
        <Box display={'flex'}  alignItems={'center'} justifyContent={'center'} fontSize={50} marginTop={150}>{greeting}</Box>
    )
}

export default ItemListContainer;