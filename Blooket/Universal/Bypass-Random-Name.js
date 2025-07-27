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
