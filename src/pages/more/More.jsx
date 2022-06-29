import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import Documents from "../documents/Documents";

export default function More() {
    const navigate = useNavigate();
    return (
        <Box>
            <Nav />
            <Flex>
                <Flex paddingLeft={10} flexDir="column" justify={"space-around"} width={"30%"}>
                    <Box textDecoration={"underline"}>
                        Personnel Lease Agreement
                    </Box>
                    <Box>
                        Residential Lease Agreement
                    </Box>
                    <Box>
                        Commercial Lease Agreement
                    </Box>
                    <Box>
                        Eviction Notice
                    </Box>
                    <Box>
                        Quitclaim Deed
                    </Box>
                    <Box>
                        Contract for Deed/Land Contract
                    </Box>
                </Flex>
                <Box width={"70%"}>
                    <Flex>
                        <Button onClick={() => navigate("/app")}>Edit this Template</Button>
                        <Box fontWeight={"bold"} color="red">50$</Box>
                    </Flex>
                    <Documents />
                </Box>
            </Flex>
        </Box>
    );
}