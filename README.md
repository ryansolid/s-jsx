# S JSX

This library is a demonstration of the raw performance of S.js when used with the DOM Expressions runtime. This is an experimental approach used mostly for benchmarking and I'd recommend you checkout the official renderer for S.js, [Surplus](https://github.com/adamhaile/surplus) or [Solid](https://github.com/ryansolid/solid) which are better tested and provide a more comprehensive set of features.

It accomplishes this with using [Babel Plugin JSX DOM Expressions](https://github.com/ryansolid/babel-plugin-jsx-dom-expressions). It compiles JSX to DOM statements and wraps expressions in functions that can be called by the library of choice. In this case autorun wrap these expressions ensuring the view stays up to date. Unlike Virtual DOM only the changed nodes are affected and the whole tree is not re-rendered over and over.

To use simply wrap your code in render:

```js
import { render } from 's-jsx';

render(App, document.body);
```

And include 'babel-plugin-jsx-dom-expressions' in your babelrc, webpack babel loader, or rollup babel plugin.

```js
"plugins": [["jsx-dom-expressions", {moduleName: 's-jsx'}]]
```

# Installation

```sh
> npm install s-jsx babel-plugin-jsx-dom-expressions
```

Alternatively this library supports Tagged Template Literals or HyperScript for non-precompiled environments by installing the companion library and including variants:
```js
import { html } from 's-jsx/html'; // or
import { h } from 's-jsx/h';
```
There is a small performance overhead of using these runtimes but the performance is still very impressive. Further documentation available at: [Lit DOM Expressions](https://github.com/ryansolid/lit-dom-expressions) and [Hyper DOM Expressions](https://github.com/ryansolid/hyper-dom-expressions).
