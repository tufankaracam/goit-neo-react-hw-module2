import styles from "./feedback.module.css";

export default function Feedback({ data, totalFeedback, positiveFeedback }) {
  return (
    <div className={styles.feedbacks}>
      <div>Good: {data.good}</div>
      <div>Neutral: {data.neutral}</div>
      <div>Bad: {data.bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {positiveFeedback}%</div>
    </div>
  );
}
