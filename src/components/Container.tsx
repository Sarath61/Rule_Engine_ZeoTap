import React, { useState } from "react";
import CreateRule from "./CreateRule";
import CombineRules from "./CombineRules";
import EvaluateRule from "./EvaluateRule";
const optionsList = [
  {
    name: "Create Rule",
    component: CreateRule,
  },
  {
    name: "Combine Rules",
    component: CombineRules,
  },
  {
    name: "Evaluate Rule",
    component: EvaluateRule,
  },
];

const Container = () => {
  const [select, setSelect] = useState("Create Rule");

  const HanldeClick = (name: string) => {
    setSelect(name);
  };

  const SelectComponent = optionsList.find((i) => i.name === select)?.component;

  return (
    <div className="w-full mx-5 my-5 flex flex-col justify-center items-center">
      <div className=" flex  justify-between items-center gap-4 px-2 py-2 mb-5 ">
        {optionsList.map((option, index) => (
          <div key={index}>
            <button
              className={` rounded-lg text-white  mx-auto px-2 py-1 border-2 shadow-sm hover:bg-primary/90 ${
                option.name === select
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }
              }`}
              onClick={() => HanldeClick(option.name)}
            >
              {option.name}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center" >
        {SelectComponent && <SelectComponent />}
      </div>
    </div>
  );
};

export default Container;
