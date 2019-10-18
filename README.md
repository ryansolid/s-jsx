# S JSX

This library is a demonstration of the raw performance of S.js when used with the DOM Expressions runtime. This is an experimental approach used mostly for benchmarking and I'd recommend you checkout the official renderer for S.js, [Surplus](https://github.com/adamhaile/surplus) or [Solid](https://github.com/ryansolid/solid) which are better tested and provide a more comprehensive set of features.

It accomplishes this with using [Babel Plugin JSX DOM Expressions](https://github.com/ryansolid/babel-plugin-jsx-dom-expressions). It compiles JSX to DOM statements and by using inner parenthesis syntax ```{( )}``` wraps expressions in functions that can be called by the library of choice. In this case autorun wrap these expressions ensuring the view stays up to date. Unlike Virtual DOM only the changed nodes are affected and the whole tree is not re-rendered over and over.

To use simply wrap your code in a root:

```js
import S from 's-js';

S.root(() => document.body.appendChild(<App />))
```

And include 'babel-plugin-jsx-dom-expressions' in your babelrc, webpack babel loader, or rollup babel plugin.

```js
"plugins": [["jsx-dom-expressions", {moduleName: 's-jsx'}]]
```

# Installation

```sh
> npm install s-jsx babel-plugin-jsx-dom-expressions
```

## API

Control flow is handled through a special $ JSX element that compiles down to optimized reconciled code that supports conditionals `when`, loops `each`, separate render trees `portal`, and async offscreen rendering `suspend`. Example:

```jsx
const list = S.data(["Alpha", "Beta", "Gamma"]);

<ul>
  <$ each={state.list}>{item => <li>{item}</li>}</$>
</ul>
```

Alternatively this library supports Tagged Template Literals or HyperScript for non-precompiled environments by installing the companion library and including variants:
```js
import { html } from 's-jsx/html'; // or
import { h } from 's-jsx/h';
```
There is a small performance overhead of using these runtimes but the performance is still very impressive. Further documentation available at: [Lit DOM Expressions](https://github.com/ryansolid/lit-dom-expressions) and [Hyper DOM Expressions](https://github.com/ryansolid/hyper-dom-expressions).
