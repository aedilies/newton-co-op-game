import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SLIDES_COUNT,
  SLIDE_TOPICS,
  clampSlideIndex,
  nextSlideIndex,
  prevSlideIndex,
  formatSlideCounter,
  getSlideProgressPercent,
  resolveSlideKeyAction,
} from './presentation';

test('SLIDES_COUNT and SLIDE_TOPICS match 11 slides', () => {
  assert.equal(SLIDES_COUNT, 11);
  assert.equal(SLIDE_TOPICS.length, 11);
});

test('clampSlideIndex bounds out-of-range and non-integer indices', () => {
  assert.equal(clampSlideIndex(-3), 0);
  assert.equal(clampSlideIndex(0), 0);
  assert.equal(clampSlideIndex(5), 5);
  assert.equal(clampSlideIndex(10), 10);
  assert.equal(clampSlideIndex(99), 10);
  assert.equal(clampSlideIndex(Number.NaN), 0);
});

test('nextSlideIndex and prevSlideIndex clamp cleanly at boundaries', () => {
  assert.equal(prevSlideIndex(0), 0);
  assert.equal(nextSlideIndex(0), 1);
  assert.equal(nextSlideIndex(9), 10);
  assert.equal(nextSlideIndex(10), 10);
  assert.equal(prevSlideIndex(10), 9);
});

test('formatSlideCounter and getSlideProgressPercent format accurately', () => {
  assert.equal(formatSlideCounter(0), '01 / 11');
  assert.equal(formatSlideCounter(8), '09 / 11');
  assert.equal(formatSlideCounter(10), '11 / 11');
  assert.equal(Math.round(getSlideProgressPercent(0) * 100) / 100, 9.09);
  assert.equal(getSlideProgressPercent(10), 100);
});

test('resolveSlideKeyAction responds only to ArrowLeft and ArrowRight', () => {
  assert.equal(resolveSlideKeyAction('ArrowRight'), 'next');
  assert.equal(resolveSlideKeyAction('ArrowLeft'), 'prev');
  assert.equal(resolveSlideKeyAction('Enter'), null);
  assert.equal(resolveSlideKeyAction(' '), null);
  assert.equal(resolveSlideKeyAction('ArrowDown'), null);
});
