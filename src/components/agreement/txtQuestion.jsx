import React from "react";
import { Box, Text, Radio, RadioGroup, useRadio, useRadioGroup, HStack, Flex, Button, Tooltip } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons'
import { agreementStore } from "../../store/agreementStore"
import "../styles.css"

export default function TxtQuestion({ questionData }) {
    const copyOfAgreement = agreementStore(state => state.copyOfAgreement);
    console.log(questionData)
    const handleRadio = (val, id) => {
        // const dejoin = val.split("-")
        // val = dejoin[0]
        // let id = dejoin[1]
        const parts = id.split("_")
        const clauseId = parseInt(parts[0].replace("c", ''));
        const branchId = parseInt(parts[1].replace("b", ''));
        const quesId = parseInt(parts[2].replace("q", ''));
        copyOfAgreement["clauses"][clauseId]["branches"][branchId]["questions"][quesId]["user_selected"] = val;
        console.log(copyOfAgreement);
    }
    const { value, getRootProps, getRadioProps } = useRadioGroup({
        onChange: handleRadio,
    })
    const group = getRootProps()
    return (
        <>
            {
                questionData.map((d, i) => (
                    <Box>
                        <Box paddingLeft={10} fontSize={30}>
                            <Text>{questionData[i]["question"]}</Text>
                        </Box>
                        <Box>
                            {/* <HStack {...group}>
                                {questionData[i]["options"].map((value) => {
                                    const j = questionData[i]["metadata"]["id"];
                                    value = value + "-" + j
                                    const radio = getRadioProps({ value })
                                    return (
                                        <RadioCard key={value} {...radio}>
                                            {value.split("-")[0]}
                                        </RadioCard>
                                    )
                                })}
                            </HStack> */}
                            <RadioGroup onChange={(val) => handleRadio(val, questionData[i]["metadata"]["id"])}>
                                {

                                    questionData[i]["options"].map((op, op_idx) => (
                                        <>
                                            <Radio value={op} cursor={"pointer"} border={"2px solid green"} width={"120px"} margin={5} padding={1}
                                            >
                                                <Box position={"relative"} id="radio" display={"flex"} justifyContent="center">
                                                    <Flex width={"100%"} justifyItems={"center"} justify="center">
                                                        {op}
                                                    </Flex>
                                                </Box>

                                            </Radio>
                                            {/* <Tooltip hasArrow label={questionData[i]["options_tooltip"][op_idx]} bg='red.600' placement="top">
                                                <span><InfoIcon /></span>
                                            </Tooltip> */}
                                            <Tooltip hasArrow label="xxxxxx" bg='red.600' placement="top">
                                                <span><InfoIcon /></span>
                                            </Tooltip>
                                        </>

                                    ))
                                }
                            </RadioGroup>
                        </Box>
                    </Box>
                ))
            }
        </>
    );
}

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}