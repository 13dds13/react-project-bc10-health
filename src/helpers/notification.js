import { NotificationManager } from "react-notifications";

export const notification = (type, msg) => {
  switch (type) {
    case "info":
      NotificationManager.info(msg, "Info:", 1500);
      break;
    case "success":
      NotificationManager.success(msg, "Info:", 1500);
      break;
    case "warning":
      NotificationManager.warning(msg, "Warning:", 750);
      break;
    case "error":
      NotificationManager.error(msg, "Info:", 1500);
      break;
    default:
      return;
  }
};
