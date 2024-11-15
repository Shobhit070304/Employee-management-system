import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");

  const authData = useContext(AuthContext);  

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.adminData.find((a) => a.email == email && a.password == password)
    ) {
      setUser("admin");
    } else if (
      authData &&
      authData.employeesData.find(
        (e) => e.email == email && e.password == password
      )
    ) {
      setUser("employee");
    } else {
      window.alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
};

export default App;
