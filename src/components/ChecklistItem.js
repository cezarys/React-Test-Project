import React, { Component,useState,useEffect } from 'react';

function ChecklistItem(attr) {

  var handleRemove = (e)=>
  {
    e.stopPropagation();
    if(window.confirm('Are you sure you like to delete this item?')){

      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ index: attr.index })
      };
      //e.target.closest('.one-checklist').remove();
      //

      fetch('https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/checklist/', requestOptions).then(res => res.json())
      .then(
        (result) => {
attr.removeItem(attr.index);

        },
        (error) => {
          console.log(error);
        }
      );
    };
  }

  var handleClick = ()=>
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

    fetch('https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/checklist/', requestOptions);
  }

  const [itemClass, setClass] = useState(attr.class);
  return (<div onClick={handleClick} data-index={attr.index} class={itemClass}>{attr.text}<a href="#" onClick={handleRemove} class="delete-item">&times;</a></div>);
}

export default ChecklistItem;
