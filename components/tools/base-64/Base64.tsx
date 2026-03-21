"use client";

import { useState } from "react";

export default function Base64Tool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    try {
      if (mode === "encode") {
        const encoded = btoa(input);
        setOutput(encoded);
      } else {
        const decoded = atob(input);
        setOutput(decoded);
      }
    } catch (error) {
      setOutput("Invalid Base64 string");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Mode Selection */}
      <div className="flex gap-4">
        <button
          onClick={() => setMode("encode")}
          className={`px-4 py-2 rounded ${
            mode === "encode"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          Encode
        </button>

        <button
          onClick={() => setMode("decode")}
          className={`px-4 py-2 rounded ${
            mode === "decode"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          Decode
        </button>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="font-medium">Input</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or Base64 string..."
          className="w-full border rounded p-3 h-40"
        />
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Convert
      </button>

      {/* Output */}
      <div className="space-y-2">
        <label className="font-medium">Output</label>
        <textarea
          value={output}
          readOnly
          className="w-full border rounded p-3 h-40 bg-gray-50"
        />
      </div>

    </div>
  );
}