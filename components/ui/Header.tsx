import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                    <div className="bg-black text-white p-1.5 rounded-lg">
                        <Terminal size={20} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-blue-600">
                        Toolify
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
                    <Link href="/" className="hover:text-black transition-colors">
                        Tools
                    </Link>
                    <Link href="https://github.com/thebriantech/toolify-fe" target="_blank" className="hover:text-black transition-colors">
                        GitHub
                    </Link>
                    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition text-xs font-bold">
                        Contact us
                    </button>
                </nav>
            </div>
        </header>
    )
}