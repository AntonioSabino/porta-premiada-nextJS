import styles from "../styles/presente.module.css";

export default function Presente() {
  return (
    <div className={styles.presente}>
      <div className={styles.tampa}></div>
      <div className={styles.corpo}></div>
      <div className={styles.fita_vertical}></div>
      <div className={styles.fita_horizontal}></div>
    </div>
  );
}
