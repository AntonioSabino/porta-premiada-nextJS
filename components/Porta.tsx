import PortaModel from "../model/porta";
import styles from "../styles/porta.module.css";

interface PortaPropos {
  porta: PortaModel
}

export default function Porta(props: PortaPropos) {
  const { porta } = props

  const selecionada = porta.selecionada ? styles.selecionada : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
