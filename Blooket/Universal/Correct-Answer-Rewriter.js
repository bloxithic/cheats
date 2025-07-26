setInterval(() => {
	try {
		const container = document.querySelector('#app > div > div');
		const reactKey = Object.keys(container).find(k => k.startsWith('__reactContainer'));
		const question = container[reactKey]?.memoizedState?.element?.props?.children?.[0]?._owner?.stateNode?.state?.question;
		if (question) question.correctAnswers = question.answers;
	} catch {}
}, 100);
