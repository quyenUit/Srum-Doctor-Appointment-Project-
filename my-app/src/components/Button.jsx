import React from "react";

const Button = (props) => {
  return (
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
