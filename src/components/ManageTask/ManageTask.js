import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployees } from '../../api/employeeService';
import { addTask, editTask, getTask } from '../../api/taskService';
import { formatDate } from '../../helper/helper';
import classes from "./ManageTask.module.css";

const ManageTask = () => {
  const [employees, setEmployees] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const submitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      title: title,
      description: description,
      due_date: dueDate,
      assignee: assignee,
    }

    if (id) {
      editTask(id, newTask);
    } else {
      addTask(newTask);
    }

    navigate("/tasks", { replace: true });

    setTitle("");
    setDescription("");
    setDueDate("");
    setAssignee("");
  }

  const taskHandler = async (id) => {
    const result = await getTask(id);

    const dateString = formatDate(result.due_date);

    setTitle(result.title);
    setDescription(result.description);
    setDueDate(dateString);
    setAssignee(result.assignee);
  };

  const employeesHandler = async () => {
    const result = await getEmployees();
    setEmployees(result);
  };

  useEffect(() => {
    employeesHandler();
    if (id) {
      taskHandler(id);
    }
  }, [id]);

  return (
    <div className={classes.manager}>
      <h2>Manage Task</h2>
      <form>
        <div className={classes.manager__field}>
          <label>Title:</label>
          <input onChange={(event) => setTitle(event.target.value)} value={title} />
        </div>
        <div className={classes.manager__field}>
          <label>Description:</label>
          <input onChange={(event) => setDescription(event.target.value)} value={description} />
        </div>
        <div className={classes.manager__field}>
          <label>Assignee:</label>
          <select onChange={(event) => setAssignee(event.target.value)} value={assignee} className={classes.manager__field}>
            <option>Choose an employee</option>
            {employees.length !== 0 && employees.map(employee => <option>{employee.full_name}</option>)}
          </select>
        </div>
        <div className={classes.manager__field}>
          <label>Due date:</label>
          <input type="date" onChange={(event) => setDueDate(event.target.value)} value={dueDate} />
        </div>
        <button className={classes.button} type='submit' onClick={submitHandler}>{!id ? "Create" : "Edit"} task</button>
      </form>
    </div>
  )
}

export default ManageTask;