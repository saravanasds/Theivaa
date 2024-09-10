import React from "react";
import Brain from "../../ServiceComponents/Tabs/TiaDetails/Brain";
import TiaHead from "../Tabs/TiaDetails/TiaHead";
import Edge from "../Tabs/TiaDetails/Edge";
import Play from "../Tabs/TiaDetails/Play";
import Mock from "./TiaDetails/Mock";
import TestHub from "./TiaDetails/TestHub";
import Media from "./TiaDetails/Media";
import Shewin from "./TiaDetails/Shewin";



import { FaArrowLeft } from "react-icons/fa6";

const TIA = () => {
  return (
    <div className="w-full h-auto">
      <div className="sticky top-24 z-20">
      <TiaHead/>
      </div>
      
      <div id="brain">
        <Brain/>
      </div>
      <div id="edge">
        <Edge/>
      </div>
      <div id="play">
        <Play/>
      </div>
      <div id="mock">
        {" "}
        <Mock/>
      </div>
      <div id="test Hub">
        {" "}
        <TestHub/>
      </div>
      <div id="media">
        {" "}
        <Media/>
      </div>
      <div id="shewin">
        {" "}
        <Shewin/>
      </div>

      <div className="flex justify-center items-center py-10">
         <button className="lg:px-6 lg:py-2 px-3 py-1 bg-primary hover:bg-red  text-white lg:text-base text-sm font-semibold tracking-wider rounded-lg">
            <a href="/services" className="flex gap-3">
              <FaArrowLeft className="mt-1" />
              Go Back
            </a>
          </button>
      </div>
    </div>
  );
};

export default TIA;
