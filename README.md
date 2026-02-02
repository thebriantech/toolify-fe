# Toolify - Developer Utilities

Bộ công cụ mã nguồn mở giúp developer xử lý các tác vụ thường gặp nhanh chóng và an toàn ngay trên trình duyệt.

## 📋 Yêu cầu hệ thống

- Node.js 18.x trở lên
- pnpm (khuyến nghị) hoặc npm/yarn

## 🚀 Cài đặt

### 1. Cài đặt pnpm (nếu chưa có)

**Cài qua npm:**
```bash
npm install -g pnpm
```

**Kiểm tra phiên bản:**
```bash
pnpm -v
```

### 2. Clone dự án

```bash
git clone https://github.com/thebriantech/toolify-fe
cd toolify-fe
```

### 3. Cài đặt dependencies

```bash
pnpm install          # Cài đặt tất cả packages
```

## 🛠️ Các lệnh pnpm cơ bản

### Development
```bash
pnpm dev             # Chạy dev server tại http://localhost:3000
pnpm build           # Build production
pnpm start           # Chạy production build
pnpm lint            # Kiểm tra lỗi code với ESLint
```

### Quản lý packages
```bash
pnpm add <package>           # Thêm package vào dependencies
pnpm add -D <package>        # Thêm package vào devDependencies
pnpm remove <package>        # Xóa package
pnpm update                  # Update tất cả packages
pnpm outdated                # Kiểm tra packages cũ
```

### Các lệnh khác
```bash
pnpm list                    # Liệt kê tất cả packages đã cài
pnpm why <package>           # Xem lý do package được cài
pnpm store prune             # Dọn dẹp cache
```

## 📁 Cấu trúc dự án

```
toolify-fe/
├── app/                              # Next.js App Router
│   ├── page.tsx                      # Trang chủ
│   ├── layout.tsx                    # Root layout
│   ├── globals.css                   # Global styles
│   └── tools/                        # Routes cho các công cụ
│       └── json-formatter/
│           └── page.tsx              # Route: /tools/json-formatter
├── components/                       # React components
│   ├── home/                         # Components cho trang chủ
│   │   ├── HeroSection.tsx           # Hero section trang chủ
│   │   ├── ToolCard.tsx              # Card hiển thị từng tool
│   │   └── ToolGrid.tsx              # Grid layout cho danh sách tools
│   ├── shared/                       # UI components dùng chung
│   │   ├── Button.tsx                # Button component tái sử dụng
│   │   ├── Navbar.tsx                # Navigation bar
│   │   └── Textarea.tsx              # Textarea component
│   └── tools/                        # Logic riêng cho từng công cụ
│       └── json-formatter/           # Đóng gói toàn bộ logic JSON
│           ├── JsonFormatter.tsx     # Component chính (Entry point)
│           ├── JsonControls.tsx      # Thanh điều khiển (Indent 2/4, Copy)
│           └── JsonView.tsx          # Hiển thị Input/Output
├── data/                             # Data & constants
│   └── tool.ts                       # Metadata của các tools (cho ToolCard)
├── lib/                              # Helper functions & utilities
│   └── json-helper.ts                # Hàm beautify, minify, validate JSON
├── public/                           # Static files
└── styles/                           # CSS/Tailwind
```

### Nguyên tắc tổ chức

- **`app/tools/`**: Chỉ chứa route pages (file `page.tsx`), không chứa logic
- **`components/tools/`**: Chứa toàn bộ logic UI và state management cho từng tool
- **`components/shared/`**: Components tái sử dụng giữa các tools
- **`lib/`**: Pure functions, không chứa React components
- **`data/`**: Configuration và metadata tĩnh

## 🎯 Workflow phát triển

1. **Tạo branch mới:**
   ```bash
   git checkout -b fea/ten-tinh-nang
   ```

2. **Chạy dev server:**
   ```bash
   pnpm dev
   ```

3. **Kiểm tra lỗi code:**
   ```bash
   pnpm lint
   ```

4. **Build để test production:**
   ```bash
   pnpm build
   pnpm start
   ```

5. **Commit & push:**
   ```bash
   git add .
   git commit -m "feat: Mô tả thay đổi"
   git push origin fea/ten-tinh-nang
   ```

## 🔧 Thêm tool mới

### Bước 1: Thêm metadata vào `data/tool.ts`

```typescript
{
  id: '22',
  name: 'Tool Name',
  description: 'Mô tả tool',
  href: '/tools/tool-slug',
  icon: IconName,
  category: 'Dev' | 'Social' | 'Utility',
}
```

### Bước 2: Tạo helper functions trong `lib/` (nếu cần)

```typescript
// lib/tool-slug-helper.ts
export function processData(input: string): string {
  // Logic xử lý thuần túy
  return result;
}
```

### Bước 3: Tạo components trong `components/tools/tool-slug/`

```typescript
// components/tools/tool-slug/ToolSlugComponent.tsx
'use client';
import { useState } from 'react';
import { processData } from '@/lib/tool-slug-helper';

export default function ToolSlugComponent() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleProcess = () => {
    const result = processData(input);
    setOutput(result);
  };

  return (
    <div>
      {/* UI logic ở đây */}
    </div>
  );
}
```

### Bước 4: Tạo route page trong `app/tools/tool-slug/page.tsx`

```typescript
// app/tools/tool-slug/page.tsx
import ToolSlugComponent from '@/components/tools/tool-slug/ToolSlugComponent';

export default function ToolSlugPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Tool Name</h1>
      <ToolSlugComponent />
    </div>
  );
}
```

### Lưu ý khi phát triển tool mới

1. **Tách logic khỏi UI**: Đưa các hàm xử lý vào `lib/`, giữ components clean
2. **Component structure**: 
   - Component chính (ToolName.tsx) - Entry point
   - Sub-components (Controls, View, etc.) - Từng phần UI
3. **Shared components**: Tái sử dụng từ `components/shared/` (Button, Textarea, etc.)
4. **Type safety**: Định nghĩa types/interfaces cho tool của bạn

## 🌐 Deploy

### Vercel (Khuyến nghị)
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Build thủ công
```bash
pnpm build
# Upload folder .next và public lên hosting
```

## 📚 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 🤝 Đóng góp

1. Fork dự án
2. Tạo branch mới (`git checkout -b fea/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to branch (`git push origin fea/AmazingFeature`)
5. Mở Pull Request

## 📝 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🐛 Báo lỗi

Nếu gặp vấn đề, vui lòng tạo [Issue](https://github.com/thebriantech/toolify-fe/issues) mới.

---

Made with ❤️ by Toolify Team.