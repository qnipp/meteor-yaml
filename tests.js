import { Tinytest } from 'meteor/tinytest';

import yaml, { name as packageName } from 'meteor/qnipp:yaml';

import yamlContent from './test.yaml';
import ymlContent from './test.yml';

Tinytest.add('yaml - packageName', (test) => {
  test.equal(packageName, 'yaml');
});

Tinytest.add('yaml - import yaml', (test) => {
  test.equal(yamlContent, {
    number: 3.4,
    string: 'A long string',
    stringWithQuotes: 'This is also a valid string',
    array: ['first line', 'second line', 'third line'],
    object: { firstKey: 'first value', secondKey: 'second value' },
  });
});

Tinytest.add('yaml - import yml', (test) => {
  test.equal(ymlContent, {
    number: 3.4,
    string: 'A long string',
    stringWithQuotes: 'This is also a valid string',
    array: ['first line', 'second line', 'third line'],
    object: { firstKey: 'first value', secondKey: 'second value' },
  });
});

Tinytest.add('yaml - default export', (test) => {
  test.instanceOf(yaml.load, Function);
});
