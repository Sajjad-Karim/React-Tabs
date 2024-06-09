import React from "react";
import { TabsData } from "../../tabs-data/data";
const Sidebar = ({ setActiveTab, activeTab }) => {
  return (
    <>
      <ul className="flex flex-col h-fit gap-5  items-center justify-center">
        {TabsData.map((item, index) => {
          const isActive = index === activeTab;
          return (
            <li
              key={index}
              className={`cursor-pointer text-lg font-medium font-serif w-40 text-center 
                ${
                  isActive && "text-emerald-500 border-l-2 border-emerald-500"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {item.tabName}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
