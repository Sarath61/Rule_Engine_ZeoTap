import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" min-h-screen w-full flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Rule Engine with AST</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col gap-2 p-5 ">
            <textarea placeholder="Enter the Rule" className="p-2" />
            <button className=" rounded-lg text-black mx-auto px-2 py-1 border-2 shadow-sm hover:bg-gray-200">
              Submit
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
