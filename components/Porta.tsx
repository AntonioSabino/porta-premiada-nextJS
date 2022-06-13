import PortaModel from "../model/porta.model";
import Presente from './Presente'
import styles from "../styles/porta.module.css";

interface PortaPropos {
  value: PortaModel
  handleChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaPropos) {
  const porta = props.value

  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : "";

  const alternarSelecao = () => props.handleChange(porta.alternarSelecao())
  const abrir = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation()
    props.handleChange(porta.abrir())
  }

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div
          className={styles.macaneta}
          onClick={abrir}
        ></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ?
          renderizarPorta() :
          porta.temPresente ?
            <Presente /> : false
        }
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
