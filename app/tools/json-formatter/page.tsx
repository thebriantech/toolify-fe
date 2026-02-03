import JsonFormatter from "@/components/tools/json-formatter/JsonFormatter";

export const metadata = {
    title: "JSON Formatter - Toolify",
    description: "Công cụ định dạng JSON trực tuyến, hỗ trợ indent 2 và 4 spaces."
};

export default function page() {
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-2">JSON Formatter</h1>
            <p className="text-gray-500 mb-8">Làm đẹp chuỗi JSON của bạn chỉ với một cú click</p>
            <JsonFormatter />
        </div>
    )
}