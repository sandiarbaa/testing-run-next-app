import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-10 w-full h-10 bg-black text-white px-[5%] flex items-center justify-between fixed">
      <div>
        <Link href="/">
          <h1>Navbar</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-4 text-sm items-center">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/product">
            <li>Product</li>
          </Link>
          <Link href="/orang">
            <li>User</li>
          </Link>
          <Link href="/api">
            <li className="px-4 rounded-md py-1 bg-green-500 text-white text-sm hover:bg-green-600 transition duration-200">
              API
            </li>
          </Link>
          <Link href="/login">
            <li className="px-4 rounded-md py-1 bg-blue-500 text-white text-sm hover:bg-blue-600 transition duration-200">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
