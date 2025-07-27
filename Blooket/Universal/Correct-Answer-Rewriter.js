/**
 * @license AGPL-3.0
 * Website Cheats
 * 
 * This script is a modified version of Blooket Cheats by 05Konz.
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

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
      alert("Failed to rewrite correct answers.");
    }
  }, 100);
})();
