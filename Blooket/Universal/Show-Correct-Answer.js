(() => {
  const loop = setInterval(() => {
    try {
      const stateNode = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode;
      const question = stateNode.state.question || stateNode.props.client.question;

      question.answers.forEach((ans, i) => {
        const isCorrect = question.correctAnswers.includes(ans);
        const el = document.querySelectorAll("[class*='answersHolder'] > div")[i];
        if (el) el.children[0].style.backgroundColor = isCorrect ? "rgb(0, 207, 119)" : "rgb(196, 58, 53)";
      });
    } catch (err) {
      clearInterval(loop);
      alert("Failed to highlight answers.");
    }
  }, 100);
})();
