import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import classes from "./Task.module.css";
import { formatDate } from "../../helper/helper";

const Task = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__controls}>
        <button onClick={props.editHandler} className={classes.card__button}>
          <Link to={`/edit-task/${props.id}`}>
            <AiOutlineEdit size="20px" color="#7aa39a" />
          </Link>
        </button>
        <button onClick={props.deleteHandler} className={classes.card__button}>
          <AiOutlineDelete size="20px" color="#d37556" />
        </button>
      </div>
      <span>
        <Link to={`/task/${props.id}`}>{props.title}</Link>
      </span>
      <p>{props.description}</p>
      <p>{props.assignee}</p>
      <p>{formatDate(props.due_date)}</p>
    </div>
  );
};

export default Task;
