import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Next from "./Pages/Next";
import PaginationItems from "./Pages/PaginationItems";
import ImageUpload from "./Pages/upload";
import Load from "./Pages/Load";
import Loading from "./Pages/Loading";
import Search from "./Pages/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Next />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/PaginationItems" element={<PaginationItems />} />
        <Route path="/Load" exact element={<Load />} />
        <Route path="/Search" exact element={<Search />} />
        <Route path="/Loading" exact element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
