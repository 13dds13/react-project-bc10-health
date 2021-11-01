import { NotificationManager } from "react-notifications";

export const Notification = (msg) =>
  NotificationManager.error(msg, "Info:", 1500);
