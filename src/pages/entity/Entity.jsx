import React from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { entityStore } from "../../store/entityStore"

export default function Entity() {
    const setLessee = entityStore(state => state.setLessee)
    const setAddress = entityStore(state => state.setAddress)
    const setLessor = entityStore(state => state.setLessor)
    const setDate = entityStore(state => state.setDate)
    const setAmount = entityStore(state => state.setAmount)
    return (
        <Box>
            <Flex flexDir={"column"} gap="10" marginTop={10} >
                <Input color={"white"} onChange={(e) => setLessee(e.target.value)} placeholder="Lessee" width="60%" />
                <Input color={"white"} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                <Input color={"white"} onChange={(e) => setLessor(e.target.value)} placeholder="Lessor" width={"60%"} />
                <Input color={"white"} onChange={(e) => setDate(e.target.value)} placeholder="DD/MM/YYYY" width={"60%"} />
                <Input color={"white"} onChange={(e) => setAmount(e.target.value)} placeholder="$ Amount" width={"60%"} />
            </Flex>
        </Box>
    );
}