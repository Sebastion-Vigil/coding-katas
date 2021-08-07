class MapObj {
  constructor () {
    this.biMap = {}
  }

  initializeBiMap (obj) {
    console.log('initializeBiMap invoked!')
  }

  insertPair () {
    console.log('insertPair invoked!')
  }

  validatePair () {
    console.log('validatePair invoked!')
  }
}

const initObj = {
  k1: 'v1',
  k2: 'v2',
  k3: 'v3'
}

const myMapObj = new MapObj()
myMapObj.insertPair()
