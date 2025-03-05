
type VigenereCipher = {
  encode: (plainText: string, key: string, alphabet: string) => string,
  decode: (cipherText: string, key: string, alphabet: string) => string
  encodeAutoKey: (plainText: string, key: string, alphabet: string) => string,
  decodeAutoKey: (cipherText: string, key: string, alphabet: string) => string
}

type HashMap = {
  [key: string]: number
}

const markIndexChar = (alphabet: string): HashMap => {
  const hashMap: HashMap = {};
  for (let i = 0; i < alphabet.length; i++) {
    hashMap[alphabet[i]] = i;
  }

  return hashMap;
}

const isUpperCase = (char: string): boolean => {
  return char !== char.toLowerCase();
}

const vigenereCipherEncoder = (plainText: string, key: string, alphabet: string): string => {
  console.log("repeat key ne")

  if (plainText.length === 0) {
    return "";
  }

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

    else if (isUpperCase(plainText[pText])) {
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

  if (cipherText.length === 0) {
    return "";
  }

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

    else if (isUpperCase(cipherText[pText])) {
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
  console.log("auto key ne")

  if (plainText.length === 0) {
    return "";
  }

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

    else if (isUpperCase(plainText[pText])) {
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


const vigenereCipherDecoderAutoKey = (cipherText: string, key: string, alphabet: string): string => {
  if (cipherText.length === 0) {
    return "";
  }

  let autoKey: string = key;
  const hashMapAlphabet = markIndexChar(alphabet);

  if (key.length < cipherText.length) {
    let pTmp = 0;
    while (autoKey.length < cipherText.length) {
      if (cipherText[pTmp] !== " ") {
        autoKey += cipherText[pTmp];
      }
      pTmp++;
    }
  }

  let decodedText = "";
  autoKey = autoKey.toLowerCase();
  key = key.toLowerCase();

  let pText = 0;
  let pKey = 0;

  while (pKey < key.length && pText < cipherText.length) {
    if (cipherText[pText] === " ") {
      decodedText += cipherText[pText];
      pText++;
      continue
    }

    if (hashMapAlphabet[cipherText[pText].toLowerCase()] === undefined) {
      decodedText += cipherText[pText];
    }

    else if (isUpperCase(cipherText[pText])) {
      const decodedCharIndex = (hashMapAlphabet[cipherText[pText].toLowerCase()] - hashMapAlphabet[key[pKey].toLowerCase() + alphabet.length]) % alphabet.length;
      decodedText += alphabet[decodedCharIndex].toUpperCase();
    }

    else {
      const decodedCharIndex = (hashMapAlphabet[cipherText[pText]] - hashMapAlphabet[key[pKey]] + alphabet.length) % alphabet.length;
      decodedText += alphabet[decodedCharIndex];
    }

    pText++;
    pKey++;
  }

  if (pText == cipherText.length) {
    return decodedText;
  }

  pKey = 0;


  autoKey = decodedText.replace(/ /g, '');
  console.log(autoKey);


  while (pText < cipherText.length) {
    if (cipherText[pText] === " ") {
      decodedText += cipherText[pText];
      pText++;
      continue
    }

    if (hashMapAlphabet[cipherText[pText].toLowerCase()] === undefined) {
      decodedText += cipherText[pText];
    }

    else if (isUpperCase(cipherText[pText])) {
      const decodedCharIndex = (hashMapAlphabet[cipherText[pText].toLowerCase()]
        - hashMapAlphabet[autoKey[pKey].toLowerCase()]
        + alphabet.length) % alphabet.length;

      decodedText += alphabet[decodedCharIndex].toUpperCase();
      autoKey += alphabet[decodedCharIndex].toLowerCase();
    }

    else {
      const decodedCharIndex = (hashMapAlphabet[cipherText[pText]]
        - hashMapAlphabet[autoKey[pKey].toLowerCase()]
        + alphabet.length) % alphabet.length;

      decodedText += alphabet[decodedCharIndex];
      autoKey += alphabet[decodedCharIndex].toLowerCase();
    }

    pText++;
    pKey++;
  }

  return decodedText;
}


export const VigenerCipher: VigenereCipher = {
  encode: vigenereCipherEncoder,
  decode: vigenereCipherDecoder,
  encodeAutoKey: vigenereCipherEncoderAutoKey,
  decodeAutoKey: vigenereCipherDecoderAutoKey
}



