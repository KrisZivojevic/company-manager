import { Routes, Route, NavLink } from "react-router-dom";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import Employees from "./components/Employees/Employees";
import ManageEmployee from "./components/ManageEmployee/ManageEmployee";
import ManageTask from "./components/ManageTask/ManageTask";
import Navigation from "./components/Navigation/Navigation";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div>
      {/* NAVIGATION COMPONENT */}
      <Navigation />

      <Routes>
        {/* EMPLOYEE FLOW */}
        <Route path="/add-employee" element={
          <div className="wrapper">
            <ManageEmployee />
          </div>
        } />
        <Route path="/edit-employee/:id" element={
          <div className="wrapper">
            <ManageEmployee />
          </div>
        } />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/employees" element={<Employees />} />
        {/* TASK FLOW */}
        <Route path="/add-task" element={
          <div className="wrapper">
            <ManageTask />
          </div>
        } />
        <Route path="/edit-task/:id" element={
          <div className="wrapper">
            <ManageTask />
          </div>
        } />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/tasks" element={<Tasks />} />
        {/* COMPANY INFO COMPONENT */}
        <Route path="/" element={<CompanyInfo />} />
      </Routes>
    </div>
  );
}
export default App;
