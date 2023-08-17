import React, { Component,useState,useEffect } from 'react';

function ChecklistItem(attr) {

  function handleClick()
  {
    var checked = false;
    if(itemClass.indexOf('checked')!==-1)
    {
      setClass('one-checklist');
    }
    else
    {
      var checked = true;
      setClass('one-checklist checked');
    }

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: attr.index, checked:checked })
    };
    console.log(JSON.stringify({ index: attr.index, checked:checked }));
    fetch('https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/checklist/', requestOptions);


  }

  const [itemClass, setClass] = useState(attr.class);

  return (<div onClick={handleClick} data-index={attr.index} class={itemClass}>{attr.text}</div>);
}

export default ChecklistItem;
