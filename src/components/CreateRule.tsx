import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

const CreateRule = () => {
  return (
    <div className="w-2/3 px-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Create Rule</CardTitle>
        </CardHeader>
        <CardContent>
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

export default CreateRule;
