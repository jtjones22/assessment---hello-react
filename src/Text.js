import React from 'react';

function Text(props) {
    return (<h1 style={{color : "orange"}}>
        Hello, <span style={{color: "blue", backgroundColor: "black"}}>{props.name}</span>!
    </h1>)}

export default Text