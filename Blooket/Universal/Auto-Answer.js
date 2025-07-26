let interval = setInterval(() => {
  try {
    const stateNode = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
    const question = stateNode.state.question;
    if (!question) throw new Error("No question found.");
    
    if (question.qType === "typing") {
      stateNode.sendAnswer?.(question.answers[0]);
    } else {
      const answers = document.querySelectorAll("[class*='answerContainer']");
      const correctIndex = question.answers.findIndex(ans => question.correctAnswers.includes(ans));
      answers[correctIndex]?.click();
    }
  } catch (e) {
    clearInterval(interval);
    alert("Failed to auto answer questions.");
  }
}, 100);
