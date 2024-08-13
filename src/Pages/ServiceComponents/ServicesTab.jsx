import React, { useState } from 'react';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mx-auto  bg-white p-6 rounded-lg shadow-md my-20 border-2">
      {/* Tabs Header */}
      <div className="flex justify-around items-center  border-b border-gray-300 mb-4">
        <button
          className={`py-2 px-4 text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'tab1' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('tab1')}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'tab2' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'tab3' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </button>
        <button
          className={`py-2 px-4 text-gray-600 border-b-2 transition duration-300 ease-in-out ${
            activeTab === 'tab4' ? 'text-gray-800 border-gray-800' : 'border-transparent'
          }`}
          onClick={() => handleTabClick('tab4')}
        >
          Tab 4
        </button>
      </div>

      {/* Tabs Content */}
      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div className="tab-panel">
            <p>Content for Tab 1</p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="tab-panel">
            <p>Content for Tab 2</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="tab-panel">
            <p>Content for Tab 3</p>
          </div>
        )}
        {activeTab === 'tab4' && (
          <div className="tab-panel">
            <p>Content for Tab 4</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
