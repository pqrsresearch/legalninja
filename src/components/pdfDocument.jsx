import { Box, Text, Center, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { agreementStore } from "../store/agreementStore";
import { entityStore } from "../store/entityStore"
import "./styles.css"
//import ReactToPdf from 'react-to-pdf'
import ReactToPdfJai from "./ReactToPdfJai";
import {agreementData} from '../data.js'

export default function PdfDocument() {
    const ref = React.createRef();

    const copyOfAgreement = agreementStore(state => state.copyOfAgreement)

    const jsPdfOptions = {
        orientation: 'landscape',
        format: 'legal',
    };

    return (
        <VStack>
            <Box ref={ref} overflowY={"scroll"} height="800px" display={"flex"} justifyContent="center" userSelect={"none"}>
                <Box id="pdf" border={"2px solid black"} width={"70%"} padding={"20px"} margin={"5px"}>
                    <Box>
                        <Center>
                            <b>
                                RESIDENTIAL RENTAL AGREEMENT
                            </b>
                        </Center>
                    </Box>
                    <Box>
                        <Text > THIS LEASE (the "Lease") dated this _____ day of _____________, 20____ <br /><br /></Text>
                        <Text >BETWEEN</Text>
                        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>{copyOfAgreement["clauses"][0]["branches"][0]["questions"][0]["metadata"]["answer_template"].replace("$",
                            copyOfAgreement["clauses"][0]["branches"][0]["questions"][0]["user_selected"])}
                            <br /><br /><br />
                        </span></Text>
                    </Box>
                    <Box>
                        <Center>_________________________</Center>
                        <Center>(the "Landlord")</Center>
                        <Center>- AND-</Center>
                        <Center>_________________________</Center>
                        <Center>(the "Tenant") <br /><br /></Center>
                        <Center>(individually the “Party” and collectively the “Parties”) <br /><br /></Center>
                    </Box>

                    <Box >
                        <Text >
                            <b>IN CONSIDERATION OF</b> the Landlord leasing certain premises to the Tenant and other valuable consideration, the receipt and sufficiency of which consideration is hereby acknowledged, the Parties agree as follows:
                            <br />
                            <br />
                        </Text>
                    </Box>

                    <Box>
                        <ol>
                        {
                            agreementData["clauses"].map(branch => {
                                if(branch["metadata"]["fixedContent"]) {
                                    return (
                                        <>
                                        <b><u>{branch["metadata"]["fixedContent"]["title_line"]}</u></b>
                                            {
                                                branch["metadata"]["fixedContent"]["sublist"].map(d => (
                                                    <li>{d}</li>
                                                ))
                                            }
                                        </>
                                    );
                                }
                            })
                        }
                        </ol>

                        <p><b>IN WITNESS WHEREOF</b> _________________________ and _________________________ have duly affixed their signatures on this _____ day of _____________, 20____.</p>
                        <p style={{ textAlign: "right" }}>_______________________________<br />______________________(Landlord)<br /></p>
                        <p style={{ textAlign: "right" }}>_______________________________<br />______________________(Tenant)<br /></p>
                    </Box>
                </Box>
            </Box>
            <Box position={"absolute"} top={700} fontSize={150} opacity={"0.1"} transform={"rotate(-30deg)"}>DRAFT</Box>
            
            <ReactToPdfJai targetRef={ref} filename="div-blue.pdf" options={jsPdfOptions} scale={1}>
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdfJai>
        </VStack>

    );
}