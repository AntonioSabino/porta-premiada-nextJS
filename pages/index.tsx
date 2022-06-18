import Card from "../components/Card";
import styles from "../styles/paginaInicial.module.css";
import Link from "../node_modules/next/link";

export default function Home() {
  return (
    <div className={styles.formulario}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card />
      </div>
      <div>
        <Card />
        <Card bgcolor="#28a085">
          <Link href={`/jogo/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
