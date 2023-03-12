import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import classes from "./Employee.module.css";

const Employee = (props) => {
  return (
    <div className={classes.card}>
      <span>
        <Link to={`/employee/${props.id}`}>{props.fullName}</Link>
      </span>
      <span>{props.salary}</span>
      <div className={classes.card__controls}>
        <button onClick={props.editHandler} className={classes.card__button}>
          <Link to={`/edit-employee/${props.id}`}>
            <AiOutlineEdit size="20px" color="#7aa39a" />
          </Link>
        </button>
        <button onClick={props.deleteHandler} className={classes.card__button}>
          <AiOutlineDelete size="20px" color="#d37556" />
        </button>
      </div>
    </div>
  );
};

export default Employee;
