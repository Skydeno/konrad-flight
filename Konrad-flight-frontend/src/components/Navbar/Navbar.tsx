import React, { ReactElement } from "react";
import classes from "./Navbar.module.scss";
import { Clock } from "../Clock/Clock";
import { Link } from "react-router-dom";
import "material-icons/iconfont/outlined.css";

export const Navbar = (): ReactElement => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.navbarLogo}>
          <Link to="/" className={classes.link}>
            <span className="material-icons-outlined">airplanemode_active</span>
            <h1 className={classes.logo}>Konradflight</h1>
          </Link>
        </div>
        <div className={classes.navbarElement}>
          <Link to="/airlines" className={classes.link}>
            <p className={classes.navbarElementText}>Linie lotnicze</p>
          </Link>
        </div>
        <div className={classes.navbarElement}>
          <p className={classes.navbarElementText}>Opcja2</p>
        </div>
        <div className={classes.navbarElement}>
          <p className={classes.navbarElementText}>Opcja3</p>
        </div>
        <div className={classes.navbarElement}>
          <p className={classes.navbarElementText}>Opcja4</p>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.navbarElementLogin}>
          <Link to="/login" className={classes.link}>
            <p className={classes.navbarElementText}>Login</p>
          </Link>
        </div>
        <div className={classes.navbarClock}>
          <Clock />
        </div>
      </div>
    </div>
  );
};
