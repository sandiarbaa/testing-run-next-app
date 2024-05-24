import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b2e8f89f-7725-40e8-8616-4e35415f66e8/air-jordan-1-low-se-craft-shoes-8SsDw6.png",
  },
  {
    id: 2,
    name: "Baju",
    price: 5900000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb6424cc-f736-48f9-a5d4-31aa1ce75626/air-force-1-07-easyon-shoes-LKXPhZ.png",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}
