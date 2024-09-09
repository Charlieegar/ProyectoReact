import {Card, Stack, CardBody, CardFooter, ButtonGroup, Heading, Image, Divider, Text} from "@chakra-ui/react";
//EN ESTA FUNCION USO COMO PARAMETRO {product} YA QUE TENGO QUE TRAER UN UNICO PRODUCTO, VA ENTRE {} PORQUE ES UN OBJETO EN EL CUAL DEBAJO DEBEMOS ACCEDER A SUS PROPIEDADES
export const ItemDetailContainer = ({product}) => {
    console.log(product)

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
                        {product.precio}
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
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}