import { useState } from "react";
import { tabelaMult } from "./oprMath.js";
import { ViewForm } from "./components/ViewForm.jsx";
import { ResultForm } from "./components/ResultForm.jsx";
import "./App.css";

/*function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center"></section>

      <section></section>

      <section id="spacer"></section>
    </>
  );
}*/

function App() {
  const [num, setNum] = useState(0);
  const [lista, setLista] = useState([]);
  const [isResultado, setIsResultado] = useState(false);

  const atuadorConta = (e) => {
    const tabuada = tabelaMult(num, 10);
    setLista(tabuada);
    setIsResultado(true);
  };

  const atuadorVoltar = (e) => {
    setIsResultado(false);
    setNum(0);
    setLista([]);
  };

  return (
    <>
      {isResultado ? (
        <ResultForm num={num} lista={lista} voltar={atuadorVoltar} />
      ) : (
        <ViewForm num={num} setNum={setNum} atuadorConta={atuadorConta} />
      )}
      <section id="spacer"></section>
    </>
  );
}

export default App;
