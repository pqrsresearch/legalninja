import './App.css';
import { Box, Flex } from "@chakra-ui/react";
import Documents from './pages/documents/Documents';
import Entity from './pages/entity/Entity';
import Nav from './components/Nav';

function App() {
  return (
    <Box backgroundColor={"black"}>
      <Nav />
      <Flex>
      <Box width="40%">
        <Entity />
      </Box>
      <Box width="60%">
        <Documents />
      </Box>
    </Flex>
    </Box>
  );
}

export default App;
