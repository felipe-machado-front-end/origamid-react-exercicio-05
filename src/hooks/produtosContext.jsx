import React from "react";

export const ProdutoContexto = React.createContext();

export const ProdutoStorage = ({ children }) => {
  const [produto, setProduto] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/"
    );
    const json = await response.json();
    setProduto(json);
  }, []);

  const limparLista = () => setProduto(null);
  return (
    <ProdutoContexto.Provider value={{ produto, limparLista }}>
      {children}
    </ProdutoContexto.Provider>
  );
};
