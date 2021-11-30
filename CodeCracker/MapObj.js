class MapObj {
  constructor () {
    this.biMap = {}
  }

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

const Map = new MapObj()
