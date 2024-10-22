import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { InferGetServerSidePropsType } from "next";
import axios from "axios";

type Rule = {
  name: string;
  ast: JSON;
};

export const getServerSideProps = async () => {
  try {
    const res = await axios.get("/api/rules");
    console.log(res);
    const data: Rule[] = res.data.data;
    return { props: { data } };
  } catch (error) {
    console.error(error);
  }
  // const res = await axios.get("/api/rules");
  // const data: Rule[] = res.data.data;
};

const EvaluateRule = () => {
  return (
    <div className="w-2/3 px-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Evalutate Rule</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};
export default EvaluateRule;
