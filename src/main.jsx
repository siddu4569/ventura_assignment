import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import IPOMain from "./Pages/IPOMain";
import IPODetail from "./Pages/IPODetail";
import IPO from "./Pages/IPO";
import "./index.css"
import ScrollToTop from "./components/common/ScrollToTop";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      
      <Route path="/" element = {<IPO/>}>
        <Route index element={<IPOMain/>}/>
        <Route path="/ipo/:companyID" element={<IPODetail/>} />
      </Route>


      <Route path="/ipo" element = {<IPO/>}>
        <Route index element={<IPOMain/>}/>
        <Route path="/ipo/:companyID" element={<IPODetail/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
