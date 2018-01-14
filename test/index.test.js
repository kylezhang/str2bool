import test from 'ava';
const str2bool = require('..');

// like boolean:true
test('str2bool:should true', t => {
	t.is(str2bool(true), true);
});

test('str2bool:should true', t => {
	t.is(str2bool('true'), true);
});

test('str2bool:should true', t => {
	t.is(str2bool(1), true);
});

test('str2bool:should true', t => {
	t.is(str2bool('1'), true);
});

// like boolean:false
test('str2bool:should false', t => {
	t.is(str2bool(false), false);
});

test('str2bool:should false', t => {
	t.is(str2bool('false'), false);
});

test('str2bool:should false', t => {
	t.is(str2bool(0), false);
});

test('str2bool:should false', t => {
	t.is(str2bool('0'), false);
});

// not like boolean
test('str2bool:should false', t => {
	t.is(str2bool('true '), false);
});

test('str2bool:should false', t => {
	t.is(str2bool(223), false);
});

test('str2bool:should false', t => {
	t.is(str2bool('223'), false);
});

test('str2bool:should false', t => {
	t.is(str2bool(''), false);
});
test('str2bool:should false', t => {
	t.is(str2bool(' '), false);
});
test('str2bool:should false', t => {
	t.is(str2bool(''), false);
});
