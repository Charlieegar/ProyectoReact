
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
import { CartWidget } from '../CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCategory } from '../../hooks/useCategory';



export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {Categories}= useCategory();
    

    return (
        <>
            <Box className='Navbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} className='Navbar'>
                    <Link to={"/"} >
                        <img width={175} height={75} src={myLogo} alt="" />
                    </Link>
                    <Box width={"100%"} marginLeft={100}>
                        <Menu>
                            <Link to={"/"} style={{ margin: '30px' }}>Home</Link>
                            <Link to={"/Nosotros"} style={{ margin: '30px' }}>Nosotros</Link>
                            <Link to={"/Productos"} style={{ margin: '30px' }}>Productos</Link>
                            <Link to={"/Accesorios"} style={{ margin: '30px' }}>Accesorios</Link>
                            <MenuButton as={Link} cursor={"pointer"} style={{margin:30}}>Categorias</MenuButton>
                            <MenuList height={'300px'} overflowY={'scroll'}>
                                {Categories.map((category) => (
                                    <MenuItem key={category.slug}>
                                        <Link to={`/Categories/${category.name}`}>
                                            {category.name}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuList>
                            <Link style={{ margin: '30px' }}>Contacto</Link>
                        </Menu>
                    </Box>

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

};