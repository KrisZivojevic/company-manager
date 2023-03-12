import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteEmployee,
  editEmployee,
  getEmployees,
} from "../../api/employeeService";
import Employee from "../Employee/Employee";
import classes from "./Employees.module.css";


const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const employeesHandler = async () => {
    const result = await getEmployees();
    setEmployees(result);
  };
  const editHandler = async (id) => {
    await editEmployee(id);
    setIsUpdated((prevState) => !prevState);
  };
  const deleteHandler = async (id) => {
    await deleteEmployee(id);
    setIsUpdated((prevState) => !prevState);
  };

  useEffect(() => {
    employeesHandler();
  }, [isUpdated]);

  return (
    <section className={classes.board}>
      <button className={classes.button}>
        <Link className={classes.button__link} to="/add-employee">
          Create new employee
        </Link>
      </button>
      <div className={classes.container}>
        <header className={classes.header}>
          <span>Employee</span>
          <span>Salary</span>
          <span>Manage</span>
        </header>
        {employees.length !== 0 &&
          employees.map((employee) => (
            <Employee
              key={employee.id}
              id={employee.id}
              fullName={employee.full_name}
              salary={employee.salary}
              editHandler={() => editHandler(employee.id)}
              deleteHandler={() => deleteHandler(employee.id)}
            />
          ))}
      </div>
    </section>
  );
};

export default Employees;
