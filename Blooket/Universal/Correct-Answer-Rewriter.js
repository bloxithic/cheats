const interval = setInterval(() => {
  try {
    const root = Object.values(document.querySelector('#app > div > div'))[1];
    const gameState = root.children[0]._owner.stateNode.state;
    gameState.question.correctAnswers = gameState.question.answers;
  } catch (err) {
    clearInterval(interval);
    alert("Failed to set correct answers.");
  }
}, 100);
