import JsonView from './JsonView.vue';
import { Plugin } from '@vue/runtime-core';


export default {
	install(app) {
		app.component('json-view', JsonView);
	}
} as Plugin;

export { JsonView };
export * from './types';
