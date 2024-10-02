import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons"
import { Box, Heading, Alert, AlertIcon, VStack, Flex, Image, Text, HStack, IconButton, Spacer, Divider, Button} from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"




export const CartDetails = () => {
    const {CartState, AddProduct, RemoveProduct, BorrarProducto, } = useContext(CartContext)
    const total = CartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0)
    
    return(
        
        <Box p={6} maxW="800px" mx="auto" height={"90vh"}>
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Resumen de la compra
            </Heading>

            {CartState.length === 0 ? (
                <Alert status="info" borderRadius="md">
                    <AlertIcon/>
                </Alert>
            ) : (
                <VStack spacing={4} align="stretch">

                    {CartState.map((item) => (
                        <Flex key={item.id} p={4} borderWidth="1px" borderRadius="md" alignItems="center" boxShadow="sm">
                            <Image src={item.thumbnail} alt={item.title} boxSize="100px" objectFit="cover" borderRadius="md" mr={4}
                            />
                            <Box flex="1">
                                <Text fontSize="xl" fontWeight="bold">
                                    {item.title}
                                </Text>
                                <HStack spacing={4} mt={2}>
                                    <Text>Precio: ${item.price.toFixed(2)}</Text>
                                    <HStack>
                                        <IconButton aria-label="Disminuir cantidad" icon={<MinusIcon/>} size="sm" onClick={() => RemoveProduct(item)} isDisabled={item.qtyItem <= 1}
                                        />
                                        <Text>{item.qtyItem}</Text>
                                        <IconButton aria-label="Aumentar cantidad" icon={<AddIcon/>} size="sm" onClick={()=> AddProduct(item)} isDisabled={item.qtyItem >= item.stock}
                                        />
                                    </HStack>
                                </HStack>
                            </Box>
                            <Spacer/>
                            <HStack>
                                <Text fontWeight="bold">
                                    Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
                                </Text>
                                <IconButton aria-label="Eliminar producto" icon={<DeleteIcon/>} colorScheme="red" variant="outline" onClick={() => BorrarProducto(item)}
                                />
                            </HStack>
                        </Flex>
                    ))}
                    <Divider/>
                    <Flex alignItems="center">
                        <Text fontSize="2xl" fontWeight="bold">
                            Total: ${total.toFixed(2)}
                        </Text>
                        <Spacer/>
                        <Link to="/Pago">
                            Continuar al Pago
                        </Link>
                    </Flex>
                </VStack>
            )}
        </Box>
    )
}