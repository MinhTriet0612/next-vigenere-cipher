
type VigenereCipher = {
  encode: (plainText: string, key: string, alphabet: string) => string,
  decode: (cipherText: string, key: string, alphabet: string) => string
}

type HashMap = {
  [key: string]: number
}

const markIndexChar = (alphabet: string) => {
  const hashMap: HashMap = {};
  for (let i = 0; i < alphabet.length; i++) {
    hashMap[alphabet[i]] = i;
  }

  return hashMap;
}

const vigenereCipherEncoder = (plainText: string, key: string, alphabet: string): string => {
  let pText = 0;
  let pKey = 0;
  let cipherText = "";

  const hashMap = markIndexChar(alphabet);

  while (pText < plainText.length) {
    if (plainText[pText] === " ") {
      cipherText += " ";
      pText++;
      continue
    }

    const cipherCharIndex = (hashMap[plainText[pText]] + hashMap[key[pKey]]) % alphabet.length;
    cipherText += alphabet[cipherCharIndex];

    pText++;
    pKey++;
    if (pKey === key.length) {
      pKey = 0;
    }
  }
  return cipherText;
}


const vigenereCipherDecoder = (cipherText: string, key: string, alphabet: string): string => {

  let pText = 0;
  let pKey = 0;
  let decodedText = "";

  const hashMap = markIndexChar(alphabet);

  while (pText < cipherText.length) {
    if (cipherText[pText] === " ") {
      decodedText += " ";
      pText++;
      continue
    }

    const decodedCharIndex = (hashMap[cipherText[pText]] - hashMap[key[pKey]] + alphabet.length) % alphabet.length;
    decodedText += alphabet[decodedCharIndex];

    pText++;
    pKey++;
    if (pKey === key.length) {
      pKey = 0;
    }
  }

  return decodedText;
}

export const VigenereCipher: VigenereCipher = {
  encode: vigenereCipherEncoder,
  decode: vigenereCipherDecoder
}
