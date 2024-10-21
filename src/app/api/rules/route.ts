import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/connectDB";
import Rules from "../../../../Models/Rules";

export async function GET() {
  await connectDB();
  try {
    const rules = await Rules.find({});
    return NextResponse.json({
      status: "success",
      data: rules,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      error: error,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, ast } = body;

    if (!name || !ast) {
      return NextResponse.json({
        status: "failed",
        message: "Please provide rule name and ast",
      });
    }

    const astJson = await JSON.parse(ast);

    const newRule = await Rules.create({ name, ast: astJson });
    return NextResponse.json({
      status: "success",
      data: newRule,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      error: error,
    });
  }
}
