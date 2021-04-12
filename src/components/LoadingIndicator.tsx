import React from "react";

const LoadingIndicator: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-64 text-green-500 select-none">
    <svg
      className="w-12 h-12 animate-bounce"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      />
    </svg>
    <p className="font-bold animate-pulse">Loading</p>
  </div>
);

export default LoadingIndicator;
