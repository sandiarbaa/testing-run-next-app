import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json();
  return NextResponse.json({
    status: 200,
    message: "Login Success",
    data: res,
  });
}
