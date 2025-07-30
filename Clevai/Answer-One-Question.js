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
  const wait = ms => new Promise(res => setTimeout(res, ms));

  async function completeQuiz() {
    let attempted = false;

    while (document.querySelector('div[id^="input_correct-option-"]')) {
      const question = document.querySelector('div[id^="input_correct-option-"]');
      if (!question) break;

      question.click();
      attempted = true;
      await wait(200);

      const button1 = document.querySelector("span.link-btn");
      if (!button1) break;
      button1.click();
      await wait(200);

      const button2 = document.querySelector("span.link-btn");
      if (!button2) break;
      button2.click();
      await wait(300);
    }

    return attempted;
  }

  const result = await completeQuiz();
  alert(result ? "Quiz completed." : "No questions found. Are you sure you executed the script inside the quiz?");
  return;
})();
