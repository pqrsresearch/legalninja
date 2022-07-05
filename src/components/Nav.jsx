import { Box, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signinStore } from ".././store/signinStore";
import React from "react";
import "./Nav.css"

export default function Nav() {
    const signin = signinStore(state => state.signin);
    const setSignin = signinStore(state => state.setSignin);
    const navigate = useNavigate();
    return (
        <Box id="noprint">
            <Flex >
                <Flex alignItems={"center"} justify="space-around" backgroundColor={"black"} color="white" width={"80%"} height={"8vh"}>
                    <Box>
                        Estate
                    </Box>
                    <Box>
                        <Menu>
                            <MenuButton>
                                Real Estate
                            </MenuButton>
                            <MenuList color={"black"}>
                                <MenuItem>Residential Lease Agreement</MenuItem>
                                <MenuItem>Commercial Lease Agreement</MenuItem>
                                <MenuItem>Eviction Notice</MenuItem>
                                <MenuItem>Quitclaim Deed</MenuItem>
                                <MenuItem>Contract for Deed/Land Contract</MenuItem>
                                <MenuItem onClick={() => navigate("/more")} >More {">>"}</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box>
                        Financial
                    </Box>
                    <Box>
                        Business
                    </Box>
                    <Box>
                        Family
                    </Box>
                    <Box>
                        All
                    </Box>
                </Flex>
                <Flex fontWeight={"bold"} alignItems={"center"} justifyContent={"space-around"} width={"20%"}>
                    {
                        signin ? <>
                            <Box cursor={"pointer"}>
                                Create Free Account
                            </Box>
                            <Box>|</Box>
                            <Box cursor={"pointer"} onClick={() => setSignin(false)}>Signin</Box>
                        </> : <Box cursor={"pointer"} onClick={() => navigate("/account")}>My Account</Box>
                    }
                </Flex>
            </Flex>
        </Box>
    );
}