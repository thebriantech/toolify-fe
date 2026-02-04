export default function JsonControl({ indent, setIndent, onFormat, onClear, hasOutput, output }: any) {
    return (
        <div className="flex gap-4 items-center bg-gray-59 p-3 rounded-lg border">
            <select
                value={indent}
                onChange={(e) => setIndent(Number(e.target.value))}
                className="border rounded px-2 py-1.5 text-sm"
            >
                <option value={2}>Indent: 2 spaces</option>
                <option value={4}>Indent: 4 spaces</option>
            </select>
            <button
                onClick={onFormat}
                className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 cursor-pointer"
            >Format</button>
            <button
                onClick={onClear}
                className="px-3 py-1.5 text-white rounded bg-red-500 hover:bg-red-800 cursor-pointer">Clear</button>
            {hasOutput && (
                <button
                    onClick={() => navigator.clipboard.writeText(output)}
                    className="ml-auto text-sm bg-green-100 text-green-700 px-3 py-1.5 rounded cursor-pointer hover:bg-green-300 py-1.5"
                >
                    Copy Result
                </button>
            )}
        </div>
    );
}