const CreateTask = () => {
  return (
    <div className="w-full bg-[#1C1C1C] p-2 mt-2 rounded-md">
      <form className="w-full h-full flex justify-center items-center gap-24">
        <div className="w-[50%] py-2 px-8">
          <div className="w-full mb-2">
            <h3 className="text-zinc-300 mb-1">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
          <div className="w-full  mb-2">
            <h3 className="text-zinc-300 mb-1">Date</h3>
            <input
              type="date"
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
          <div className="w-full  mb-2">
            <h3 className="text-zinc-300 mb-1">Assign to</h3>
            <input
              type="text"
              placeholder="employee name"
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
          <div className="w-full  mb-2">
            <h3 className="text-zinc-300 mb-1">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-5 justify-center py-4 px-4">
          <div>
            <h3 className="text-white mb-2">Description</h3>
            <textarea
              rows={10}
              className="w-full border border-white bg-transparent rounded-md outline-none"
            ></textarea>
          </div>
          <button className="w-full text-white text-semibold rounded-md bg-emerald-400 py-2">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
