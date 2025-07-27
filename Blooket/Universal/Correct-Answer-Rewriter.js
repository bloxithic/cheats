(() => {
  const interval = setInterval(() => {
    try {
      const reactRoot = Object.values(document.querySelector('#app > div > div')).find(v => v?.children?.[0]?._owner?.stateNode);
      const stateNode = reactRoot?.children?.[0]?._owner?.stateNode;
      const question = stateNode?.state?.question;

      if (!question?.answers) return;

      question.correctAnswers = [...question.answers];
      stateNode.forceUpdate?.();
    } catch {
      clearInterval(interval);
      alert("Failed to rewrite correct answers");
    }
  }, 100);
})();
