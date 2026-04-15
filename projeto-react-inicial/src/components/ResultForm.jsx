export function ResultForm({ lista, num, voltar }) {
  return (
    <section id="center">
      <div id="form">
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              {index + 1}° : {num} x {index + 1} = {item}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={voltar}>Voltar</button>
    </section>
  );
}
