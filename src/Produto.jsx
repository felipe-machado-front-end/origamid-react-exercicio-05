import React from "react";
import { ProdutoContexto } from "./hooks/produtosContext";

export const Produto = () => {
  const contexto = React.useContext(ProdutoContexto);

  // Para recarregar os itens da lista ao inves de colocar o useEfect seria necessario criar um evento com botão

  // No exercício proposto era só necessário carregar a lista depois limpar ela

  // Estilizar melhor o exercicício

  return (
    <div>
      {contexto.produto === null && <h1>Sem item na lista </h1>}

      {contexto.produto && (
        <div>
          <ul>
            {contexto.produto.map((produto, index) => (
              <p key={index}>{produto.nome}</p>
            ))}
          </ul>

          <button className="bg-purple-400" onClick={contexto.limparLista}>
            Limpar
          </button>
        </div>
      )}
    </div>
  );
};
