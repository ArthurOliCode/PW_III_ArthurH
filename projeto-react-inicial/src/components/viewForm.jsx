export function ViewForm({ num, setNum, atuadorConta }) {
  return (
    <section id="center">
      <h2>Selecione um número</h2>
      <div id="form">
        <input
          id="numForm"
          type="number"
          value={num}
          min={0}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </div>
      <button onClick={atuadorConta}>Calcular</button>
    </section>
  );
}
