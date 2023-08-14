import React, { Component,useState,useEffect } from 'react';

function Checklist() {

  const [checklist, setChecklist] = useState([]);

  var setChecklistHtml = ()=>
  {
    if(!checklist)
    {
      return;
    }
    if(checklist.length===0)
    {
      return;
    }

    return (<div>{checklist.map((object, i) => <div class="one-checklist">{object.text}</div>)}</div>);
  }

  const getChecklist = ()=>
  {
    fetch("https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/checklist/", {cache: "no-store"})
      .then(res => res.json())
      .then(
        (result) => {
          setChecklist(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    setChecklist(setChecklistHtml());
  }, [checklist]);

  return (
      <div id="checklist">
      <p>Checklist</p>
      {checklist}
      </div>
    );
  }

  export default Checklist;
