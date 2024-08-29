import styles from "./options.module.css";

export default function Options({ onReset, updateFeedback, totalFeedback }) {
  const handleClick = (e) => {
    updateFeedback(e.target.name);
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={handleClick} name="good">
        Good
      </button>
      <button className={styles.button} onClick={handleClick} name="neutral">
        Neutral
      </button>
      <button className={styles.button} onClick={handleClick} name="bad">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={styles.button}
          onClick={() => {
            onReset();
          }}
          name="reset"
        >
          Reset
        </button>
      )}
    </div>
  );
}
