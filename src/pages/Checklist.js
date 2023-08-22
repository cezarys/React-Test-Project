import React, { Component,useState,useEffect } from 'react';
import ChecklistItem from '../components/ChecklistItem';

var firstLoad = false;

function Checklist() {

  const [checklist, setChecklist] = useState([]);
  const [checklistBody, setChecklistBody] = useState([]);
    var items = [];

  function removeItem(index)
  {
    getChecklist();
    /*var c = checklist;
    c.splice(index,1);
    setChecklist(c);
    console.log(c);*/
  }

  function setChecklistHtml()
  {

    if(!checklist)
    {
      return;
    }
    if(checklist.length===0)
    {
      return;
    }



    for(var i=0;i<checklist.length;i++)
    {
      var className = 'one-checklist';
      if(checklist[i].checked==='true')
      {
        className+=' checked';
      }
      console.log(className);

        items.push(<ChecklistItem removeItem={removeItem} getChecklist={getChecklist} key={i} index={i} class={className} text={checklist[i].text}></ChecklistItem>);
    }
    return (<div>{items}</div>);
  }

  function getChecklist()
  {
    items = [];
    fetch("https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/checklist/", {cache: "no-store"})
      .then(res => res.json())
      .then(
        (result) => {


          if(typeof result !== 'undefined')
          {
              setChecklist(result);
              setNewItemValue('');
              setFormClass('')
          }

        },
        (error) => {
          console.log(error);
        }
      );
  }


  useEffect(() => {

    setChecklistBody(setChecklistHtml());
  }, [checklist]);



  if(!checklist || typeof checklist ==='undefined' || checklist.length===0)
  {
      getChecklist();
  }


  function handleSubmit(e)
  {
    e.preventDefault();
    setFormClass('active');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newItemValue })
    };

    fetch('https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/checklist/', requestOptions).then(response => response.json())
    .then(data => {getChecklist();} );


  }

  function handleNewItemChange(e)
  {
    setNewItemValue(e.target.value);

  }

  const [newItemValue, setNewItemValue] = useState('');
  const [formClass, setFormClass] = useState('');

  return (
      <div id="checklist">
      <p>Checklist</p>
      {checklistBody}
      <form class={formClass} onSubmit={handleSubmit} action="#" id="add-new-item-form" method="post">
        <p>
          <input type="text" onChange={handleNewItemChange} value={newItemValue} placeholder="New item..." required id="new-item" />
        </p>
        <p>
          <input type="submit" value="Add New Item" />
        </p>
      </form>
      </div>
    );
  }

  export default Checklist;
