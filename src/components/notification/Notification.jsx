import styles from "./notification.module.css";

export default function Notification({ message }) {
  return <div className={styles.message}>{message}</div>;
}
