const TaskInfo = ({ data }) => {

  return (
    <div className="w-full flex gap-5 p-10">
      <div className="p-10 w-[45%] rounded-xl bg-red-400">
        <h1 className="text-3xl font-semibold">{data?.taskInfo.newTask}</h1>
        <h3 className="text-2xl text-black">New Task</h3>
      </div>
      <div className="p-10 w-[45%] rounded-xl bg-blue-400">
        <h1 className="text-3xl font-semibold">{data?.taskInfo.active}</h1>
        <h3 className="text-2xl text-black">Accepted</h3>
      </div>
      <div className="p-10 w-[45%] rounded-xl bg-green-400">
        <h1 className="text-3xl font-semibold">{data?.taskInfo.completed}</h1>
        <h3 className="text-2xl text-black">Completed</h3>
      </div>
      <div className="p-10 w-[45%] rounded-xl bg-yellow-400">
        <h1 className="text-3xl font-semibold">{data?.taskInfo.failed}</h1>
        <h3 className="text-2xl text-black">Failed</h3>
      </div>
    </div>
  );
};

export default TaskInfo;
