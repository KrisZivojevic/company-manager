import classes from "./Navigation.module.css";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className={classes.nav__wrapper}>
      <div className={`${classes.nav__style}`}>
            <NavLink className={classes.nav__link} to='/'>Company Info</NavLink>
        <div className={classes.menu__icon} onClick={() => setIsOpen(prev => !prev)}>
          {
            isOpen ? <IoCloseOutline className={classes.nav__icon} /> : <HiMenuAlt3 className={classes.nav__icon} />
          }
        </div>
        <ul className={`${classes.list} ${classes.small_devices} ${isOpen && classes.show}`}>
          <li><NavLink to='/employees' className={classes.nav__link}>Employees</NavLink></li>
          <li><NavLink to='/tasks' className={classes.nav__link}>Tasks</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
