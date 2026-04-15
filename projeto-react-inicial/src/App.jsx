import { useState } from "react";
import { tabelaMult } from "./oprMath.js";
import { ViewForm } from "./components/ViewForm.jsx";
import { ResultForm } from "./components/ResultForm.jsx";
import { TimerView } from "./components/TimerView.jsx";
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
  const [tempoFinal, setTempoFinal] = useState(0);
  const [attempt, setAttempt] = useState(0);

  const atuadorConta = (CurrentTimerValue) => {
    setTempoFinal(CurrentTimerValue);
    const tabuada = tabelaMult(num, 10);
    setLista(tabuada);
    setIsResultado(true);
  };

  const atuadorVoltar = (e) => {
    setIsResultado(false);
    setNum(0);
    setLista([]);
    setAttempt((prev) => prev + 1); // Força o timer a resetar
  };

  return (
    <>
      {/*O timer foi colocado aqui para apenas congelar entre o tempo das telas, e resetar apenas quando o atuadorVoltar for chamado.*/}
      <TimerView key={attempt} isActive={!isResultado} />
      {isResultado ? (
        <>
          <ResultForm num={num} lista={lista} voltar={atuadorVoltar} />
        </>
      ) : (
        <>
          <ViewForm num={num} setNum={setNum} atuadorConta={atuadorConta} />
        </>
      )}
      <section id="spacer"></section>
    </>
  );
}

export default App;
