import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

export default function Account() {
    const navigate = useNavigate();
    return (
        <>
        <Nav />
            {/* <Flex height="10vh" width="100vw" backgroundColor="ffff" justify={"space-between"}>
                <Box>LegalNinja</Box>
                <Box marginEnd={10} fontWeight={"bold"} cursor={"pointer"}>My Account</Box>
            </Flex> */}
            <Flex justify={"space-around"}>
                <Box>DRAFTS</Box>
                <Box>PURCHASED</Box>
            </Flex>
            <Divider />
            <Flex flexDir={"column"} width={"30%"} margin={10} border={"1px solid black"} boxShadow={"10px 10px"}>
                <Box>
                    <Box fontWeight={"bold"}>
                        Personnel Lease Aggreement
                    </Box>
                    <Box>
                        A Personnel Lease Aggreement creates a commercial tenancy between a landlord and business tenant.
                    </Box>
                    <Box onClick={() => navigate("/app")} cursor={"pointer"} color={"green"}>
                        Continue to make a copy
                    </Box>
                </Box>
            </Flex>
        </>
    );
}