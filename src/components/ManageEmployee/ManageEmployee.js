import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, editEmployee, getEmployee } from '../../api/employeeService';
import { formatDate } from '../../helper/helper';
import classes from "./ManageEmployee.module.css";

const ManageEmployee = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const submitHandler = (event) => {
    event.preventDefault();

    const newEmployee = {
      full_name: name,
      salary: salary,
      birth_date: birthday,
      phone: phone,
      email: email,
    }

    if (id) {
      editEmployee(id, newEmployee);
    } else {
      addEmployee(newEmployee);
    }

    navigate("/employees", { replace: true });

    setName("");
    setSalary("");
    setPhone("");
    setEmail("");
    setBirthday("");
  }

  const employeeHandler = async (id) => {
    const result = await getEmployee(id);

    const dateString = formatDate(result.birth_date);

    setName(result.full_name);
    setSalary(result.salary);
    setPhone(result.phone);
    setEmail(result.email);
    setBirthday(dateString);
  };

  useEffect(() => {
    if (id) {
      employeeHandler(id);
    }
  }, [id]);

  return (
    <div className={classes.manager}>
      <h2>Manage Employee</h2>
      <form>
        <div className={classes.manager__field}>
          <label>Full name:</label>
          <input onChange={(event) => setName(event.target.value)} value={name} />
        </div>
        <div className={classes.manager__field}>
          <label>Salary:</label>
          <input type="number" min={1} onChange={(event) => setSalary(event.target.value)} value={salary} />
        </div>
        <div className={classes.manager__field}>
          <label>Phone:</label>
          <input onChange={(event) => setPhone(event.target.value)} value={phone} />
        </div>
        <div className={classes.manager__field}>
          <label>Email:</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div className={classes.manager__field}>
          <label>Date of birth:</label>
          <input type="date" onChange={(event) => setBirthday(event.target.value)} value={birthday} />
        </div>
        
       
        
        <button className={classes.button} type='submit' onClick={submitHandler}>{!id ? "Create" : "Edit"} employee</button>
      </form>
    </div>
  )
}

export default ManageEmployee;