# HUD Dashboard - Next.js

A modern admin dashboard built with Next.js 14, TypeScript, and Tailwind CSS, converted from the original HUD HTML dashboard.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: Built-in dark mode support
- **Component-Based**: Modular React components for easy maintenance
- **Type Safety**: Full TypeScript support with proper type definitions
- **Performance**: Optimized with Next.js best practices

## 📁 Project Structure

```
hud-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Dashboard page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Top navigation header
│   │   │   ├── Sidebar.tsx      # Left sidebar navigation
│   │   │   └── Layout.tsx       # Main layout wrapper
│   │   ├── dashboard/
│   │   │   ├── StatCard.tsx     # Statistics cards
│   │   │   ├── ServerStats.tsx  # Server statistics
│   │   │   ├── TrafficAnalytics.tsx # Traffic analytics
│   │   │   └── TopProducts.tsx  # Top products list
│   │   └── ui/                  # Reusable UI components
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── public/
│   └── assets/                  # Static assets (images, etc.)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hud-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies

### Core Dependencies
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework

### UI Libraries
- **Lucide React**: Beautiful icons
- **Recharts**: Chart components (for future use)
- **Headless UI**: Unstyled, accessible UI components
- **clsx**: Conditional className utility

## 🎨 Design System

### Colors
- **Primary**: Teal (#14b8a6)
- **Secondary**: Gray scale
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#eab308)
- **Error**: Red (#ef4444)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Components
- **Cards**: White background with subtle shadows
- **Buttons**: Teal primary, gray secondary
- **Forms**: Consistent input styling
- **Navigation**: Collapsible sidebar with icons

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration for:
- Custom color palette
- Dark mode support
- Responsive breakpoints
- Custom utilities

### TypeScript
Strict TypeScript configuration with:
- Path aliases (@/ for src/)
- Strict type checking
- Modern ES features

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is enabled by default and includes:
- Dark backgrounds and text colors
- Proper contrast ratios
- Consistent theming across components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔄 Migration from HTML

This Next.js version includes all the key features from the original HTML dashboard:

### ✅ Converted Components
- Header with notifications and user menu
- Sidebar with collapsible navigation
- Statistics cards with metrics
- Server statistics with progress bars
- Traffic analytics with data tables
- Top products listing
- Recent activity feed

### 🎯 Key Improvements
- **Performance**: Server-side rendering and optimization
- **Maintainability**: Component-based architecture
- **Type Safety**: Full TypeScript coverage
- **Responsive**: Mobile-first design
- **Accessibility**: ARIA labels and keyboard navigation
- **SEO**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the original HTML source for reference

---

**Built with ❤️ using Next.js and Tailwind CSS** # Hud-Dashboard
