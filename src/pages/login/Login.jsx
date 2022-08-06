import { Flex, Box, Image, Input, Button, Text, Divider } from "@chakra-ui/react";
import React from "react";
import Illustration from "../../assets/images/Illustration.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signinStore } from "../../store/signinStore";
import Nav from "../../components/Nav";

export default function Login() {
    const setUname = signinStore(state => state.setUname);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin = async () => {
        if(username.length > 3 && password.length > 3) {
            const response = await axios.post("https://gotham-api.herokuapp.com/signin", {
                username: username,
                password: password
            });
            console.log(response.data);
            if(response.data["message"] === "success") {
                setUname(username);
                navigate("/account");
            }
        }
    }
    const navigate = useNavigate();
    return(
        <>
        <Nav />
        <Flex height={"100vh"} flexDir={"column"} justify="center">
            <Flex width={"100%"} alignItems={"center"} gap={2} flexDir={"column"}>
                {/* <Box height={"250px"} width={"400px"} backgroundSize={"cover"} backgroundImage={Illustration} /> */}
                <Input onChange={(e) => setUsername(e.target.value)} placeholder="Username" borderRadius={"20px"} width={"400px"} />
                <Input onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder="Password" borderRadius={"20px"} width={"400px"} />

                <Button onClick={() => handleLogin()} backgroundColor={"#BBE1FA"}  borderRadius={"20px"} width={"400px"} >Login</Button>
                <Text paddingTop={"10px"}>Forgot Password?</Text>
                <Divider width={"400px"} />
                <Button onClick={() => navigate("/register")} marginTop={"10px"} width={"200px"} borderRadius={"20px"} backgroundColor={"#3282B8"}>Signup</Button>
            </Flex>
        </Flex>
        </>
    );
}