import { getData } from "@/services";
import Image from "next/image";

const DetailProduct = async ({ params }: { params: { id: string } }) => {
  const product = await getData(
    "https://fakestoreapi.com/products/" + params.id
  );
  // console.log(product);

  return (
    <div className="p-10 flex w-full justify-center items-center min-h-screen flex-col gap-y-2">
      <h1 className="mb-3 font-bold text-2xl text-white">Detail Product</h1>
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <p>{product.title}</p>
      <p>$ {product.price}</p>
    </div>
  );
};

export default DetailProduct;
