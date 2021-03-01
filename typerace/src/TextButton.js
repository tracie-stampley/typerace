import React from 'react';

const TextButton = (props) => {
    return <button onClick={props.onClick}>{props.buttonText}</button>
}

export default TextButton;