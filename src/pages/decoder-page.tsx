
import ConfigComponent from "@/component/config-component";
import PlainTextComponent from "@/component/input";
import { VigenereCipher } from "@/core/vigenere-cipher";
import { useState } from "react";

export default function DecodePage() {
  const [text, setText] = useState("");
  const { decode } = VigenereCipher;
  const [alphabet, setAlphabet] = useState<string>("abcdefghijklmnopqrstuvwxyz");
  const [secretKey, setScretKey] = useState<string>("cryptii");
  const [error, setError] = useState<string>("");

  const onTextChange = (text: string) => {
    if (text === "") {
      setError("Please input the text and key");
    } else {
      setError("");
    }
    setText(text);
  }

  const onKeyChange = (key: string) => {
    for (let i = 0; i < key.length; i++) {
      if (key[i] === " " || alphabet.indexOf(key[i].toLowerCase()) === -1) {
        setError("Key must be a string of characters in the alphabet");
        return;
      }
    }
    setError("");
    setScretKey(key);
  }

  const onAlphabetChange = (alphabet: string) => {
    if (alphabet === "") {
      setError("Please input the alphabet");
      setAlphabet(alphabet);
      return;
    }

    const hashMap: { [key: string]: number } = {};
    for (let i = 0; i < alphabet.length; i++) {
      if (hashMap[alphabet[i].toLowerCase()] !== undefined) {
        setError("Alphabet must not have duplicate characters");
        return;
      }
      hashMap[alphabet[i].toLowerCase()] = i;
    }
    setError("");
    setAlphabet(alphabet);
  }

  return <div className="flex flex-col md:flex-row">
    <div className="h-[100%] p-3 flex flex-col justify-center items-center gap-7 bg-gray-100 ">
      <PlainTextComponent
        title="Vigenere Decoder"
        value={text}
        onChange={onTextChange} />
      <div>
        {(error) ?
          <p className="text-xl font-bold text-red-600">
            {error}
          </p>
          :
          <p className="text-xl font-bold text-blue-600">
            Cipher Text: {decode(text, secretKey, alphabet)}
          </p>
        }
      </div>
    </div>
    <ConfigComponent
      alphabet={alphabet}
      onChangeAlphabet={onAlphabetChange}
      secretKey={secretKey}
      onChangeSecretKey={onKeyChange} />
  </div>
}


