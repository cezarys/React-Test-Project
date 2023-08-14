import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Checklist from "./pages/Checklist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  var origin = window.location.origin;
  var base = '/react-test/';
  if(origin==='http://localhost:3000')
  {
    base = '/';
  }

  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/checklist/" element={<Checklist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
