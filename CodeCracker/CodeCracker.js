// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
// https://startfunction.com/bidirectional-map-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://stackoverflow.com/questions/10699492/bi-directional-map-in-java

// first our Map class
class MapObj {
  constructor () {
    this.biMap = {}
  }
  // double space complexity -> works -> refactor later
  // concept is (until I refactor) is 2 make obj mirror of self
  createMap (obj) {
    const keys = Object.keys(obj)
    const vals = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
      this.insertPair(keys[i], vals[i])
      this.insertPair(vals[i], keys[i])
    }
  }

  printMap () {
    console.log(this.biMap)
  }

  printVal (v) {
    console.log(this.biMap[v])
  }

  insertPair (k, v) {
    if (this.validateUnique(k)) {
      this.biMap[k] = v
    }
  }

  validateUnique (k) {
    return this.biMap[k] === undefined
  }
}

// Map, an instance of MapObj
const Map = new MapObj()

// 

// array of all lowercase alphabeet chars
const alphabet = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map(x => String.fromCharCode(x))

// array of encryption scheme chars
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
