import React from "react";

const Stage = () => {
  const stages = ["Input symptoms", "Set appointment", "Input infomation"];
  return (
    <div className="flex gap-4 text-sm">
      {stages.map((stage) => (
        <div className="my-4 uppercase border-2 border-blue-200 bg-blue-500 text-white p-2 px-4 rounded-2xl font-medium">{stage}</div>
      ))}
    </div>
  );
};

export default Stage;
