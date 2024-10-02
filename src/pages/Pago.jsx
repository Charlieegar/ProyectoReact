
import { Flex, Input, Button, VStack, Heading, Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/CartContext"

export const Pago = () => {
    const { colorMode } = useColorMode();
    const [Nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")
    const [Email, setEmail] = useState("")
    const { CartState } = useContext(CartContext)
    const total = CartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0)

    const CrearOrden = () => {
        const OrdenObj = {
            Comprador: {
                Nombre: Nombre,
                Apellido: Apellido,
                Correo: Email
            },
            items: CartState.map((item) => {
                return {
                    Id: item.id,
                    Nombre: item.title,
                    Precio: item.price,
                    Cantidad: item.qtyItem
                }
            }),
            Total: total
        }
        const OrdenCollection = collection(db, "orders")
        addDoc(OrdenCollection, OrdenObj)
            .then(({ id }) => {
                alert(`Se creó la orden con id: ${id}`)
            })
    }

    return (
        <Box minH="100vh" p={4} bg={useColorModeValue('gray.100', 'gray.900')} color={useColorModeValue('black', 'white')}>
            <Flex
                border="2px" 
                borderColor={useColorModeValue("gray.100", "gray.200")} 
                borderRadius="md"
                direction="column"
                alignItems="center"
                justifyContent="center"
                maxW="800px" 
                h="600px" 
                mx="auto"
                mt={4}
                mb={4}
            >
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    maxW="600px" 
                    mx="auto"
                    mt={4}
                    
                >
                    <Heading as="h2" size="lg" mb={6} textAlign="center">Pago</Heading>
                    <VStack spacing={4} width="100%">
                        <Input
                            type="text"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            variant="flushed"
                            size="lg" 
                            width="300px" 
                        />
                        <Input
                            type="text"
                            placeholder="Apellido"
                            value={Apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            variant="flushed"
                            size="lg" 
                            width="300px" 
                        />
                        <Input
                            type="email"
                            placeholder="Correo Electrónico"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="flushed"
                            size="lg" 
                            width="300px" 
                        />
                    </VStack>
                    <Button
                        colorScheme="teal"
                        size="lg" 
                        onClick={CrearOrden}
                        mt={8}
                        mb={4}
                    >
                        Crear Orden
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}
