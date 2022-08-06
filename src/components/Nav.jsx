import { Box, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signinStore } from ".././store/signinStore";
import Profile from "../assets/images/profile.png"
import React from "react";

export default function Nav() {
    const signin = signinStore(state => state.signin);
    const uname = signinStore(state => state.uname);
    const setSignin = signinStore(state => state.setSignin);
    const navigate = useNavigate();
    return (
        <>
            <Flex>
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
                                <MenuItem onClick={() => navigate("/app")}>Residential Lease Agreement</MenuItem>
                                <MenuItem>Commercial Lease Agreement</MenuItem>
                                <MenuItem>Eviction Notice</MenuItem>
                                <MenuItem>Quitclaim Deed</MenuItem>
                                <MenuItem>Contract for Deed/Land Contract</MenuItem>
                                <MenuItem  >More {">>"}</MenuItem>
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
                    <Menu>
                        <MenuButton>
                            <Box height={"50px"} width={"50px"} backgroundSize={"cover"} backgroundImage={Profile}>
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Box marginEnd={10}  cursor={"pointer"} onClick={() => navigate("/login")}>
                                    {
                                        uname.length > 0 ? `Hi, ${uname}` : "Login"
                                    }
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={() => navigate("/setting")}>Settings</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </>
    );
}