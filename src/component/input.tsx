
export default function PlainTextComponent({ value, onChange, title }: {
  value: string;
  onChange: (text: string) => void;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">{title}</h1>
      <textarea
        className="w-96 h-40 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        placeholder="Type here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
