# Toolify - Developer Utilities

An open-source suite of tools designed to help developers handle common tasks quickly and safely, right in the browser.

## 🚀 Getting Started (Recommended)

The easiest way to run Toolify is using Docker. The project is pre-configured with an optimized Multi-stage `Dockerfile` and `docker-compose`.

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thebriantech/toolify-fe
   cd toolify-fe
   ```

2. **Build and start the production container:**
   ```bash
   docker compose up -d --build
   ```
   *The app will be available at http://localhost:3000*
---

## 💻 Manual Installation (Alternative)

If you prefer to run the project without Docker:

### Prerequisites
- Node.js 18.x or later
- pnpm (recommended) or npm/yarn

### Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server at http://localhost:3000
pnpm dev

# 3. Build for production
pnpm build
pnpm start
```

## 📁 Project Structure

```
toolify-fe/
├── app/                          # Next.js App Router (Route pages)
├── components/                   # React components
│   ├── tools/                   # Tool-specific UI logic
│   └── ui/                      # Shared reusable components
├── data/                        # Static configuration & metadata
├── lib/                         # Pure functions & helpers
└── public/                      # Static assets
```

## 🔧 Adding a New Tool

1. **Add metadata:** Register the tool in `data/tool.ts`.
2. **Add logic:** Create pure functions in `lib/tool-slug-helper.ts`.
3. **Build UI:** Create components in `components/tools/tool-slug/`.
4. **Create route:** Add the page entry point in `app/tools/tool-slug/page.tsx`.

*Note: Keep route pages pure. Move all processing logic to `lib/` and UI states to `components/`.*

## 🌐 Deployment 

### Vercel (Recommended Hosted Solution)
```bash
npm i -g vercel
vercel
```

## 📚 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.