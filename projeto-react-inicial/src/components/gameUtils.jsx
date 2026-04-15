import { useState } from "react";
import { Verifyguess } from "./gameUtils.js";

export function NumberGame({ num, question, onFinish }) {
  const [guess, setGuess] = useState("");
  const [mensagem, setMensagem] = useState("");

  const agenteVerificar = () => {
    if (Verifyguess(guess, question.resultado)) {
      setMensagem("Parabéns! Você acertou!");
      setTimeout(onFinish, 2000); // Chama onFinish após 2 segundos
    } else {
      setMensagem("Tente novamente!");
    }
  };

  return (
    <div id="center">
      <h3>
        Modo de jogo: Qual é o {num} X {question.multiplicador}?
      </h3>
      <div>
        <input
          id="form"
          className="result"
          type="number"
          min={0}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Sua resposta ..."
        />
      </div>
      <button onClick={agenteVerificar}>Verificar</button>
      <p>{mensagem}</p>
    </div>
  );
}
