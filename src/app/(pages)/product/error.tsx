"use client";

import { useEffect } from "react";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col text-white">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="text-xl font-semibold mt-5">Try again!</p>
    </div>
  );
};

export default ErrorPage;
