import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../../api/taskService";
import { formatDate } from "../../helper/helper";
import classes from "./TaskDetails.module.css";

const TaskDetails = () => {
  const [task, setTask] = useState(null);
  const { id } = useParams();

  const taskHandler = async (id) => {
    const result = await getTask(id);

    const dateString = formatDate(result.due_date)
    setTask({ ...result, due_date: dateString });
  };
  useEffect(() => {
    taskHandler(id);
  }, [id]);

  return (
    <div className={classes.details}>
      <h2>Task Details</h2>
      <div className={classes.details__field}>
        <h3>Title:</h3>
        <span>{task?.title}</span>
      </div>
      <div className={classes.details__field}>
        <h3>Description:</h3>
        <span>{task?.description}</span>
      </div>
      <div className={classes.details__field}>
        <h3>Assignee:</h3>
        <span>{task?.assignee}</span>
      </div>
      <div className={classes.details__field}>
        <h3>Due date:</h3>
        <span>{task?.due_date}</span>
      </div>
    </div>
  );
};

export default TaskDetails;
