
export default function ConfigComponent({ alphabet, secretKey, hashType, onChangeAlphabet, onChangeSecretKey, onHashTypeChange }
  : {
    alphabet: string,
    secretKey: string,
    hashType: string,
    onChangeAlphabet: (alphabet: string) => void,
    onChangeSecretKey: (key: string) => void,
    onHashTypeChange: (hashType: string) => void
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
    <div className="w-48">
      <label className="block text-sm font-medium text-gray-700">Select Mode</label>
      <select
        value={hashType}
        onChange={(e) => onHashTypeChange(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="repeat">Repeat</option>
        <option value="autokey">Autokey</option>
      </select>
    </div>
  </div>
}


