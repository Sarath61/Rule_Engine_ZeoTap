"use client";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className=" min-h-screen w-full flex justify-center items-center">
      <div className=" w-full flex flex-col justify-center items-center">
        <h1 className="p-1  text-2xl font-bold text-black">
          Rule Engine with
          <span className="text-blue-500 text-3xl font-bold p-2">AST</span>
        </h1>
        <Container />
      </div>
    </div>
  );
}
