import { ReactNode } from "react";

export default function Layout({
  children,
  overlay,
}: {
  children: ReactNode;
  overlay: ReactNode;
}) {
  return (
    <div className="w-full min-h-screen p-14">
      <div className="w-full h-20 bg-yellow-400 p-5 mb-5 text-black rounded-lg">
        <h1>Layout</h1>
      </div>
      <div className="flex justify-between gap-x-3 w-full h-80 bg-red-500 rounded-lg overflow-hidden">
        <div className="flex w-full max-w-sm bg-green-300 p-5 gap-x-2">
          <div className="bg-white rounded-lg w-full">
            <h1>Content 1</h1>
          </div>
          <div className="bg-white rounded-lg w-full">
            <h1>Content 2</h1>
          </div>
        </div>
        <div className="flex w-full bg-blue-300 p-5 flex-wrap justify-around">
          <div className="w-full rounded-lg h-10 bg-yellow-400 max-w-xs">
            {children}
          </div>
          {/* <div className="max-w-xs w-full rounded-lg p-5 text-white">
            {overlay}
          </div> */}
        </div>
      </div>
    </div>
  );
}
