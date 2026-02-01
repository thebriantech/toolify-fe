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
├── app/                     # Next.js App Router
│   ├── page.tsx            # Trang chủ
│   ├── layout.tsx          # Root layout
│   └── tools/              # Các tool pages
├── components/              # React components
│   └── home/               # Components cho trang chủ
│       ├── HeroSection.tsx
│       ├── ToolCard.tsx
│       └── ToolsGrid.tsx
├── data/                    # Data & constants
│   └── tool.ts             # Danh sách tools
├── public/                  # Static files
└── styles/                  # CSS/Tailwind
```

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

1. **Thêm vào danh sách tools** (`data/tool.ts`):
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

2. **Tạo page mới** (`app/tools/tool-slug/page.tsx`):
   ```typescript
   export default function ToolPage() {
     return <div>Tool content</div>;
   }
   ```

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