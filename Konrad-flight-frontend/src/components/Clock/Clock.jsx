import { useState, useEffect } from "react";
import classes from "./Clock.module.scss";
export function Clock() {
  const [date, setDate] = useState(new Date());

  const utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <h2 className={classes.text}>{date.toLocaleTimeString().slice(0, 5)}</h2>
  );
}
