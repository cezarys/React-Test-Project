import React, { Component,useState,useEffect } from 'react';

var firstLoad = false;

function Checklist() {

  const [checklist, setChecklist] = useState([]);
  const [checklistBody, setChecklistBody] = useState([]);


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

    var items = [];

    for(var i=0;i<checklist.length;i++)
    {
      var className = 'one-checklist';
      if(checklist[i].checked==='true')
      {
        className+=' checked';
      }
        items.push(<div class={className}>{checklist[i].text}</div>);
    }
    return (<div>{items}</div>);
  }

  function getChecklist()
  {
    fetch("https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/checklist/", {cache: "no-store"})
      .then(res => res.json())
      .then(
        (result) => {


          if(typeof result !== 'undefined')
          {
              setChecklist(result);
          }

        },
        (error) => {
          console.log(error);
        }
      );
  }
  console.log(checklist);

  useEffect(() => {
    setChecklistBody(setChecklistHtml());
  }, [checklist]);

  if(!checklist || typeof checklist ==='undefined' || checklist.length===0)
  {
      getChecklist();
  }




  return (
      <div id="checklist">
      <p>Checklist</p>
      {checklistBody}
      </div>
    );
  }

  export default Checklist;
