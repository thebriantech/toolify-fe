"use client"

import { formatJson } from "@/lib/json-helper"
import { useState } from "react"
import JsonControl from "./JsonControl";
import JsonEditor from "./JsonEditor";

export default function JsonFormatter() {
    const [input, setInput] = useState('[{"id":1,"name":"JSON Beautifier","type":"Formatter","active":true,"version":"1.0.2","author":"Toolify","usage":1250,"last_used":"2026-02-03"},{"id":2,"name":"Base64 Encoder","type":"Converter","active":true,"version":"1.1.0","author":"DevTeam","usage":890,"last_used":"2026-01-30"},{"id":3,"name":"JWT Debugger","type":"Security","active":false,"version":"0.9.5","author":"SecurityLab","usage":45,"last_used":"2026-02-01"},{"id":4,"name":"SQL Minifier","type":"Database","active":true,"version":"2.0.1","author":"QueryMaster","usage":3200,"last_used":"2026-02-03"},{"id":5,"name":"Color Picker","type":"Design","active":true,"version":"1.5.0","author":"UIX_Studio","usage":5600,"last_used":"2026-01-25"}]');
    const [output, setOutput] = useState(`[
  {
    "id": 1,
    "name": "JSON Beautifier",
    "type": "Formatter",
    "active": true,
    "version": "1.0.2",
    "author": "Toolify",
    "usage": 1250,
    "last_used": "2026-02-03"
  },
  {
    "id": 2,
    "name": "Base64 Encoder",
    "type": "Converter",
    "active": true,
    "version": "1.1.0",
    "author": "DevTeam",
    "usage": 890,
    "last_used": "2026-01-30"
  },
  {
    "id": 3,
    "name": "JWT Debugger",
    "type": "Security",
    "active": false,
    "version": "0.9.5",
    "author": "SecurityLab",
    "usage": 45,
    "last_used": "2026-02-01"
  },
  {
    "id": 4,
    "name": "SQL Minifier",
    "type": "Database",
    "active": true,
    "version": "2.0.1",
    "author": "QueryMaster",
    "usage": 3200,
    "last_used": "2026-02-03"
  },
  {
    "id": 5,
    "name": "Color Picker",
    "type": "Design",
    "active": true,
    "version": "1.5.0",
    "author": "UIX_Studio",
    "usage": 5600,
    "last_used": "2026-01-25"
  }
]`);
    const [indent, setIndent] = useState(2);
    const [error, setError] = useState<string | null>(null);

    const handleFormat = () => {
        const { data, error } = formatJson(input, indent);
        if (error) {
            setError(error);
            setOutput("");
        }
        else {
            setError(null);
            setOutput(data);
        }
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setIndent(2);
        setError(null)
    };

    return (
        <div className="space-y-4">
            <JsonControl
                indent={indent}
                setIndent={setIndent}
                onFormat={handleFormat}
                onClear={handleClear}
                hasOutput={!!output}
                output={output}
            />
            <JsonEditor
                input={input}
                setInput={setInput}
                output={output}
                error={error}
            />
        </div>
    )
}