import styles from "../styles/jogo.module.css";
import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../utils/portas";
import Link from "next/link";

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(3, 2));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          handleChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
