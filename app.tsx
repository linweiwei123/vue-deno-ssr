import { Vue } from './deps.ts';

// @ts-ignore
const App = new Vue({
	template: `<div id="app">
    <h1>计数：{{count}}</h1>
    <button v-on:click="inCrease">inCrease</button>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>`,
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
});

export default App;
