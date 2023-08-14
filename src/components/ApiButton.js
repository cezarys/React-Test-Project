import React, { Component,useState,useEffect } from 'react';

function ApiButton(attr) {

  function setTableData()
  {
    if(table.length===0)
    {
      return ;
    }
    return (<tbody><tr><th>First Name</th><th>Last Name</th><th>D.O.B.</th></tr>
      {table.map((object, i) => <tr><td>{object.first_name}</td><td>{object.last_name}</td><td>{object.dob}</td></tr>)}
      </tbody>
    );
  }

  const [table, setTable] = useState([]);
  const [tableBody, setTableBody] = useState();

  const handleClick = (e)=>{
    e.preventDefault();

    fetch("https://cezsiw.dreamhosters.com/react_api/wp-json/react_api/v1/people/", {cache: "no-store"})
      .then(res => res.json())
      .then(
        (result) => {
          setTable(result);
        },
        (error) => {
          console.log(error);
        }
      );

  }

  useEffect(() => {
    setTableBody(setTableData());
  }, [table]);



  return (<div id="users-table-wrapper"><a href="#" onClick={handleClick} class="the-button">{attr.label}</a><table id="users-table">{tableBody}</table></div>);
}

export default ApiButton;
