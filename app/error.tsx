"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-8 text-center w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Something went wrong.</h2>
      {/* <p className="mt-4">{error.message}</p> */}
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Try again
      </button>
    </div>
  );
}