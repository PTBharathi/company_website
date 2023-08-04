import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import React, { useEffect, useState } from "react";
import { Contact } from "./components/contact";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import About from "./components/about";
import { Product } from "./components/product";
function App() {
  const [primaryColor, setPrimaryColor] = useState("#4154f1");

  return (
    <div class="page-wrapper" style={{ "--primaryColor": primaryColor }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Section />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Product />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
