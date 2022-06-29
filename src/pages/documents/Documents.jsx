import { Box, Text, Center, Button } from "@chakra-ui/react";
import React from "react";
import { entityStore } from "../../store/entityStore"

export default function Documents() {
    const lessee = entityStore(state => state.lessee)
    const address = entityStore(state => state.address)
    const lessor = entityStore(state => state.lessor)
    const date = entityStore(state => state.date)
    const amount = entityStore(state => state.amount)

    return (
        <Box>
            <Box border={"2px solid white"} color={"white"} backgroundColor={"black"} padding={"20px"} margin={"5px"}>
                <Box>
                    <Center>
                        <b>
                            NOTICE-BY LESSOR OF TERMINATION OF LEASE
                            DUE TO DEFAULT IN RENTAL
                        </b>
                    </Center>
                </Box>
                <Box>
                    <Text > To: &nbsp;&nbsp;<span textDecoration={lessee ? "underline" : "unset"}>{lessee || "__________________________________"}</span> (Lessee)</Text>
                    <Text >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>{address || "__________________________________"}</span> (Address)</Text>
                    <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>__________________________________</span></Text>
                </Box>

                <Box>
                    <Text>
                        <br />
                        Notice is given that under the lease agreement between {lessee || "_______________ "} (Lessee)
                        and {lessor || "______________"} (Lessor), dated {date || "_________"} (Date), whereby {lessee || "_____________"} (Lessee)
                        leased from {lessor || "______________"} (Lessor) __________ (Describe Personal Property Leased), the sum
                        of __________ (${amount || "__________"}), rent payment for the ______________
                        (month or other period of time; if more than one month, list each month separately), is unpaid and in default.
                    </Text>
                </Box>

                <Box>
                    <Text>
                        Notice is given that {lessor || "________________"} (Lessor), pursuant
                        to the terms of such agreement, elects to terminate the lease by reason of such default, and to take immediate
                        possession of the personal property that is the subject of the lease.
                    </Text>
                </Box>

                <Box>
                    You are required to deliver to {lessor || "________________"} (Lessor) all of the leased property,
                    at the premises of {lessor || "___________________"} (Lessor) on
                    receipt of this notice, in accordance with the terms of the lease agreement.
                </Box>

                <Box>
                    <br /> <br />
                    Dated {date || "__________"}.
                </Box>

                <Box>
                    <br /><br />
                    _____________________________________________<br />
                    Signature of  Lessee
                </Box>

                <Box>
                    <br /><br />
                    _____________________________________________ <br />
                    Signature of Lessor
                </Box>

                <br /> <br /> <br />

                <Center textDecoration={"underline"}>
                    This is a UCC Leasing provision.  It is designed to supplement UCC
                    “Leasing" forms found in this category.
                </Center>
            </Box>
            <Button width={"40%"}>
                Print
            </Button>
        </Box>

    );
}