# Cyber Weather Dashboard 🌦️

A real-time weather dashboard with a cyberpunk aesthetic and retro spaceship design. Get live weather data for your location with a futuristic, neon-infused interface.

![Cyber Weather Dashboard](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Real-time Weather Data**: Live weather information powered by Open-Meteo API
- **Geolocation Support**: Automatically detects your location for accurate local weather
- **7-Day Forecast**: View detailed weather predictions for the week ahead
- **Cyberpunk UI**: Neon-themed interface with retro spaceship aesthetics
- **Responsive Design**: Fully responsive layout that works on all devices
- **Weather Metrics**: Temperature, humidity, wind speed, UV index, and more
- **Location Display**: Reverse geocoding to show your city and country

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.x** - Type-safe development

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **tw-animate-css** - Additional animation support
- **Custom CSS Variables** - OKLCH color system for vibrant cyberpunk theme

### UI Components
- **Radix UI** - Headless accessible components
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **Recharts** - Chart components for data visualization
- **Embla Carousel** - Carousel/slider component

### Fonts
- **Geist** & **Geist Mono** - Modern sans-serif and monospace fonts
- **Press Start 2P** - Retro pixel font for cyberpunk aesthetic

### Form & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### APIs
- **Open-Meteo API** - Free weather forecast data
- **Nominatim (OpenStreetMap)** - Reverse geocoding for location names

### Additional Libraries
- **date-fns** - Date manipulation
- **clsx** & **tailwind-merge** - Conditional className management
- **Sonner** - Toast notifications
- **Vercel Analytics** - Web analytics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **pnpm**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather_sys
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install --legacy-peer-deps
   ```
   
   Or using pnpm:
   ```bash
   pnpm install
   ```

   > **Note**: The `--legacy-peer-deps` flag is required due to React 19 compatibility with some dependencies.

## 🚀 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

Or with npx:
```bash
npx next dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
weather_sys/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx             # Main page with weather logic
│   └── globals.css          # Global styles and CSS variables
├── components/
│   ├── current-weather.tsx  # Current weather display
│   ├── forecast-card.tsx    # Individual forecast card
│   ├── loading-screen.tsx   # Loading state component
│   ├── weather-dashboard.tsx # Main dashboard layout
│   ├── weather-metrics.tsx  # Weather metrics grid
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── utils.ts             # Utility functions
│   └── weather-utils.ts     # Weather-specific utilities
└── public/                  # Static assets
```

## 🌐 API Integration

### Open-Meteo Weather API

The application uses the free Open-Meteo API for weather data:

**Endpoint**: `https://api.open-meteo.com/v1/forecast`

**Parameters**:
- `latitude` & `longitude` - User's coordinates
- `current` - Current weather variables (temperature, humidity, wind, etc.)
- `daily` - Daily forecast data (7-day prediction)
- `timezone=auto` - Automatic timezone detection

**No API key required** ✅

### Nominatim Geocoding API

Reverse geocoding to convert coordinates to location names:

**Endpoint**: `https://nominatim.openstreetmap.org/reverse`

**Usage**: Fetches city and country names from coordinates

## 🎨 Design Features

- **Cyberpunk Theme**: Dark mode with neon cyan, pink, and purple accents
- **OKLCH Color System**: Modern color space for vibrant, perceptual colors
- **Glassmorphism**: Backdrop blur effects for depth
- **Neon Glows**: Text shadow effects for cyber aesthetics
- **LED Accents**: Border effects mimicking LED strips
- **Responsive Layout**: Mobile-first design approach

## 🔧 Configuration

### TypeScript

The project uses strict TypeScript configuration. See `tsconfig.json` for details.

### Tailwind CSS

Tailwind CSS 4.x with custom theme configuration in `globals.css`:
- Custom color variables using OKLCH
- Custom font families
- Custom spacing and radius values

## 📝 Environment Variables

Currently, no environment variables are required. The application uses free APIs that don't need authentication.

## 🌍 Browser Compatibility

The application uses the Geolocation API, which requires:
- HTTPS connection (or localhost for development)
- User permission to access location

Supported browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 🤝 Contributing

Contributions are welcome! Please follow the project's coding standards:
- Use tabs for indentation
- Maximum 80 characters per line
- Follow TypeScript strict mode
- Write meaningful commit messages

## 📄 License

This project is private and not licensed for public use.

## 🐛 Known Issues

- Some dependencies may show peer dependency warnings with React 19
- Geolocation requires user permission and HTTPS

## 🔮 Future Enhancements

- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Multiple location support
- [ ] Weather radar integration
- [ ] Customizable themes
- [ ] PWA support for offline access

---

Built with ⚡ by the Cyber Weather Team
