import React, { useState } from "react";

interface Props {
  id: number;
  title: string;
  onRemove: (taskId: number) => void;
}

const Task: React.FC<Props> = ({ id, title, onRemove }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const onButtonClicked = () => {
    setFadeOut(true);

    setTimeout(() => {
      onRemove(id);
    }, 400);
  };

  return (
    <li
      className={`py-4 px-2 flex justify-between items-center bg-gray-50 rounded-md shadow-sm hover:shadow-md ${
        fadeOut && "opacity-0 transition cursor-default duration-300"
      }`}>
      <h3 className="text-green-800 font-semibold">{title}</h3>
      <button onClick={onButtonClicked}>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
};

export default Task;
