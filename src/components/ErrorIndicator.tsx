import React from "react";

const ErrorIndicator: React.FC = () => (
  <div className="flex flex-col justify-center items-center min-h-screen text-green-500 select-none space-y-5">
    <svg
      className="w-24 h-24"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
        clipRule="evenodd"
      />
    </svg>
    <p className="font-bold">Something went wrong...</p>
  </div>
);

export default ErrorIndicator;
