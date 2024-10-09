import _ from 'lodash';

const getCompareData = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.reduce((acc, key) => {
    let accum = acc;
    if (_.has(data1, key) && !_.has(data2, key)) {
      accum += `\n  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      accum += `\n  + ${key}: ${data2[key]}`;
    }
    if (_.has(data1, key) && _.has(data2, key) && data1[key] === data2[key]) {
      accum += `\n    ${key}: ${data1[key]}`;
    }

    if (_.has(data1, key) && _.has(data2, key) && data1[key] === !data2[key]) {
      accum += `\n  - ${key}: ${data1[key]}`;
      accum += `\n  + ${key}: ${data2[key]}`;
    }

    return accum;
  }, '');

  return `{${result}\n}`;
};

export default getCompareData;
