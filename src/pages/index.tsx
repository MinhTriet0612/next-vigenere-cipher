import { vigenereCipher } from "@/core/vigenere-cipher";
import { encode } from "punycode";
import { TextareaHTMLAttributes, useState } from "react";


export default function Home() {
  const [text, setText] = useState("");
  const { encode, decode } = vigenereCipher;
  return (
    <div className="h-[100%] p-3 flex flex-col justify-center items-center gap-7 bg-gray-100">
      <PlainTextComponent title="Encoder" text={text} setText={setText} />
      <div>
        <p className="text-xl font-bold text-blue-600">Cipher Text: {encode(text, "cryptii", "abcdefghijklmnopqrstuvwxyz")}</p>
      </div>
    </div>
  );
}


const PlainTextComponent = ({ text, setText, title }: {
  text: string;
  setText: (text: string) => void;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">{title}</h1>
      <textarea
        className="w-96 h-40 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
