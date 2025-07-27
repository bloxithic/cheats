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
            if (!stateNode?.state?.blooks) return;

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
        } catch {}
    }, 100);
})();
