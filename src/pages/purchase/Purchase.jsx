import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import Nav from "../../components/Nav";

export default function Purchase() {
    return (
        <>
            <Nav />
            <Flex height="10%" width="100%" backgroundColor="#555966" color={"white"} padding="20px" flexDir="column">
                Print and download your Residential Rental Agreement
                as soon as you select an option below.
            </Flex>
            <Flex width={"100%"} justify="center">
                <Box>
                    <Menu>
                        <MenuButton fontWeight={"bold"} textDecoration="underline" color={"red"}>
                            Online E-Stamp
                        </MenuButton>
                        <MenuList color={"black"}>
                            <MenuItem>Uttar Pradesh</MenuItem>
                            <MenuItem>Haryana</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            <Flex justify={"center"} marginTop="200px" width={"100%"}>
                <Box>
                    <Button>Upload E Stamp</Button>
                </Box>
            </Flex>
        </>
    );
}