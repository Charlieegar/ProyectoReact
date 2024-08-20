
import {
    Box,
    Text,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import myLogo from '../../assets/logoooo.png';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { px } from 'framer-motion';




const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box className='Navbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex  h={16} className='Navbar'>
                    <img width={175} height={75} src={myLogo} alt="" />
                    <Text>Inicio</Text>
                    <Text>Nosotros</Text>
                    <Text>Productos</Text>
                    <Text>Accesorios</Text>
                    <Text>Contacto</Text>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <CartWidget> </CartWidget>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )

}

export default Navbar;