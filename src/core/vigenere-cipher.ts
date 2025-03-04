
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
    if (plainText[pText] === " ") {
      cipherText += plainText[pText];
      pText++;
      continue
    }

    if (hashMap[plainText[pText].toLowerCase()] === undefined) {
      cipherText += plainText[pText];
    }

    else if (plainText[pText] !== plainText[pText].toLowerCase()) {
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
    if (cipherText[pText] === " ") {
      decodedText += cipherText[pText];
      pText++;
      continue
    }

    if (hashMap[cipherText[pText].toLowerCase()] === undefined) {
      decodedText += cipherText[pText];
    }

    else if (cipherText[pText] !== cipherText[pText].toLowerCase()) {
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

const vigenereCipherEncoderAutoKey = (plainText: string, key: string, alphabet: string): string => {
  let autoKey: string = key;

  if (key.length < plainText.length) {
    let pTmp = 0;
    while (autoKey.length < plainText.length) {
      if (plainText[pTmp] !== " ") {
        autoKey += plainText[pTmp];
      }
      pTmp++;
    }
  }

  let pText = 0;
  let pKey = 0;
  let cipherText = "";

  autoKey = autoKey.toLowerCase();
  const hashMap = markIndexChar(alphabet);

  while (pText < plainText.length) {
    if (plainText[pText] === " ") {
      cipherText += plainText[pText];
      pText++;
      continue
    }

    if (hashMap[plainText[pText].toLowerCase()] === undefined) {
      cipherText += plainText[pText];
    }

    else if (plainText[pText] !== plainText[pText].toLowerCase()) {
      const cipherCharIndex = (hashMap[plainText[pText].toLowerCase()] + hashMap[autoKey[pKey].toLowerCase()]) % alphabet.length;
      cipherText += alphabet[cipherCharIndex].toUpperCase();
    }
    else {
      const cipherCharIndex = (hashMap[plainText[pText]] + hashMap[autoKey[pKey]]) % alphabet.length;
      cipherText += alphabet[cipherCharIndex];
    }

    pText++;
    pKey++;
    if (pKey === autoKey.length) {
      autoKey += plainText.slice(pText, plainText.length);
    }
  }

  return cipherText;
}



export const VigenereCipher: VigenereCipher = {
  encode: vigenereCipherEncoderAutoKey,
  decode: vigenereCipherDecoder
}
