import Header from "../Others/Header";
import TaskInfo from "../Others/TaskInfo";
import Tasks from "../TaskList/Tasks";

const EmployeeDashboard = ({ data }) => {

  return (
    <div className="w-screen h-screen p-10 bg-zinc-800">
      <Header data={data} />
      <TaskInfo data={data} />
      {/* <div className="p-4"> */}
        <Tasks data={data} />
      {/* </div> */}
    </div>
  );
};

export default EmployeeDashboard;
