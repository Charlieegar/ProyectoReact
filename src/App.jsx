import { ChakraProvider, Box, Spinner, Flex } from '@chakra-ui/react';
import MainLayout from "./layout/MainLayout";
import { MainRouter } from './routes/MainRouter';

function App() {
  return (
    <ChakraProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;