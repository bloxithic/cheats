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
    Object.values(
        (function findReact(root = document.querySelector("body>div")) {
            return Object.values(root)[1]?.children?.[0]?._owner?.stateNode
                ? root
                : findReact(root.querySelector(":scope>div"));
        })()
    )[1].children[0]._owner.stateNode.setState({
        isRandom: false,
        client: { name: "" }
    });

    document.querySelector('[class*="nameInput"]')?.focus();
})();
