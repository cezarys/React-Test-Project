import React, { Component,useState } from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
return (<div id="main-page">
  <ul id="main-menu">
<li><Link to="/">Home</Link></li>
<li><Link to="/checklist/">Checklist</Link></li>
  </ul><div id="main-content-wrapper"><Outlet /></div></div>);
};

export default Layout;
