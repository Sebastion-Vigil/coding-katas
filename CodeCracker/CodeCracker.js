// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
// https://startfunction.com/bidirectional-map-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const alphabet = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map(x => String.fromCharCode(x))

const encryptionScheme = [
  '!',
  ')',
  '"',
  '(',
  '£',
  '*',
  '%',
  '&',
  '>',
  '<',
  '@',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o'
]

const decryptKey = {}
