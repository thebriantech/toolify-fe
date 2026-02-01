import { Tool } from "@/data/tool";
import Link from "next/link";

interface ToolCardProps {
    tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
    return (
        <Link
            key={tool.id}
            href={tool.href}
            className="group block"
        >
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-500 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <tool.icon size={24} />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                        {tool.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                    {tool.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.description}
                </p>
            </div>
        </Link>
    )
}