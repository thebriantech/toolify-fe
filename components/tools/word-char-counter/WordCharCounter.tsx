"use client";

import { useState, useMemo } from "react";

export default function WordCharCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words =
      trimmed.length > 0 ? trimmed.split(/\s+/).filter(Boolean).length : 0;

    const characters = text.length;

    const charactersNoSpace = text.replace(/\s/g, "").length;

    const sentences =
      trimmed.length > 0
        ? trimmed.split(/[.!?]+/).filter(Boolean).length
        : 0;

    const paragraphs =
      trimmed.length > 0
        ? trimmed.split(/\n+/).filter((p) => p.trim() !== "").length
        : 0;

    return {
      words,
      characters,
      charactersNoSpace,
      sentences,
      paragraphs,
    };
  }, [text]);

  return (
    <div className="max-w-5xl mx-auto px-4 mt-10 space-y-8">
      {/* Text Area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="w-full min-h-[250px] p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard label="Words" value={stats.words} />
        <StatCard label="Characters" value={stats.characters} />
        <StatCard label="Characters (No Spaces)" value={stats.charactersNoSpace} />
        <StatCard label="Sentences" value={stats.sentences} />
        <StatCard label="Paragraphs" value={stats.paragraphs} />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 text-center border">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold mt-2 text-blue-600">{value}</p>
    </div>
  );
}