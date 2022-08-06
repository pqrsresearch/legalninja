import './App.css';
import React from 'react';
import { Box, Flex, Progress, Button } from '@chakra-ui/react';
import { agreementData } from "./data";
import MCQuestion from "./components/agreement/mcquestion";
import TxtQuestion from './components/agreement/txtQuestion';
import { agreementStore } from "./store/agreementStore"
import PdfDocument from './components/pdfDocument';
import Nav from './components/Nav';
import { signinStore } from './store/signinStore';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const URL = "http://gotham-api.herokuapp.com"

function App() {
  const navigate = useNavigate();
  const uname = signinStore(state => state.uname);
  let clauseToQuestionArray = {};
  for (let i = 0; i < agreementData["clauses"].length; ++i) {
    if(agreementData["clauses"][i]["branches"].length) {
      clauseToQuestionArray[agreementData["clauses"][i]["metadata"]["name"]] =
      agreementData["clauses"][i]["branches"][0]["questions"]
    }
  }
  const [isPrint, setIsPrint] = React.useState(false);
  const [clause, setClause] = React.useState("General");
  const [progressVal, setProgressVal] = React.useState(15);
  const [save, setSave] = React.useState({
    arrayClauseName: ["General", "Property", "Parties", "Terms", "Final details"],
    progressEstimate: [15, 25, 38, 50, 65],
    currClauseIdx: 0
  });

  const handleRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
      try {
        const result = await axios.post(URL + '/create-order', {
          amount: "1000",
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get(URL + '/get-razorpay-key');

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: 'Legal Ninja',
          description: 'Purchase Agreement',
          order_id: order_id,
          handler: async function (response) {
            // const result = await axios.post('http://localhost:5000/pay-order', {
            //   amount: amount,
            //   razorpayPaymentId: response.razorpay_payment_id,
            //   razorpayOrderId: response.razorpay_order_id,
            //   razorpaySignature: response.razorpay_signature,
            // });
            // alert(result.data.msg);
            // fetchOrders();
            alert("Payment is successful")
          },
          prefill: {
            name: 'example name',
            email: 'email@example.com',
            contact: '111111',
          },
          notes: {
            address: 'example address',
          },
          theme: {
            color: '#80c0f0',
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
      }
    };
    document.body.appendChild(script);
  }

  const handleSave = async () => {
    if (save["currClauseIdx"] === save["arrayClauseName"].length - 1) handleRazorpay(); //navigate("/purchase");
    const arrayClauseName = save["arrayClauseName"];
    const currClauseIdx = save["currClauseIdx"];
    const progressEstimate = save["progressEstimate"]; // To Do: Automatically Compute

    if (currClauseIdx < arrayClauseName.length - 1) {
      const response = await axios.post(URL + "/agreement", {
        username: uname,
        copyOfAgreementJsonString: JSON.stringify(copyOfAgreement)
      });
      console.log(response.data);
      setClause(arrayClauseName[currClauseIdx + 1]);
      setProgressVal(progressEstimate[currClauseIdx + 1]);
      setIsPrint(false);
      setSave({ arrayClauseName: arrayClauseName, currClauseIdx: currClauseIdx + 1, progressEstimate: progressEstimate })
    }
    else {
      setIsPrint(true);
      setProgressVal(100);
    }
  }
  const copyOfAgreement = agreementStore(state => state.copyOfAgreement);
  const setCopyOfAgreement = agreementStore(state => state.setCopyOfAgreement);
  React.useEffect(() => {
    setCopyOfAgreement(JSON.parse(JSON.stringify(agreementData)))
  }, [])
  return (
    <>
      <Nav />
      <Flex height="10%" width="100%" backgroundColor="#555966" padding="20px" flexDir="column">
        <Box fontSize="30" color="white">RESIDENTIAL RENTAL AGREEMENT</Box>
        <Flex flexWrap={"wrap"} gap="30" fontSize="20" padding="20px" color="white">
          {/* Todo Hardcoded*/}
          <Box cursor={"pointer"} onClick={() => { setClause("General"); setSave(prev => Object.assign(prev, { currClauseIdx: 0 })); setIsPrint(false); setProgressVal(15); }}>General</Box>
          <Box cursor={"pointer"} onClick={() => { setClause("Property"); setSave(prev => Object.assign(prev, { currClauseIdx: 1 })); setIsPrint(false); setProgressVal(25); }}>Property</Box>
          <Box cursor={"pointer"} onClick={() => { setClause("Parties"); setSave(prev => Object.assign(prev, { currClauseIdx: 2 })); setIsPrint(false); setProgressVal(38); }}>Parties</Box>
          <Box cursor={"pointer"} onClick={() => { setClause("Terms"); setSave(prev => Object.assign(prev, { currClauseIdx: 3 })); setIsPrint(false); setProgressVal(50); }}>Terms</Box>
          <Box cursor={"pointer"} onClick={() => { setClause("Final details"); setSave(prev => Object.assign(prev, { currClauseIdx: 4 })); setIsPrint(false); setProgressVal(65); }}>Final Details</Box>
          <Box>Signing</Box>
          <Box cursor={"pointer"} onClick={() => { setIsPrint(prevState => !prevState); setProgressVal(100); }} >Print/Download</Box>
        </Flex>
        <Progress width="62%" colorScheme={"green"} value={progressVal} />
      </Flex>

      <Box>
        {/* <MCQuestion jsonData={agreementData} id={"c0_b0_q1"} /> */}
        {
          isPrint === true ? <Box>
            <PdfDocument />
          </Box> :
            <TxtQuestion questionData={clauseToQuestionArray[clause]} />
        }
      </Box>
      <Button onClick={() => handleSave()} colorScheme={"green"} width={"120px"} margin={5} padding={1}>
        {
          save["currClauseIdx"] === save["arrayClauseName"].length - 1  ? "Purchase" : "Save & Next"
        }
      </Button>
    </>
  );
}

export default App;
