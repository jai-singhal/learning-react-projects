import React from "react";

const Option = (props) => {
    return (
        <li key={props.opitionVal}>{props.opitionVal}
            <button onClick={(e) => {
                props.handleDeleteOption(props.opitionVal);
            }}>
                Remove</button>
        </li>

    );
};

export default Option;