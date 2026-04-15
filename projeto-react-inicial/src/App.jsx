import { useState } from "react";
import { tabelaMult } from "./oprMath.js";
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

function Calcular() {
  const [num, setNum] = useState(0);
  const [lista, setLista] = useState([]);

  const atuadorConta = (e) => {
    const tabuada = tabelaMult(num, 10);
    setLista(tabuada);
  };

  return (
    <>
      <section id="center">
        <div id="form">
          <input
            id="numForm"
            type="number"
            min={0}
            onChange={(e) => setNum(Number(e.target.value))}
          />
        </div>

        <div id="result">
          <button onClick={atuadorConta}>Calcular</button>
          <ul>
            {lista.map((item, index) => (
              <li key={index}>
                {index + 1}° : {num} x {index + 1} = {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section></section>

      <section id="spacer"></section>
    </>
  );
}

export default Calcular;
