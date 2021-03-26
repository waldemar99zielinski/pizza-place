import React from "react";
import "./notification.css";
import { FaTimes } from "react-icons/fa";
import NotificationPanel from "./NotificationPanel";

//redux
import { connect } from "react-redux";
const index = (props) => {
  return (
    <div>
      {console.log(props.notifications)}
      {props.notifications.map((e) => {
        return <NotificationPanel key={e.id} id={e.id} message={e.message} />;
      })}
    </div>
  );
};
const mapStateToPros = (state) => {
  const notifications = state.notification.openedNotifications;
  return { notifications };
};

export default connect(mapStateToPros)(index);
