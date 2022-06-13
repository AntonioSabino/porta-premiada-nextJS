import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { atualizarPortas, criarPortas } from "../utils/portas";

export default function Home() {
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
    <div style={{ display: "flex" }}>
      <Presente />
      {renderizarPortas()}
    </div>
  );
}
