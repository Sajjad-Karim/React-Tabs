import React, { useState } from "react";
import Wrapper from "../wrapper/Wrapper";
import Sidebar from "../tab-sidebar/Sidebar";
import Content from "../tabs-content/Content";
import { TabsData } from "../../tabs-data/data";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const item = TabsData[activeTab];

  return (
    <div className=" w-full h-screen bg-slate-300 text-slate-900">
      <Wrapper>
        <div className=" flex gap-20">
          <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
          <Content {...item} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Tabs;
