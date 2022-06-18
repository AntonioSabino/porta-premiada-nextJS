import styles from "../styles/entradaNumerica.module.css";

interface EntradaNumericaProps {
  text: string
  value: number
  handleChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps) {
  const { text, value, handleChange } = props

  const dec = () => handleChange(value - 1)
  const inc = () => handleChange(value + 1)

  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.botoes}>
        <button className={styles.btn} onClick={dec}>-</button>
        <button className={styles.btn} onClick={inc}>+</button>
      </div>
    </div>
  )
}
