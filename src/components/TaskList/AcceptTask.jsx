import React from "react";

const AcceptTask = () => {
  return (
    <div className="w-[300px] h-full flex-shrink-0 bg-blue-400 rounded-md p-5">
      <div className="w-full flex justify-between items-center mb-4">
        <p className="bg-red-500 rounded-md px-4 py-1">High</p>
        <p>14 Nov 2024</p>
      </div>
      <h1 className="text-2xl mb-4 text-black font-semibold">
        Make a youtube video
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
        consectetur nisi. Donec auctor, est id gravida ultricies, lectus diam
        convallis ex, vitae elementum ligula nunc at turpis.
      </p>
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
