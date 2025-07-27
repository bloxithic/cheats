/**
 * @license AGPL-3.0
 * Blooket Cheats
 * Copyright (C) 2023-present 05Konz
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
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Source: https://github.com/Blooket-Council/Blooket-Cheats 05konz994@gmail.com
 */

(() => {
    const prices = [0, 0, 0, 0];
    const getStateNode = () => {
        const recursiveSearch = (node = document.querySelector("body>div")) => {
            const reactObj = Object.values(node)[1];
            return reactObj?.children?.[0]?._owner?.stateNode ? node : recursiveSearch(node.querySelector(":scope>div"));
        };
        const root = recursiveSearch();
        return Object.values(root)[1].children[0]._owner.stateNode;
    };

    const cheat = () => {
        const stateNode = getStateNode();
        if (!stateNode?.state?.blooks) return;
        stateNode.setState({
            blooks: stateNode.state.blooks.map(blook => {
                blook.price = prices;
                return blook;
            })
        });
    };

    cheat();
})();
