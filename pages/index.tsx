import Card from "../components/Card";
import styles from "../styles/paginaInicial.module.css";
import Link from "../node_modules/next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Home() {
  const [qtdPortas, setQtdPortas] = useState(0)
  const [comPresente, setComPresente] = useState(0)

  return (
    <div className={styles.formulario}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <EntradaNumerica
            text="Quantidade de Portas"
            value={qtdPortas}
            handleChange={(novaQtd) => setQtdPortas(novaQtd)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <EntradaNumerica
            text="Porta com Presente"
            value={comPresente}
            handleChange={(portaComPresente) => setComPresente(portaComPresente)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
