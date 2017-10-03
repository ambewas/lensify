# Installation:

`yarn add lensify`

or if you prefer `npm`:

`npm install --save lensify`

# Development:

`yarn install`

`npm run watch:js`

run tests: `npm test`

# How to use

```js
import lensify from 'lensify';

const initialState = {
	playerMoves: 0,
	totalScore: 100,
	deeper: {
		deepProp: "foo",
	},
};

const stateL = lensify(initialState);

```

Now stateL is an object with the exact same structure as initial state, except all keys are now (ramda) lenses.

You can use them in a redux reducer, for example:

```js
const scoring = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_PLAYER_MOVES:
			return R.over(stateL.playerMoves, R.add(action.moves), state);
		case actionTypes.UPDATE_TOTAL_SCORE:
			return R.over(stateL.totalScore, R.add(action.points), state);
		default:
			return state;
	}
};
```

# Contributing

Please see our guidelines in `CONTRIBUTING.md` if you want to contribute something to this library.

# License

MIT Licensed. Copyright (c) Kevin Decock 2017.