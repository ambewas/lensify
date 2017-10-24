import { lensProp, lensPath } from 'ramda';

const lensify = (state, path) => {
  const keys = Object.keys(state);

  return keys.reduce((acc, key) => {
    if (typeof state[key] === "object") {
      const deeperKey = state[key];
      const deeperPath = `${key}.${Object.keys(deeperKey)[0]}`;

      return {
        ...acc,
        [key]: lensify(deeperKey, deeperPath),
      };
    }

    const lensFunction = path ? lensPath(path.split(".")) : lensProp(key);

    return {
      ...acc,
      [key]: lensFunction,
    };
  }, {});
};


export default lensify;
