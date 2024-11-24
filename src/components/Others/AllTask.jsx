import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  // console.log(authData.employeesData);

  return (
    <div className="w-full bg-[#1C1C1C] rounded-md mt-4 p-5">
      <div className="w-full flex py-2 mb-2 justify-between rounded-md bg-red-400 px-10">
        <h4 className="w-2/6">Employee Name</h4>
        <h3 className="w-1/6">New</h3>
        <h3 className="w-1/6">Active</h3>
        <h3 className="w-1/6">Completed</h3>
        <h3 className="w-1/6">Failed</h3>
      </div>

      {authData.employeesData.map((emp, idx) => (
        <div
          className="w-full flex py-2 justify-between rounded-md border-2 border-emerald-500 bg-zinc-900 pl-5"
          key={idx}
        >
          <h4 className="w-2/6">{emp.name}</h4>
          <h3 className="w-1/6">{emp.taskInfo.newTask}</h3>
          <h3 className="w-1/6 text-blue-500">{emp.taskInfo.active}</h3>
          <h3 className="w-1/6 text-green-600">{emp.taskInfo.completed}</h3>
          <h3 className="w-1/6 text-yellow-300">{emp.taskInfo.failed}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
