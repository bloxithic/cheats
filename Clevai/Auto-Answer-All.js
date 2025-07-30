/**
 * @license AGPL-3.0
 * Website Cheats

 * Original cheat created by bloxithic
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Source: https://github.com/bloxithic/cheats
*/

(async () => { 
  const waitFor = (selector) => new Promise(resolve => {
    const check = () => {
      const el = document.querySelector(selector);
      if (el) return resolve(el);
      requestAnimationFrame(check);
    };
    check();
  });

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function completeOneQuiz() {
    while (document.querySelector('div[id^="input_correct-option-"]')) {
      const question = document.querySelector('div[id^="input_correct-option-"]');
      if (!question) break;
      question.click();
      await wait(200);

      const button1 = document.querySelector("span.link-btn");
      if (!button1) break;
      button1.click();
      await wait(200);

      const button2 = document.querySelector("span.link-btn");
      if (!button2) break;
      button2.click();
      await wait(400);
    }

    const finalBtn = document.querySelector("p.link-btn");
    if (finalBtn) finalBtn.click();
  }

  const completeAllQuizzes = async () => {
    let index = 0;

    const first = document.querySelector("a#action-click_lo_common_0.exercise-one-content");
    if (!first) {
      alert("No quizzes found. Are you sure you executed the script on the homepage?");
      return;
    }

    first.click();
    await wait(500);

    while (true) {
      await completeOneQuiz();
      index++;
      const selector = `a[id="${index}"].exercise-one-content`;

      await wait(700);
      const next = document.querySelector(selector);
      if (!next) break;
      next.click();
      await wait(400);
    }

    const final = document.querySelector("div.coaching-link-not-btn");
    if (final) final.click();

    alert("All quizzes completed.");
  };

  await completeAllQuizzes();
})();
