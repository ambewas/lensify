import { lensProp } from 'ramda';

const lensify = state => {
  const keys = Object.keys(state);

  return keys.reduce((acc, key) => {
    if (typeof state[key] === "object") {
      const deeperKey = state[key];

      return {
        ...acc,
        [key]: lensify(deeperKey),
      };
    }

    return {
      ...acc,
      [key]: lensProp(key),
    };
  }, {});
};

export default lensify;
