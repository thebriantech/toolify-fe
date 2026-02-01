import { TOOLS } from "@/data/tool";
import ToolCard from "./ToolCard";

export default function ToolGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
    )
}