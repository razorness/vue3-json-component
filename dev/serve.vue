<template>
	<div id="app">
		<div :class="{ tree: true, dark }">
			<json-view
				:data="data"
				rootKey="view"
				:maxDepth="1"
				:styles="{ key: '#0977e6' }"
				:colorScheme="colorScheme"
				@update:selected="itemSelected"
			></json-view>
			<json-view
				rootKey="string"
				data="Not an object"
				:colorScheme="colorScheme"
			/>
			<json-view
				rootKey="customization"
				data="Using CSS Variables"
				class="customize"
				:colorScheme="colorScheme"
			/>
		</div>

		<button id="darkButton" @click="dark = !dark">Toggle Dark Mode</button>
		<h5>Events</h5>
		<div v-for="(event, index) in events" :key="index">{{ event }}</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import JsonView from '@/JSONView.vue';

	export default defineComponent({
		name      : 'ServeDev',
		components: {
			JsonView
		},
		data() {
			return {
				events: [] as string[],
				dark  : false
			};
		},
		methods : {
			itemSelected(data: any): void {
				this.events.push(`Selected: ${data.path} with value ${data.value}`);
			}
		},
		computed: {
			data() {
				return {
					first    : 'level',
					works    : true,
					number   : 100,
					missing  : null,
					undefined: undefined,
					list     : [
						'fun',
						{
							test: {
								passed: true
							}
						}
					],
					object   : {
						working: 'properly'
					}
				};
			},
			colorScheme(): string {
				return this.dark ? 'dark' : 'light';
			}
		}
	});
</script>

<style lang="scss">

	#app {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 20px;
		padding: 20px;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
	}

	#darkButton {
		margin-top: 20px;
		width: 150px;
		height: 30px;
		cursor: pointer;
	}

	.tree {
		padding: 5px;
	}

	.tree.dark {
		background-color: #121212;
		border-radius: 4px;
	}

</style>

<style lang="scss" scoped>

	.customize {
		--vjc-valueKey-color: green;
	}

	.customize.dark {
		--vjc-valueKey-color: red;
	}

</style>

