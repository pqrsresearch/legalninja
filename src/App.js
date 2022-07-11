import './App.css';
import React from 'react';
import { Box, Flex, Progress, Button } from '@chakra-ui/react';
import { agreementData } from "./data";
import MCQuestion from "./components/agreement/mcquestion";
import TxtQuestion from './components/agreement/txtQuestion';

function App() {
  let clauseToQuestionArray = {};
  for (let i = 0; i < agreementData["clauses"].length; ++i) {
    clauseToQuestionArray[agreementData["clauses"][i]["metadata"]["name"]] =
      agreementData["clauses"][i]["branches"][0]["questions"]
  }
  console.log(clauseToQuestionArray)
  const [clause, setClause] = React.useState("General");
  const [progressVal, setProgressVal] = React.useState(15);
  return (
    <>
      <Flex height="10vh" width="100vw" backgroundColor="ffff">
        <Box>LawDepot</Box>
      </Flex>
      <Flex height="30vh" width="100vw" backgroundColor="#555966" padding="20px" flexDir="column">
        <Box fontSize="30" color="white">FREE RESIDENTIAL RENTAL AGREEMENT</Box>
        <Flex gap="30" fontSize="20" padding="20px" color="white">
          <Box cursor={"pointer"} onClick={() => {setClause("General"); setProgressVal(15);}}>General</Box>
          <Box cursor={"pointer"} onClick={() => {setClause("Property"); setProgressVal(25);}}>Property</Box>
          <Box cursor={"pointer"} onClick={() => {setClause("Parties"); setProgressVal(38);}}>Parties</Box>
          <Box cursor={"pointer"} onClick={() => {setClause("Terms"); setProgressVal(50);}}>Terms</Box>
          <Box cursor={"pointer"} onClick={() => {setClause("Final details"); setProgressVal(70);}}>Final Details</Box>
          <Box>Signing</Box>
          <Box>Print/Download</Box>
        </Flex>
        <Progress width="62%" colorScheme={"green"} value={progressVal} />
      </Flex>

      <Box>
        {/* <MCQuestion jsonData={agreementData} id={"c0_b0_q1"} /> */}
        <TxtQuestion questionData={clauseToQuestionArray[clause]}/>
      </Box>
      <Button colorScheme={"green"}>{"Save & Next"}</Button>
    </>
  );
}

export default App;
