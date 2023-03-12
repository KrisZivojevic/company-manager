import React, { useEffect, useState } from 'react'
import { getEmployees } from '../../api/employeeService';
import { getTasks } from '../../api/taskService';
import { topEmployees } from '../../helper/helper';
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

  useEffect(() => {
    topEmployees(tasks)
  }, [tasks]);

  return (
    <div className={classes.info}>
      <h2>Company Info</h2>
      <div>
        <article>
          <h3>Number of employees: {employees.length}</h3>
          <h3>Number of tasks: {tasks.length}</h3>
        </article>
        <article>
          <h3>Top 5 employees</h3>
          {topEmployees(tasks).map(employee => <p style={{ textAlign: 'left', width: '300px', margin: '10px auto', padding: 5 }}>{employee}</p>)}
        </article>
      </div>
    </div>
  )
}

export default CompanyInfo;