'use strict';

const todo = require('./index.js');
const assert = require('assert');

// add のテスト
todo.add('鉛筆を買う')
todo.add('ノートを買う')
assert.deepStrictEqual(todo.list(), ['鉛筆を買う','ノートを買う'])

// done のテスト
todo.done('鉛筆を買う')
assert.deepStrictEqual(todo.list(), ['ノートを買う'])
assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う'])

// del のテスト
todo.del('ノートを買う')
assert.deepStrictEqual(todo.list(),[])
todo.del('鉛筆を買う')
assert.deepStrictEqual(todo.donelist(), []);

