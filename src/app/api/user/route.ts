import { NextResponse, NextRequest } from "next/server";

const users = [
  {
    id: 1,
    name: "Sandi",
    email: "sandi@gmail.com",
  },
  {
    id: 2,
    name: "Arba",
    email: "arba@gmail.com",
  },
  {
    id: 3,
    name: "Putra",
    email: "putra@gmail.com",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailUser = users.find((item) => item.id === Number(id));
    if (detailUser) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailUser,
      });
    }
    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "Success", data: users });
}
