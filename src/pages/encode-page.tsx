import PlainTextComponent from "@/component/input";
import { VigenereCipher } from "@/core/vigenere-cipher";
import { useState } from "react";

export function EncodePage() {
  const [text, setText] = useState("");
  const { encode } = VigenereCipher;

  return <div className="h-[100%] p-3 flex flex-col justify-center items-center gap-7 bg-gray-100 ">
    <PlainTextComponent title="Encoder" text={text} setText={setText} />
    <div>
      <p className="text-xl font-bold text-blue-600">Cipher Text: {encode(text, "cryptii", "abcdefghijklmnopqrstuvwxyz")}</p>
    </div>
  </div>

}
