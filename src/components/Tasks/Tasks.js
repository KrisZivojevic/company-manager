import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteTask,
  editTask,
  getTasks,
} from "../../api/taskService";
import Task from "../Task/Task";
import classes from "./Tasks.module.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const tasksHandler = async () => {
    const result = await getTasks();
    setTasks(result);
  };
  const editHandler = async (id) => {
    await editTask(id);
    setIsUpdated((prevState) => !prevState);
  };
  const deleteHandler = async (id) => {
    await deleteTask(id);
    setIsUpdated((prevState) => !prevState);
  };

  useEffect(() => {
    tasksHandler();
  }, [isUpdated]);

  return (
    <section className={classes.board}>
      <button className={classes.button}>
        <Link className={classes.button__link} to="/add-task">
          Create new task
        </Link>
      </button>
      <div className={classes.container}>
        {tasks.length !== 0 &&
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              due_date={task.due_date}
              editHandler={() => editHandler(task.id)}
              deleteHandler={() => deleteHandler(task.id)}
            />
          ))}
      </div>
    </section>
  );
};

export default Tasks;
