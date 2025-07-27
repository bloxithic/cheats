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
    const prices = [0, 0, 0, 0];

    function getStateNode() {
        const root = Object.values(document.querySelector('#app > div > div'))?.find(x => x?.children?.[0]?._owner?.stateNode);
        return root?.children?.[0]?._owner?.stateNode;
    }

    function updatePrices(stateNode) {
        stateNode.setState({
            blooks: stateNode.state.blooks.map(blook => {
                blook.price = prices;
                return blook;
            })
        });
    }

    const interval = setInterval(() => {
        try {
            const stateNode = getStateNode();

            updatePrices(stateNode);

            const originalSetState = stateNode.setState.bind(stateNode);
            stateNode.setState = (newState, ...rest) => {
                if (newState?.blooks) {
                    newState.blooks = newState.blooks.map(blook => {
                        blook.price = prices;
                        return blook;
                    });
                }
                return originalSetState(newState, ...rest);
            };

            clearInterval(interval);
        } catch (err) {
            clearInterval(interval);
            alert("Failed to make upgrades free.");
        }
    }, 100);
})();
