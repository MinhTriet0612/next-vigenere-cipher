
export default function ConfigComponent({ alphabet, secretKey, onChangeAlphabet, onChangeSecretKey }
  : {
    alphabet: string,
    secretKey: string,
    onChangeAlphabet: (alphabet: string) => void,
    onChangeSecretKey: (key: string) => void,
  }
) {
  return <div className="h-80 w-56 flex flex-col p-4 gap-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
    <h1 className="text-blue-600 font-medium">Config</h1>
    <div className="flex flex-col">
      <h2 className="text-blue-600">Key</h2>
      <input
        type="text"
        placeholder="please typing..."
        value={secretKey}
        onChange={(e) => onChangeSecretKey(e.target.value)}
        className="border-2 border-solid border-gray-500 p-1 text-[12px]" />
    </div >
    <div className="flex flex-col">
      <h2 className="text-blue-600">Alphabet</h2>
      <input
        type="text"
        placeholder="please typing..."
        value={alphabet}
        onChange={(e) => onChangeAlphabet(e.target.value)}
        className="border-2 border-solid border-gray-500 p-1 text-[12px]" />
    </div >
  </div>
}


