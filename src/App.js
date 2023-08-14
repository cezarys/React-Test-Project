import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Checklist from "./pages/Checklist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
