import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import axios from "axios";

type Node = {
  type: string;
  value: string;
  left: Node;
  right: Node;
};

type Rule = {
  name: string;
  ast: Node;
};

const EvaluateRule = () => {
  const [selectedRule, setSelectedRule] = useState("");
  const [rules, setRules] = useState<Rule[]>();

  useEffect(() => {
    fetchTheData();
  }, []);

  const fetchTheData = async () => {
    const res = await axios.get("/api/rules");
    const data = res.data.data;
    console.log(data[0].ast);
    setRules(data);
  };

  return (
    <div className="w-2/3 px-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Evalutate Rule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center gap-2 ">
            {rules?.map((i, index) => (
              <div key={index}>
                <button
                  className={` rounded-lg  mx-auto px-2 py-1 border-2 shadow-sm  uppercase ${
                    i.name === selectedRule
                      ? "bg-black text-white hover:bg-primary/90"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedRule(i.name)}
                >
                  {i.name}
                </button>
              </div>
            ))}
          </div>
          <form action="" className="flex flex-col gap-2 p-5 ">
            <textarea
              placeholder="Enter the Rule"
              className="p-2 border-blue-400 border rounded-sm"
            />
            <button className=" rounded-lg text-white bg-black mx-auto px-2 py-1 border-2 shadow-sm hover:bg-primary/90">
              Submit
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default EvaluateRule;
