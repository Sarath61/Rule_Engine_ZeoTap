import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";

const CreateRule = () => {
  const { toast } = useToast();
  const [rule, SetRule] = useState("");
  const sendTheData = async () => {
    try {
      const res = await axios.post("/api/rules", {
        name: rule,
      });
      SetRule(res.data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error at Uploading rule...",
        description: "problem at sending  rules",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  return (
    <div className="w-2/3 px-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Create Rule</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action=""
            onSubmit={() => sendTheData}
            className="flex flex-col gap-2 p-5 "
          >
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="p-2 border-blue-400 border rounded-sm"
            />
            <textarea
              placeholder="Enter the Rule"
              className="p-2 border-blue-400 border rounded-sm"
            />
            <button className=" rounded-lg text-white bg-black mx-auto px-2 py-1 border-2 shadow-sm hover:bg-primary/90">
              Submit
            </button>
          </form>
          <div>{rule}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateRule;
