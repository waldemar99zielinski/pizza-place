import React, { useEffect } from "react";
import "./notification.css";
import { FaTimes } from "react-icons/fa";

//redux
import { connect } from "react-redux";
import { closeNotification } from "../../redux/actions/notification";
const NotificationPanel = (props) => {
  const time = 3000;
  useEffect(() => {
    const timer = setTimeout(() => props.closeNotification(props.id), time);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="notification">
      <h2 className="notification-message">{props.message}</h2>
      {console.log("Notification id:", props.id)}
      {/* <FaTimes size={25} className="notification-close" /> */}
    </div>
  );
};

export default connect(null, { closeNotification })(NotificationPanel);
