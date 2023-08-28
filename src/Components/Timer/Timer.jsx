import React from "react";
import { ReactDOM } from "react-dom/client";
import styles from "./timer.module.scss";
import Time from "./Time";
import Countdown from "react-countdown";
const Timer = () => {
  const Completionist = () => <span>You are good to go!</span>

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
      );
    }
  };

//   ReactDOM.render(
    
//     document.getElementById("root")
//   );
  return <div className={styles.countdown}>
    <Countdown date={Date.now() +  6739200000} renderer={renderer} />
  </div>;
};

export default Timer;
