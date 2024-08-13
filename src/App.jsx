import React from "react";
import { BrowserRouter, Route, Routes,Link,NavLink } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";



const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route  element={<Layout />}>
            <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
