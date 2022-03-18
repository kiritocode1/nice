import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'chuchu',
		age:"19"
	}
});

export default app;