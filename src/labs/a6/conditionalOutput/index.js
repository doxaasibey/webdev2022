import React from "react";
import ConditionalOutputIfElse
    from "./ConditionalOutputIfElse";
import ConditionalOutputInline
    from "./ConditionalOutputIfElse";
const ConditionalOutput = () => {
    return(
        <>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
        </>
    );
};
export default ConditionalOutput;