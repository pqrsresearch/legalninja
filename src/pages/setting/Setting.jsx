import { Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Nav from "../../components/Nav";
import { signinStore } from "../../store/signinStore";

export default function Setting() {
    const uname = signinStore(state => state.uname);
    const [password, setPassword] = React.useState('');
    const [repPassword, setRepPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [msg, setMsg] = React.useState('');

    const handlePreSetting = async () => {
        const response = await axios.post("https://gotham-api.herokuapp.com/pre-setting", {
            username: uname
        });
        const result = response.data;
        setAddress(result["address"])
        setPhone(result["phone"])
    }
    const handleUpdate = async () => {
        if(password.length > 3 && (password === repPassword) && address.length > 4 && phone.length > 8) {
            const res = await axios.post("https://gotham-api.herokuapp.com/setting", {
                username: uname,
                password: password,
                address: address,
                phone: phone
            });
            if(res.data.message === "success") {
                setMsg("Success");
            }
        }
    }

    React.useEffect(() => {
        handlePreSetting()
    }, []);

    return (
        <>
            <Nav />
            <Box paddingTop={100} marginLeft={450}>
                <Flex
                 justify={"center"} flexDir="column" gap={3}>
                    <Textarea defaultValue={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" width={"40%"} />
                    <Input defaultValue={phone} onChange={(e) => setPhone(e.target.value)}  placeholder="Phone" width="40%" />
                    <Flex gap={2}>
                        <Input onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder="Password" width="20%" />
                        <Input onChange={(e) => setRepPassword(e.target.value)} type={"password"} placeholder="Confirm Password" width="20%" />
                    </Flex>
                    <Button onClick={() => handleUpdate()}  colorScheme={"twitter"} width="40%">
                        Update
                    </Button>
                    <Box color={"green"}>
                        {
                            msg.length > 0 ? msg : ""
                        }
                    </Box>
                </Flex>
            </Box>
        </>
    );
}