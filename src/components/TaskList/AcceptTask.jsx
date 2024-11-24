import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[300px] h-full flex-shrink-0 bg-blue-400 rounded-md p-5">
      <div className="w-full flex justify-between items-center mb-4">
        <p className="bg-red-500 rounded-md px-4 py-1">{data.category}</p>
        <p>{data.date}</p>
      </div>
      <h1 className="text-2xl mb-4 text-black font-semibold">{data.title}</h1>
      <p>{data.description}</p>
      <div className="w-full flex justify-between p-2">
        <button className="px-2 py-1 rounded-md text-sm tracking-tighter bg-green-600">
          Mark as done
        </button>
        <button className="px-2 py-1 rounded-md text-sm tracking-tighter bg-red-700">
          Make as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
