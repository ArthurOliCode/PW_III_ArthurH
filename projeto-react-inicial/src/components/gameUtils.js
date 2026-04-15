export const generateGameQuestion = (basenum) => {
  const multiplier = Math.floor(Math.random() * 10) + 1;
  return {
    multiplicador: multiplier,
    resultado: basenum * multiplier,
  };
};

export const Verifyguess = (guess, resultado) => {
  return Number(guess) === resultado;
};
