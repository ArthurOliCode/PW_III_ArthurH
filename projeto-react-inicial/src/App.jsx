import { useState } from "react";
import { tabelaMult } from "./oprMath.js";
import { ViewForm } from "./components/ViewForm.jsx";
import { ResultForm } from "./components/ResultForm.jsx";
import { TimerView } from "./components/TimerView.jsx";
import { NumberGame } from "./components/gameUtils.jsx";
import "./App.css";
import { generateGameQuestion } from "./components/gameUtils.js";

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
  const [tempoFinal, setTempoFinal] = useState(0);
  const [view, setView] = useState("form"); // "form", "resultado", "jogo"
  const [attempt, setAttempt] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const atuadorConta = () => {
    const tabuada = tabelaMult(num, 10);
    setLista(tabuada);
    setView("resultado");
  };

  const inciarJogo = () => {
    const question = generateGameQuestion(num);
    setCurrentQuestion(question);
    setView("jogo");
  };

  const atuadorVoltar = (e) => {
    setView("form");
    setNum(0);
    setLista([]);
    setAttempt((prev) => prev + 1); // Força o timer a resetar
  };

  return (
    <>
      {/*O timer foi colocado aqui para apenas congelar entre o tempo das telas, e resetar apenas quando o atuadorVoltar for chamado.*/}
      <TimerView key={attempt} isActive={view !== "resultado"} />

      {view === "form" && (
        <ViewForm num={num} setNum={setNum} atuadorConta={atuadorConta} />
      )}

      {view === "resultado" && (
        <>
          <ResultForm num={num} lista={lista} voltar={atuadorVoltar} />
          <div id="center">
            <button onClick={inciarJogo}>Jogar Desafio</button>
          </div>
        </>
      )}

      {view === "jogo" && currentQuestion && (
        <NumberGame
          num={num}
          question={currentQuestion}
          onFinish={atuadorVoltar}
        />
      )}
      <section id="spacer"></section>
    </>
  );
}

export default App;
