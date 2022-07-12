import React from "react";
import { Box } from '@chakra-ui/react';
import "../styles.css"

export default function MCQuestion({jsonData, id}) {
    const inputEl = React.useRef(null);
    const onSel = () => {
        console.log(inputEl.current.name)
    }
    // "id": "c0_b0_q1"
    const parts = "c0_b0_q1".split("_")
    const clauseId = parseInt(parts[0].replace("c", ''));
    const branchId = parseInt(parts[1].replace("b", ''));
    const quesId = parseInt(parts[2].replace("q", ''));
    const j = jsonData["clauses"][clauseId]["branches"][branchId]["questions"][quesId];
    // {
    //     "question": "What type of property",
    //     "options": [
    //         "House",
    //         "Apartment",
    //         "Mobile home",
    //         "room"
    //     ],
    //     "metadata": {
    //         "description": "Question1 about property",
    //         "id": "c0_b0_q0"
    //     },
    //     "recommended_resp": "House"
    // }
    return (
        <>
            <Box paddingLeft={10} fontSize={30} id={`span_${j["metadata"]["id"]}`}>{j["question"]}</Box>
            <div class="ansRB">
                <div class="ansRB">
                    {
                        j["options"].map((op, op_idx) => (
                            <Box border={"2px solid black"} borderRadius={10} width={"100px"} margin={5} padding={5} id={`option_div_${j["metadata"]["id"]}_${op_idx}`} class="label-div focused-input">
                                <input onClick={onSel} ref={inputEl} value={`${op}`} type="radio" name={`option_val_${j["metadata"]["id"]}_${op_idx}`} id={`option_val_${j["metadata"]["id"]}_${op_idx}`} checked={op === j["recommended_resp"]} />
                                <label id={`option_label_${j["metadata"]["id"]}_${op_idx}`} for={`option_val_${j["metadata"]["id"]}_${op_idx}`}>{ op }</label>
                            </Box>
                        ))
                    }
                    {/* <span class="switchFilter" style="width: 115px; height: 54.6667px; left: -5px; top: -5px; opacity: 1;"></span> */}
                </div>
            </div>
        </>
    );
}