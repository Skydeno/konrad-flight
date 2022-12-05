import React from "react";
import classes from "./Navbar.module.scss";
import { Clock } from "../Clock/Clock";
import "material-icons/iconfont/outlined.css";

export const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.navbarLogo}>
          <span class="material-icons-outlined">airplanemode_active</span>
          <h1 className={classes.logo}>Konradflight</h1>
        </div>
        <div className={classes.navbarElement}>
          <p className={classes.navbarElementText}>Opcja1</p>
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
          <p className={classes.navbarElementText}>Login</p>
        </div>
        <div className={classes.navbarClock}>
          <Clock />
        </div>
      </div>
    </div>
  );
};
