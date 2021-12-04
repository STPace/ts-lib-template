import {strict as assert} from 'node:assert';
import {add} from './index';

export function testAdd() {
  assert.equal(add(1, 2), 3);
}
