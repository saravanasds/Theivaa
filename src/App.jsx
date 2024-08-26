import React, {useEffect} from "react";
import { BrowserRouter, Route, Routes,Link,NavLink } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";


import DMIT from "./Pages/ServiceComponents/Tabs/DMIT"
import TIA from "./Pages/ServiceComponents/Tabs/TIA"
import IGEN from "./Pages/ServiceComponents/Tabs/IGEN"
import AISEC from "./Pages/ServiceComponents/Tabs/AISEC"
import Consultancy from "./Pages/ServiceComponents/Tabs/Consultancy"
import Esevai from "./Pages/ServiceComponents/Tabs/Esevai"


import 'aos/dist/aos.css';
// Import AOS JavaScript
import AOS from 'aos';
   
const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 500, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route  element={<Layout />}>
            <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services/>} />
              <Route path="DMIT" element={<DMIT/>} />
              <Route path="TIA" element={<TIA/>} />
              <Route path="IGEN" element={<IGEN />} />
              <Route path="AISEC" element={<AISEC/>} />
              <Route path="Consultancy" element={<Consultancy/>} />
              <Route path="Esevai" element={<Esevai/>} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
