import React from "react";
import { GrLinkNext } from "react-icons/gr";
const Content = (items) => {
  const { tabName, title, date, content } = items;

  return (
    <>
      <div className="flex flex-col gap-6 h-fit">
        <p className=" text-3xl font-medium">{title}</p>
        <button className=" w-fit bg-slate-400  px-6 py-1 rounded">
          {tabName}
        </button>
        <p className=" text-lg text-slate-600">{date}</p>
        <div className=" flex flex-col gap-3">
          {content.map((items, index) => {
            return (
              <div
                className=" flex gap-3 justify-center items-start"
                key={index}
              >
                <div>
                  <GrLinkNext />
                </div>
                <div>{items}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
