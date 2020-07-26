import { Vue, VueServerRenderer } from './deps.ts';
import { Router, Request, Response } from 'https://linweiwei123.github.io/aok/mod.ts';
import App from './app.tsx';

export async function init(router: Router) {
	const browserBundlePath = '/browser.js';
	// @ts-ignore
	const renderer = VueServerRenderer.createRenderer();

	const js = `
	import "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
	const App = new Vue({
		template: \`<div id="app-4">
		<h1>计数：{{count}}</h1>
		<button v-on:click="inCrease">inCrease</button>
		<ol>
		  <li v-for="todo in todos">
			{{ todo.text }}
		  </li>
		</ol>
	  </div>\`,
		el: '#app',
		data: {
			count: 0,
			todos: [{ text: '学习 JavaScript' }, { text: '学习 Vue' }, { text: '整个牛项目' }],
		},
		methods: {
			inCrease: function () {
				// @ts-ignore
				this.count++;
			},
		},
	});`;

	const content = await renderer.renderToString(App);
	const html = `<html><head><style>* { font-family: Helvetica; }</style><script type="module" src="${browserBundlePath}"></script></head><body>${content}</body></html>`;

	router.get(browserBundlePath, async ({ request, response }: { request: Request; response: Response }) => {
		response.body = js;
		response.type = 'application/javascript';
	});

	router.get('/home', async ({ request, response }: { request: Request; response: Response }) => {
		response.body = html;
	});
}
