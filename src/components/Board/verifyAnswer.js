const verifyAnswer = (guess, answer) => {
  answer = answer.toUpperCase();
  return answer === guess;
}

export default verifyAnswer