import PortaModel from "../model/porta.model";

export function criarPortas(qtde: number, selecionada: number): PortaModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === selecionada;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
) {
  return portas.map((porta) => {
    const igualModificada = porta.numero === portaModificada.numero;

    if (igualModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? porta : porta.desselecionar();
    }
  });
}
