import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../../api/employeeService";
import { formatDate } from "../../helper/helper";
import classes from "./EmployeeDetails.module.css";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  const employeeHandler = async (id) => {
    const result = await getEmployee(id);
    
    const dateString = formatDate(result.birth_date)
    setEmployee({ ...result, birth_date: dateString });
  };
  useEffect(() => {
    employeeHandler(id);
  }, [id]);

  return (
    <div className={classes.details}>
      <h2>Employee Details</h2>
      <div className={classes.details__field}>
        <h3>Full name:</h3>
        <span>{employee?.full_name}</span>
      </div>
      <div className={classes.details__field}>
        <h3>Salary:</h3>
        <span>{employee?.salary}</span>
      </div>
      <div className={classes.details__field}>
        <h3>Phone:</h3>
        <span>{employee?.phone}</span>
      </div>
      <div className={classes.details__field}>
        <h3>Email:</h3>
        <span>{employee?.email}</span>
      </div>
      <div className={classes.details__field}>
        <h3>Date of birth:</h3>
        <span>{employee?.birth_date}</span>
      </div>
    </div>
  );
};

export default EmployeeDetails;
