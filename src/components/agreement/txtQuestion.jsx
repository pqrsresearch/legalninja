import React from "react";
import { Box, Text, Radio, RadioGroup } from '@chakra-ui/react';

export default function TxtQuestion({ questionData }) {
    console.log(questionData)
    return (
        <>
            {
                questionData.map((d, i) => (
                    <Box>
                        <Box paddingLeft={10} fontSize={30}>
                            <Text>{questionData[i]["question"]}</Text>
                        </Box>
                        <Box>
                            {
                                questionData[i]["options"].map((op) => (
                                    <Box cursor={"pointer"} border={"2px solid green"} width={"120px"} margin={5} padding={1}
                                    >{op}</Box>
                                ))
                            }
                        </Box>
                    </Box>
                ))
            }
        </>
    );
}