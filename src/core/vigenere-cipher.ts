
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

  key = key.toLowerCase();

  const hashMap = markIndexChar(alphabet);

  while (pText < plainText.length) {
    if (plainText[pText] === " " || hashMap[plainText[pText].toLowerCase()] === undefined) {
      cipherText += plainText[pText];
      pText++;
      continue
    }

    if (plainText[pText] !== plainText[pText].toLowerCase()) {
      const cipherCharIndex = (hashMap[plainText[pText].toLowerCase()] + hashMap[key[pKey].toLowerCase()]) % alphabet.length;
      cipherText += alphabet[cipherCharIndex].toUpperCase();
    }
    else {
      const cipherCharIndex = (hashMap[plainText[pText]] + hashMap[key[pKey]]) % alphabet.length;
      cipherText += alphabet[cipherCharIndex];
    }

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


  key = key.toLowerCase();
  const hashMap = markIndexChar(alphabet);


  while (pText < cipherText.length) {
    if (cipherText[pText] === " " || hashMap[cipherText[pText].toLowerCase()] === undefined) {
      decodedText += cipherText[pText];
      pText++;
      continue
    }

    if (cipherText[pText] !== cipherText[pText].toLowerCase()) {
      const decodedCharIndex = (hashMap[cipherText[pText].toLowerCase()] - hashMap[key[pKey].toLowerCase()] + alphabet.length) % alphabet.length;
      decodedText += alphabet[decodedCharIndex].toUpperCase();
    }

    else {
      const decodedCharIndex = (hashMap[cipherText[pText]] - hashMap[key[pKey]] + alphabet.length) % alphabet.length;
      decodedText += alphabet[decodedCharIndex];
    }

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
