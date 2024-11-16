import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedUserData, setLoggedUserData] = useState("");

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const data = localStorage.getItem("loggedInUser");
      if (data) {
        setUser(data.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.adminData.find((a) => a.email == email && a.password == password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employeesData.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      window.alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard data={loggedUserData} />}
    </>
  );
};

export default App;
