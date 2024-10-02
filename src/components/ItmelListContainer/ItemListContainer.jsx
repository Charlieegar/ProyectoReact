import { Box, Card, Stack, CardBody, CardFooter, ButtonGroup, Button, Heading, Image, Divider, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const ItemListContainer = ({ products }) => {
    console.log(products)
    return (  
        products.length === 0 ? (<Box> No hay productos para mostrar</Box>) :
        <Box display={'flex'} flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
            {
                products.map((product) => {
                    //POR CADA ITEM DE MI ARRAY ME RETORNA EN ESTE CASO UNA CARD SACADA DE CHAKRA CON EL CONTENIDO DE CADA ITEM
                    return (
                        <Card key={product.id} maxW='sm' margin={5}>
                            <CardBody>
                                <Image
                                    src={product.thumbnail}
                                    alt={product.nombre}
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{product.title}</Heading>
                                    <Text>
                                        {product.description}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {product.price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    {/* <Button variant='solid' colorScheme='blue'>
                                        Buy now
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue'>
                                        Add to cart
                                    </Button> */}
                                    <Link to={`/Detalles/${product.id}`}> Ir a detalle</Link>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                        //POR CADA ITEM DE MI ARRAY ME RETORNA EN ESTE CASO UN BOX CON EL CONTENIDO DE CADA ITEM
                        // <Box key={product.id}>
                        // {/*EL BOX NECESITA UNA KEY PARA QUE NO DE ERROR, SI NO TENGO UN ID PARA CADA ITEM PUEDO PONER "index" COMO SEGUNDO PARAMETRO DE LA FUNCION MAP */}
                        //     <h2>{product.nombre}</h2>
                        //     <p>{product.descripcion}</p>
                        //     <p>{product.precio}</p>
                        //     <img src={product.imagen} alt={product.nombre} />
                        // </Box>

                    )

                })
            }

        </Box>
    )

};

