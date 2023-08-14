import React, { Component,useState } from 'react';

function MyButton(attr) {
    const handleClick = (e)=>{
      e.preventDefault();
      setLabel(attr.changeTo);
    }
    const [label, setLabel] = useState(attr.label);
    return (<a href="#" onClick={handleClick} class="the-button">{label}</a>);
}

export default MyButton;
