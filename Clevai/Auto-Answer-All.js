(async () => { 
  const waitFor = (selector, timeout = 5000) => new Promise((resolve, reject) => {
    const startTime = Date.now();
    const check = () => {
      const el = document.querySelector(selector);
      if (el) return resolve(el);
      if (Date.now() - startTime > timeout) return reject(`Timeout waiting for ${selector}`);
      requestAnimationFrame(check);
    };
    check();
  });

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function completeOneQuiz() {
    while (true) {
      try {
        const question = await waitFor('div[id^="input_correct-option-"]', 1000);
        question.click();
        await wait(200);

        const button1 = await waitFor("span.link-btn", 1000);
        button1.click();
        await wait(200);

        const button2 = await waitFor("span.link-btn", 1000);
        button2.click();
        await wait(400);
      } catch {
        break;
      }
    }

    try {
      const finalBtn = await waitFor("p.link-btn", 3000);
      finalBtn.click();
    } catch {}
  }

  const completeAllQuizzes = async () => {
    let index = 0;

    try {
      const first = await waitFor("a#action-click_lo_common_0.exercise-one-content", 5000);
      first.click();
      await wait(500);
    } catch {
      alert("No quizzes found. Are you sure you executed the script on the homepage?");
      return;
    }

    while (true) {
      await completeOneQuiz();
      index++;
      const selector = `a[id="${index}"].exercise-one-content`;

      try {
        await wait(700);
        const next = await waitFor(selector, 500);
        next.click();
        await wait(400);
      } catch {
        break;
      }
    }

    try {
      const final = await waitFor("div.coaching-link-not-btn", 3000);
      final.click();
    } catch {}

    alert("All quizzes completed.");
  };

  await completeAllQuizzes();
})();
