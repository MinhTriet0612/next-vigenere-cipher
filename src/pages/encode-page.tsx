import PlainTextComponent from "@/component/input";
import { VigenereCipher } from "@/core/vigenere-cipher";
import { useState } from "react";

export function EncodePage() {
  const [text, setText] = useState("");
  const { encode } = VigenereCipher;
  const [alphabet, setAlphabet] = useState<string>("abcdefghijklmnopqrstuvwxyz");
  const [secretKey, setScretKey] = useState<string>("cryptii");

  return <div className="flex flex-col md:flex-row">
    <div className="h-[100%] p-3 flex flex-col justify-center items-center gap-7 bg-gray-100 ">
      <PlainTextComponent title="Vigenere Encoder" text={text} setText={setText} />
      <div>
        <p className="text-xl font-bold text-blue-600">Cipher Text: {encode(text, secretKey, alphabet)}</p>
      </div>
    </div>
    <ConfigComponent alphabet={alphabet} setAlphabet={setAlphabet} secretKey={secretKey} setSecretKey={setScretKey} />
  </div>
}


function ConfigComponent({ alphabet, secretKey, setAlphabet, setSecretKey }
  : {
    alphabet: string,
    secretKey: string,
    setAlphabet: (alphabet: string) => void,
    setSecretKey: (key: string) => void,
  }
) {
  return <div className="h-80 w-56 flex flex-col p-4 gap-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
    <h1 className="text-blue-600 font-medium">Config</h1>
    <div className="flex flex-col">
      <h2 className="text-blue-600">Key</h2>
      <input type="text" placeholder="please typing..." value={secretKey} onChange={(e) => setSecretKey(e.target.value)} className="border-2 border-solid border-gray-500 p-1 text-[12px]" />
    </div >
    <div className="flex flex-col">
      <h2 className="text-blue-600">Alphabet</h2>
      <input type="text" placeholder="please typing..." value={alphabet} onChange={(e) => setAlphabet(e.target.value)} className="border-2 border-solid border-gray-500 p-1 text-[12px]" />
    </div >
  </div>
}


