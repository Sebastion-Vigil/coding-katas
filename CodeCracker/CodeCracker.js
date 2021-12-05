
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

  encrypt (txt) {
   // convert alpha txt to ciper txt
   const encryptedTxt = []
   for (let i = 0; i < txt.length; i++) {
     if (txt[i] === ' ') encryptedTxt.push(' ')
     encryptedTxt.push(this.cipher[txt[i]])
   }
   return encryptedTxt.join('')
  }

  decrypt (txt) {
  // convert ciper txt to alpha txt
  const decryptedTxt = []
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === ' ') decryptedTxt.push(' ')
    decryptedTxt.push(this.alpha[txt[i]])
  }
  return decryptedTxt.join('')
  }

  display() {
    console.log("this.alpha: ", this.alpha)
    console.log("this.cipher: ", this.cipher)
  }

}

const alphabet = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map(x => String.fromCharCode(x).toLowerCase())

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

const bCrypt = new BiCrypt()

bCrypt.setEncryptionScheme(alphabet, cipherText)

const msg = 'hello world'

const encryptedMsg = bCrypt.encrypt(msg)
console.log("encrypted message: ", encryptedMsg)
const decryptedMsg = bCrypt.decrypt(encryptedMsg)
console.log("decryptedMsg: ", decryptedMsg)
