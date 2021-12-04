
class BiCrypt {
  constructor() {
    this.alpha = {}, // ciphers keys, alpha chars vals
    this.cipher = {} // alpha chars keys, ciphers vals
  }

  setEncryptionScheme (alphaTxt, cipherTxt) { // 2 arrs of same len
    // alpha => ciper chars keys, alpha chars values
    // ciper => alpha chars keys, ciper chars vals
    for (let i = 0; i < alphaTxt.length; i++) {
      this.alpha[cipherTxt[i]] = alphaTxt[i]
      this.cipher[alphaTxt[i]] = cipherTxt[i]
    }
  }

  encrypt () {
   // convert alpha txt to ciper txt
  }

  decrypt () {
  // convert ciper txt to alpha txt
  }

  displaySelf() {
    console.log("this.alpha: ", this.alpha)
    console.log("this.cipher: ", this.cipher)
  }

}

const alphabet = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map(x => String.fromCharCode(x))

  const cipherText = [
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

  const enDeCrypt = new BiCrypt()

  enDeCrypt.setEncryptionScheme(alphabet, cipherText)

  enDeCrypt.displaySelf()
