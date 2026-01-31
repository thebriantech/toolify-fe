import Link from 'next/link';
import { TOOLS } from '@/data/tool'; 
export default function Home() {
  return (
    <div className="py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Developer <span className="text-blue-600">Utilities</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Bộ công cụ mã nguồn mở giúp developer xử lý các tác vụ thường gặp
          nhanh chóng và an toàn ngay trên trình duyệt.
        </p>
      </div>

      {/* Grid tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((tool) => (
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
        ))}
      </div>
    </div>
  );
}