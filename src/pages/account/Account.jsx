import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
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