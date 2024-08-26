import React, { useState } from 'react';
import DMIT from "../ServiceComponents/Tabs/DMIT"
import IGEN from "../ServiceComponents/Tabs/IGEN"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('DMIT');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=" bg-white  my-20 border-2">
      {/* Tabs Header */}
      <div className="flex justify-around items-center  border-b border-gray-300 mb-4">
        <button
          className={`py-2 px-4 text-2xl font-semibold text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'DMIT' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('DMIT')}
        >
         DMIT
        </button>
        <button
          className={`py-2 px-4 text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'TIA' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('TIA')}
        >
          TIA
        </button>
        <button
          className={`py-2 px-4 text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'IGEN' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('IGEN')}
        >
         IGEN
        </button>
        <button
          className={`py-2 px-4 text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'Consultancy' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('Consultancy')}
        >
         Consultancy
        </button>
      </div>

      {/* Tabs Content */}
      <div className="tab-content">
        {activeTab === 'DMIT' && (
          <div className="tab-panel">
          <DMIT/>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="tab-panel">
            <p>Content for Tab 2</p>
          </div>
        )}
        {activeTab === 'IGEN' && (
          <div className="tab-panel">
            <IGEN/>
          </div>
        )}
        {activeTab === 'tab4' && (
          <div className="tab-panel">
            <Consultancy/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
