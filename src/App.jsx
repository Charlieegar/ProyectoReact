import { React } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItmelListContainer/ItemListContainer";


function App() {
  
  return(
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a BEfitnessUY!'}/>
    </ChakraProvider>
  )
}

export default App