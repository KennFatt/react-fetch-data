import React, { HTMLProps } from "react";

interface Props {
  handler: (value: string) => void;
}

const SearchTask: React.FC<Props & HTMLProps<HTMLInputElement>> = ({
  handler,
  ...rest
}) => {
  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    handler(ev.target.value);
  };

  return (
    <input
      className={`bg-gray-100 text-green-800 placeholder-green-700 py-2 px-2 shadow-md rounded-md focus:outline-none focus:placeholder-transparent focus:ring-2 focus:ring-green-700 transition duration-300 w-full ${
        rest.value === "" && "text-center"
      }`}
      type="text"
      onChange={onInputChange}
      {...rest}
    />
  );
};

export default SearchTask;
