import { ChakraProvider, Box, Spinner, Flex } from '@chakra-ui/react';
import MainLayout from "./layout/MainLayout";
import { MainRouter } from './routes/MainRouter';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;