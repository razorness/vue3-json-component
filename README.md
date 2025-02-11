# Vue3 JSON Component

---
**NOTE**

This is primary a fork of [vue-json-component](https://github.com/tylerkrupicka/vue-json-component) which was created to achieve quick Vue 3 support.

---

![npm](https://img.shields.io/npm/v/vue3-json-component.svg?style=flat-square)
[![TypeScript](https://img.shields.io/badge/-Typescript-informational?style=flat-square)](https://www.typescriptlang.org/)
[![vue2](https://img.shields.io/badge/vue-3.x-brightgreen.svg?style=flat-square)](https://vuejs.org/)

[Demo](https://razorness.github.io/vue3-json-component/)

A collapsable tree view for JSON. This package has some similarites with [vue-json-tree-view](https://github.com/michaelfitzhavey/vue-json-tree-view) so I'll
address the differences below. I'm not contributing this back to that package because it would require breaking API changes, and the code is entirely
different. **Contributions welcome!**

![demo image](https://user-images.githubusercontent.com/5761061/55198958-7fa16400-518e-11e9-8448-7cd028007920.png)

## Philosophy

This package has a few major improvements over predecessors: builds, styles, and customization. For builds, this package ships CommonJS, Module, and UNPKG
builds with no dependencies. [vue-json-tree-view](https://github.com/michaelfitzhavey/vue-json-tree-view) bundles in lots of dependencies -- including lodash. I
also export global Vue imports, local Vue imports, and TypeScript declarations. The code itself is about as small as it can be while being easy to follow.

- [vue-json-tree-view (84KB)](https://bundlephobia.com/result?p=vue-json-tree-view@2.1.4)
- [vue3-json-component (9KB)](https://bundlephobia.com/package/vue3-json-component@0.4.1)

The styles in this package are all scoped, with key colors still being customizable. There are no extra margins or overflow rules and text properties are all
inherited from the page. This makes the view much easier to integrate anywhere you need it.

The default color theme is based on solarized, and font weights are modified to increase readability. The component uses semantic HTML elements and tries to be
fully keyboard accessible.

## Usage

### Install

```bash
npm i vue3-json-component
yarn add vue3-json-component
```

### Import Locally

```js
import { defineComponent } from 'vue';
import { JsonView } from 'vue3-json-component';

export default defineComponent({
	components: {JsonView}
})
```

### Import Globally

```js
import JsonView from 'vue3-json-component';

Vue.use(JsonView);
```

### Use

```vue

<template>
	<json-view :data="data"/>
</template>

```

### Customize

The font size and font family are inherited from the page. The component now supports dark mode, and has switched to a CSS Variables based implementation.

#### Props

- **data** (JSON): The valid JSON object you want rendered as a tree.
- **rootKey** (String): The name of the top level root key; defaults to root.
- **maxDepth** (Number): Depth of the tree that is open at first render; defaults to 1.
- **colorScheme (New)** (String): Setting to 'dark' enables dark mode.

#### Styles

⚠️ This API has changed to CSS Variables. All of these can be customized for light _and_ dark mode as is documented below.

```css
--vjc-key-color: #0977e6

;
--vjc-valueKey-color: #073642

;
--vjc-string-color: #268bd2

;
--vjc-number-color: #2aa198

;
--vjc-boolean-color: #cb4b16

;
--vjc-null-color: #6c71c4

;
--vjc-arrow-size:

6
px

;
--vjc-arrow-color: #444

;
--vjc-hover-color:
rgba

(
0
,
0
,
0
,
0.15
)
;
```

### Example

```vue

<template>
	<json-view
		:data="data"
		rootKey="view"
		:maxDepth="1"
		class="customize"
	/>
</template>

<style lang="scss" scoped>
	.customize {
		--vjc-valueKey-color: green;
	}

	.customize.dark {
		--vjc-valueKey-color: red;
	}
</style>
```

Note: your styles will need to be scoped to override the scoped CSS Variables in the component.

## Advanced Features

### Selected Item Events

You can allow users to click elements, and receive an event when this occurs. The `selected` event will pass you the key, value, and path of the selected value.
If you do not listen for the event, the styles will not indicate that values are clickable.

```vue

<json-view
	:data="data"
	@update:selected="itemSelected"
/>
```

**Event**

- key: _string_
- value: _string_
- path: _string_

## Development

### Install

```bash
yarn
```

### Hot-Reload Hostapp

```bash
yarn serve
```

### Build Component

```bash
yarn build
```

## Contributing

Contributions are welcome via pull request. If you want to discuss your feature before committing development time, feel free to open an issue and we can refine
the idea.

Thanks!
