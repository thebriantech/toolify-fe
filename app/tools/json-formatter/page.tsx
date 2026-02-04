import HeroSection from "@/components/ui/HeroSection";
import JsonFormatter from "@/components/tools/json-formatter/JsonFormatter";

export const metadata = {
    title: "JSON Formatter - Toolify",
    description: "An online JSON formatting tool that supports 2-space and 4-space indentation."
};

export default function page() {
    return (
        <div className="container mx-auto py-10 px-4">
            <HeroSection name="JSON Formatter" description="Beautify, minify, and validate JSON strings." />
            <JsonFormatter />
        </div>
    )
}