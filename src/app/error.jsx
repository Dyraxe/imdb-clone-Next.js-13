"use client";
import { useEffect } from "react";
function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="mt-10  text-center">
      <h1 className="mb-2 text-2xl font-bold">Something went wrong</h1>
      <button
        className="underline decoration-amber-500 underline-offset-4 hover:text-amber-500"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;
