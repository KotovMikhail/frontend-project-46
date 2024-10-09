import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import getCompareData from './utils.js';

const getParseFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const data = fs.readFileSync(fullPath, 'utf8');
  const format = path.extname(fullPath).slice(1);
  return parse(data, format);
};

const gendiff = (filepath1, filepath2) => {
  const data1 = getParseFile(filepath1);
  const data2 = getParseFile(filepath2);

  const comparedData = getCompareData(data1, data2);

  return comparedData;
};

export default gendiff;
