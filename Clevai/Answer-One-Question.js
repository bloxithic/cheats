(async () => {
  const waitFor = (selector, timeout = 5000) => new Promise((resolve) => {
    const startTime = Date.now();
    const check = () => {
      const el = document.querySelector(selector);
      if (el) return resolve(el);
      if (Date.now() - startTime > timeout) {
        alert(`Timeout waiting for ${selector}`);
        return resolve(null); // resolve with null instead of rejecting
      }
      requestAnimationFrame(check);
    };
    check();
  });

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function completeQuiz() {
    let attempted = false;
    while (true) {
      const question = await waitFor('div[id^="input_correct-option-"]', 1000);
      if (!question) break;
      question.click();
      attempted = true;
      await wait(200);

      const button1 = await waitFor("span.link-btn", 1000);
      if (!button1) break;
      button1.click();
      await wait(200);

      const button2 = await waitFor("span.link-btn", 1000);
      if (!button2) break;
      button2.click();
      await wait(300);
    }
    return attempted;
  }

  completeQuiz().then(done => {
    alert(done ? "Quiz completed." : "No questions found. Are you sure you executed the script inside the quiz?");
  });
})();
