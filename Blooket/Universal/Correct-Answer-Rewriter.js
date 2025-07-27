/**
 * Portions of this file are Copyright (c) 2023 TheCinnamonToastCrunch
 * Licensed under the BSD 3-Clause License
 * 
 * See the NOTICE file or https://opensource.org/licenses/BSD-3-Clause for details.
 */

const interval = setInterval(() => {
  try {
    const root = Object.values(document.querySelector('#app > div > div'))[1];
    const gameState = root.children[0]._owner.stateNode.state;
    gameState.question.correctAnswers = gameState.question.answers;
  } catch (err) {
    clearInterval(interval);
    alert("Failed to rewrite correct answers.");
  }
}, 100);
