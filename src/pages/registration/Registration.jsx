import { Flex, Box, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function Registration() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repassword, setRepassword] = React.useState("");

    const handleSignup = async () => {
        if (firstName.length > 2 && lastName.length > 2
            && email.length > 2 && username.length > 2
            && (password === repassword) && password.length > 4) {
            const response = await axios.post("https://gotham-api.herokuapp.com/signup", {
                name: firstName + " " + lastName,
                email: email,
                username: username,
                password: password
            });
            if(response.data["message"] === "success") {
                navigate("/login");
            }
            console.log(response.data);
        }
    }
    return (
        <>
            <Box paddingTop={100} marginLeft={450}>
                <Flex justify={"center"} flexDir="column" gap={3}>
                    <Flex gap={2}>
                        <Input onChange={e => setFirstName(e.target.value)} placeholder="First Name" width="20%" />
                        <Input onChange={e => setLastName(e.target.value)} placeholder="Last Name" width="20%" />
                    </Flex>
                    <Input onChange={e => setEmail(e.target.value)} placeholder="Email" width="40%" />
                    <Input onChange={e => setUsername(e.target.value)} placeholder="Username" width="40%" />

                    <Input type={"password"} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" width="40%" />
                    <Input type={"password"} onChange={e => setRepassword(e.target.value)} placeholder="Re-Enter Password" width="40%" />

                    <Button onClick={() => handleSignup()} colorScheme={"twitter"} width="40%">
                        Signup
                    </Button>

                </Flex>
            </Box>
        </>
    );
}