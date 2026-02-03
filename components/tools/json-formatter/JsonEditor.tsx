export default function JsonEditor({ input, setInput, output, error }: any) {
    const commonClass = "w-full h-[500px] p-4 font-mono text-sm border rounded-lg focus:ring-2 outline-none"

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <textarea
                className={`${commonClass} focus:ring-blue-500`}
                placeholder="Paste your JSON input here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="relative">
                <textarea
                    readOnly
                    className={`${commonClass} bg-gray-50 ${error ? 'border-red-500 text-red-600' : 'text-gray-800'}`}
                    placeholder="Result will show here!"
                    value={error || output}
                />
                {error && <span className="absolute bottom-4 left-4 text-xs text-red-500">JSON format error</span>}
            </div>
        </div>
    );
}