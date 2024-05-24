import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex min-h-screen justify-center items-center flex-col text-white">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-xl font-semibold my-4">Not Found</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-800 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
