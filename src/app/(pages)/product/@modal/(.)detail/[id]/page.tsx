import Modal from "@/components/core/Modal";
import { getData } from "@/services";
import Image from "next/image";

const DetailProduct = async ({ params }: { params: { id: string } }) => {
  const product = await getData(
    "https://fakestoreapi.com/products/" + params.id
  );
  // console.log(product);

  return (
    <Modal>
      <h1 className="mb-3 font-bold text-2xl text-red-500">Detail Product</h1>
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <p className="text-red-500">{product.title}</p>
      <p className="text-red-500">$ {product.price}</p>
    </Modal>
  );
};

export default DetailProduct;
