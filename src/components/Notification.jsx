import React from "react";
import "./Notification.css";
import xmark from "../assets/images/xmark-solid.svg";

const Notification = (props) => {
  return (
    <div className="notification--wrapper">
      <div className="notification">
        <div
          className="notification--xmark"
          onClick={() => {
            props.setShowingNotification(false);
          }}
        >
          <img src={xmark} alt="" />
        </div>
        {props.guessMode ? "You entered guess mode." : "You exited guess mode."}
        <div>All cards re-shuffled.</div>
      </div>
    </div>
  );
};

export default Notification;
