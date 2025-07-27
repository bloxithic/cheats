(() => {
    const getStateNode = (r = document.querySelector("body>div")) => {
        const val = Object.values(r)[1];
        return val?.children?.[0]?._owner?.stateNode ? val.children[0]._owner.stateNode : getStateNode(r.querySelector(":scope>div"));
    };

    const stateNode = getStateNode();

    if (!stateNode?.state?.blooks) return alert("Couldn't find blooks.");

    const maxBlooks = () => {
        stateNode.state.blooks.forEach(b => b.level = 4);
        stateNode.forceUpdate?.();
    };

    maxBlooks();

    let originalSetState = stateNode.setState.bind(stateNode);
    stateNode.setState = (newState, ...rest) => {
        if (newState?.blooks) {
            newState.blooks.forEach(b => b.level = 4);
        }
        return originalSetState(newState, ...rest);
    };
})();
