import { ProdutoStorage } from "./hooks/produtosContext";
import { Produto } from "./Produto";

function App() {
  return (
    <div>
      <ProdutoStorage>
        <Produto />
      </ProdutoStorage>
    </div>
  );
}

export default App;
