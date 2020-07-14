import React from "react";

function ContentInput(props) {
    return (
        <div>
            <label>
                {props.label}:
            </label>
            <input type={props.type} onChange={props.onChange} value={props.value} />
        </div>
    );
}

export default ContentInput;