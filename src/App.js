import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTable from "./Table/DataTable";
import PhotoTable from "./Table/PhotoTable";
import Nav from "./Nav";
import Home from "./Home";
import GridDemo from "./Table/GridDemo";

export default function App() {
  return (
    <div className="app">
    <Router>
    <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/datatable" element={<DataTable/>} />
        <Route path="/phototable" element={<PhotoTable/>} />
        <Route path="/griddemo" element={<GridDemo/>} />
      </Routes>
      </Router>
      </div>
  );
}
