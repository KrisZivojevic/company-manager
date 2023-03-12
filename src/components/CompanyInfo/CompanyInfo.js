import React, { useEffect, useState } from 'react'
import { getEmployees } from '../../api/employeeService';
import { getTasks } from '../../api/taskService';
import classes from './CompanyInfo.module.css';

const CompanyInfo = () => {
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);

  const employeesHandler = async () => {
    const result = await getEmployees();
    setEmployees(result);
  };

  const tasksHandler = async () => {
    const result = await getTasks();
    setTasks(result);
  };

  useEffect(() => {
    employeesHandler();
    tasksHandler();
  }, []);

  return (
    <div className={classes.info}>
      <h2>Company Info</h2>
      <div>
        <article>Number of employees: {employees.length}</article>
        <article>Completed Tasks</article>
        <article>
          <h3>Top 5 employees</h3>

        </article>
      </div>
    </div>
  )
}

export default CompanyInfo;