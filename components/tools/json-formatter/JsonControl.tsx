export default function JsonControl({ indent, setIndent, onFormat, onClear, hasOutput, output }: any) {
    return (
        <div className="flex gap-4 items-center bg-gray-59 p-3 rounded-lg border">
            <select
                value={indent}
                onChange={(e) => setIndent(Number(e.target.value))}
                className="border rounded p-1.5 text-sm"
            >
                <option value={2}>Indent: 2 spaces</option>
                <option value={4}>Indent: 4 spaces</option>
            </select>
            <button
                onClick={onFormat}
                className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
            >Format</button>
            <button
                onClick={onClear}
                className="text-gray-600 hover:underline">Clear</button>
            {hasOutput && (
                <button
                    onClick={() => navigator.clipboard.writeText(output)}
                    className="ml-auto text-sm bg-green-100 text-green-700 px-3 py-1 rounded cursor-pointer hover:bg-green-300"
                >
                    Copy Result
                </button>
            )}
        </div>
    );
}