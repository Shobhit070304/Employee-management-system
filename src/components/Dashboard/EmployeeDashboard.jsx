import Header from "../Others/Header";
import TaskInfo from "../Others/TaskInfo";
import Tasks from "../TaskList/Tasks";

const EmployeeDashboard = () => {
  return (
    <div className="w-screen h-screen p-10 bg-zinc-800">
      <Header />
      <TaskInfo />
      <div className="p-4">
        <Tasks />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
