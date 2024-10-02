import { Box, Text, Link, Flex, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import myLogo from '../../assets/logoooo.png';

export const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor = useColorModeValue('gray.900', 'gray.100'); // Color para el texto en función del modo

    return (
        <Box as="footer" bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} p={4} textAlign="center" color={textColor}>
            <Flex justifyContent="center" alignItems="center" mb={2}>
                <Link href="/">
                    <img src={myLogo} alt="Logo" width={200} height={150} />
                </Link>
            </Flex>
            <Text fontSize="lg" mb={2} color={textColor}>¡Gracias por visitarnos!</Text>
            <Text mb={4} color={textColor}>Cel: 123456789</Text>
            
        </Box>
    );
};
