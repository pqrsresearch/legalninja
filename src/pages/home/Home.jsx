import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Nav from "../../components/Nav";
import HomeGrad from "../../components/home.jpg"

export default function Home() {
    return (
        <>
           <Nav />
           <VStack>
            <Box width={"100vw"} height={"94vh"} backgroundRepeat={"round"} backgroundSize={"cover"} backgroundImage={HomeGrad}>
                <Flex width={"100%"} justify="center" height={"30vh"} alignItems={"center"}>
                <Heading color={"white"}>Legal Ninja</Heading>
                </Flex>
            </Box>
           </VStack>
        </>
    );
}