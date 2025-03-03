import { useState } from "react";
import { EncodePage } from "./encode-page";
import { DecodePage } from "./decoder-page";


export default function Home() {
  const [typePage, setTypePage] = useState<"encode" | "decode">("encode")

  return (
    <div className="h-[100vh] p-3 flex flex-col justify-center items-center gap-7 bg-gray-100 ">
      <div className="flex gap-3">
        <button
          className={`p-2 rounded-lg ${typePage === "encode" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setTypePage("encode")}
        >
          Encoder
        </button>
        <button
          className={`p-2 rounded-lg ${typePage === "decode" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setTypePage("decode")}
        >
          Decode
        </button>
      </div>
      {typePage === "encode" ? <EncodePage /> : <DecodePage />}
    </div>
  )
}

