import React, { useEffect, useState } from "react";
import "./notification.css";
import { FaTimes } from "react-icons/fa";

//redux
import { connect } from "react-redux";
import { closeNotification } from "../../redux/actions/notification";
const NotificationPanel = (props) => {
  const [animation, setAnimation] = useState("fade-in");

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      console.log("NotificationPanel: close not");
      props.closeNotification(props.id);
    }, 3000);
    const animationTimer = setTimeout(() => {
      console.log("NotificationPanel: change style");
      setAnimation("fade-out");
    }, 2500);
    return () => {
      clearTimeout(notificationTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <div className={"notification " + animation}>
      <h2 className="notification-message">{props.message}</h2>
      {console.log("Notification id:", props.id)}
    </div>
  );
};

export default connect(null, { closeNotification })(NotificationPanel);
