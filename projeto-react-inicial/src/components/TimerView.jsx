import { useState, useEffect } from "react";

export function TimerView({ isActive }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setCount((prev) => prev + 0.1);
      }, 100); // Atualiza a cada 100ms para mostrar décimos de segundo{
    }

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [isActive]);

  return (
    <section id="center">
      <div className="timer">
        <h2>Tempo gasto: {count.toFixed(1)} segundos</h2>
      </div>
    </section>
  );
}
