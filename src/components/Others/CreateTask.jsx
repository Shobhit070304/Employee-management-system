import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newtask, setNewTask] = useState({});

  // const handleCreateTask = (e) => {
  //   e.preventDefault();
  //   setNewTask({
  //     active: false,
  //     newTask: true,
  //     completed: false,
  //     failed: false,
  //     title,
  //     description,
  //     date,
  //     category,
  //   });

  //   const data = JSON.parse(localStorage.getItem("employees"));
  //   const newData = data.forEach(function (e) {
  //     if (e.name === assignTo) {
  //       e.tasks.push(newtask);
  //     }
  //   });
  //   localStorage.setItem("employees", JSON.stringify(newData));
  //   console.log(localStorage.getItem("employees"));

  //   setTitle("");
  //   setDate("");
  //   setAssignTo("");
  //   setCategory("");
  //   setDescription("");
  //   setNewTask({});
  // };

  const handleCreateTask = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      title,
      description,
      date,
      category,
    };

    // Retrieve employees from localStorage
    const data = JSON.parse(localStorage.getItem("employees")) || [];

    // Update the specific employee's tasks
    const updatedData = data.map((employee) => {
      if (employee.name === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask], // Add the new task
        };
      }
      return employee; // Leave other employees unchanged
    });

    // Save the updated data back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // Debugging log
    console.log(
      "Updated employees:",
      JSON.parse(localStorage.getItem("employees"))
    );

    // Reset form fields
    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="w-full bg-[#1C1C1C] p-2 mt-2 rounded-md">
      <form
        onSubmit={handleCreateTask}
        className="w-full h-full flex justify-center items-center gap-24"
      >
        <div className="w-[50%] py-2 px-8">
          <div className="w-full mb-2">
            <h3 className="text-zinc-300 mb-1">Task Title</h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Make a UI design"
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
          <div className="w-full  mb-2">
            <h3 className="text-zinc-300 mb-1">Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
          <div className="w-full  mb-2">
            <h3 className="text-zinc-300 mb-1">Assign to</h3>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="employee name"
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
          <div className="w-full  mb-2">
            <h3 className="text-zinc-300 mb-1">Category</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="design, dev, etc"
              className="w-full p-2 outline-none border-2  bg-transparent text-white rounded-md"
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-5 justify-center py-4 px-4">
          <div>
            <h3 className="text-white mb-2">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
