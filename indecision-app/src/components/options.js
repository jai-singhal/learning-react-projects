import React from "react";
import Option from "./option.js";

const Options = (props) => {
    return (
        <div>
            <button 
                disabled={props.options.length === 0}
                onClick={props.handleRemoveAll}>
                Remove all
            </button>
            {props.options.length === 0 && <p>Add options to get started !!</p>}
            <ul>
                {
                    props.options.map((op) =>
                        <Option
                            key={op}
                            opitionVal={op}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                }
            </ul>
        </div>
    );
};

export default Options;