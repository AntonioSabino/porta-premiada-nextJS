import PortaModel from "../model/porta";
import styles from "../styles/porta.module.css";

interface PortaPropos {
  value: PortaModel
  handleSelect: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaPropos) {
  const porta = props.value

  const selecionada = porta.selecionada ? styles.selecionada : "";

  const alternarSelecao = (_e) => props.handleSelect(porta.alternarSelecao())

  return (
    <div className={styles.area} onClick={alternarSelecao}>
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
