'use client';

import { getDiffStats } from "@/lib/text-diff";
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer-continued';
import { useState } from "react";

export default function TextDiffContainer() {
    const [oldValue, setOldValue] = useState('');
    const [newValue, setNewValue] = useState('');
    const [isSplitView, setIsSplitView] = useState(true)

    const stats = getDiffStats(oldValue, newValue)

    const customStyles = {
        titleBlock: {
            textAlign: 'center' as const,
        },
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 font-bold">First Text</label>
                    <textarea
                        className="w-full h-40 p-2 border rounded shadow-sm text-sm"
                        value={oldValue}
                        placeholder="Paste your first text here..."
                        onChange={(e) => setOldValue(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block mb-2 font-bold">Second Text</label>
                    <textarea
                        className="w-full h-40 p-2 border rounded shadow-sm text-sm"
                        value={newValue}
                        placeholder="Paste your second text here..."
                        onChange={(e) => setNewValue(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 p-4 rounded-lg border">
                <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="font-semibold text-red-600 dark:text-red-400">
                            {stats.deletions} <span className="font-normal text-gray-600 dark:text-gray-400">deleted</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-semibold text-green-600 dark:text-green-400">
                            {stats.additions} <span className="font-normal text-gray-600 dark:text-gray-400">added</span>
                        </span>
                    </div>
                </div>

                <div className="flex gap-2 bg-white dark:bg-zinc-950 p-1 rounded-lg border">
                    <button
                        onClick={() => setIsSplitView(true)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition ${isSplitView
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
                            }`}
                    >
                        Split View
                    </button>
                    <button
                        onClick={() => setIsSplitView(false)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition ${!isSplitView
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
                            }`}
                    >
                        Unified View
                    </button>
                </div>
            </div>

            <div className="border rounded-lg overflow-hidden bg-white dark:bg-zinc-950">
                <ReactDiffViewer
                    oldValue={oldValue}
                    newValue={newValue}
                    splitView={isSplitView}
                    compareMethod={DiffMethod.WORDS}
                    showDiffOnly={false}
                    leftTitle="First Text"
                    rightTitle="Second Text"
                    hideLineNumbers={false}
                    styles={customStyles}
                />
            </div>
        </div>
    );
}