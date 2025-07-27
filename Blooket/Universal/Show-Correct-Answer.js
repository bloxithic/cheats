/**
 * @license AGPL-3.0
 * Modified Blooket Cheats
 * 
 * This is a modified version of Blooket Cheats by 05Konz.
 * Original source: https://github.com/Blooket-Council/Blooket-Cheats
 * 
 * Modifications made by bloxithic
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
