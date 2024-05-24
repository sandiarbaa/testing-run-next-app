import { getData } from "@/services";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getData("https://fakestoreapi.com/products");
  // console.log(products.data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white text-2xl font-bold">Product Page</h1>
      <div className="gap-x-5 mt-5 grid grid-cols-3 justify-center max-w-7xl w-full">
        {products.length > 0 &&
          products.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              key={product.id}
              className="card w-72 shadow-xl bg-slate-500 text-black mb-8 object-cover h-96"
            >
              <figure>
                <Image
                  // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  src={product.image}
                  alt="Shoes"
                  width={500}
                  height={500}
                  className="w-full h-96"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                  <div>
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </div>
                  <div className=" flex gap-x-2">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
