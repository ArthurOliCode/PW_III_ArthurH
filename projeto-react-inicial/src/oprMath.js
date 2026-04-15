/*
Rascunho de código para a realização de operações matemáticas, como soma e multiplicação para treino.

Método para utiliza-se da soma entre dois elementos
export const calcSoma = (a, b) => a + b;

export const tabelaMult = (x, y) => {
  let resultados = [];
  for (let i = 1; i <= y; i++) {
    let calculo = x * i;
    resultados.push(calculo);
  }
  return resultados;
};*/

// Método para a geração de tabela de um número selecionado
export const tabelaMult = (x, y) => {
  let resultados = [];
  for (let i = 1; i <= y; i++) {
    let calculo = x * i;
    resultados.push(calculo);
  }
  return resultados;
};
