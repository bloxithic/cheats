(() => {
  const loop = setInterval(() => {
    try {
      const stateNode = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode;
      const question = stateNode.state.question || stateNode.props.client.question;

      question.answers.forEach((ans, i) => {
        const isCorrect = question.correctAnswers.includes(ans);
        const el = document.querySelectorAll("[class*='answersHolder'] > div")[i];
        if (el) {
          const box = el.children[0];
          box.style.backgroundColor = isCorrect ? "rgb(0, 207, 119)" : "rgb(196, 58, 53)";
          box.style.opacity = isCorrect ? "1" : "0.5";
          box.style.pointerEvents = isCorrect ? "auto" : "none";
          box.style.transition = isCorrect ? "" : "none";
        }
      });
    } catch (err) {
      clearInterval(loop);
      alert("Failed to show correct answers.");
    }
  }, 100);
})()
