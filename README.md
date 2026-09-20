# Naming Ceremony — Front-End Web Development Assignment

<div align="center">

  <!-- Badges -->
  [![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://ganeshpoojary727.github.io/Code_Nimbus_Solutions__Assignment/)

  <br />

  ### 🌐 **[Live Demo](https://ganeshpoojary727.github.io/Code_Nimbus_Solutions__Assignment/)** &nbsp; | &nbsp; 📂 **[GitHub Repository](https://github.com/ganeshpoojary727/Code_Nimbus_Solutions__Assignment)**

  <p align="center">
    A pixel-perfect, high-fidelity recreation of the <strong>Naming Ceremony Web Invitation</strong> developed for the <strong>Front-End Developer Intern Assignment</strong> at <strong>Code Nimbus Solutions</strong>.
  </p>

</div>

---

## 📌 Project Overview

This project is an interactive digital invitation crafted specifically for **desktop screen viewports**, adhering strictly to the visual theme, typography, color palette, custom SVG decorations, and motion design of the original reference application.

* **Assignment Role**: Front-End Developer Intern
* **Company**: Code Nimbus Solutions
* **Reference Webpage**: [Naming Ceremony Invitation Live Demo](https://nam002-livedemo.invitationnation.in/)
* **Focus Areas**: Accuracy of elements, overall theme, design fidelity, and advanced UI animations.

---

## ✨ Key Features & Sections

| Section | Description | Animation & Interactions |
|---|---|---|
| **🌸 Hero Section** | Traditional arch frame with baby portrait, ornamental florals, leaves, and invitation typography | Staggered entrance, floating ribbon bounce, continuous keyframe ambient star twinkling, rotating floral accents |
| **⏳ Countdown Timer** | Live countdown counter targeting the ceremony date (Days, Hours, Minutes, Seconds) | 3D flip-card transitions for digits, elastic ribbon bounce, viewport-triggered entry |
| **💌 Warm Invite** | Heartfelt invitation message from the parents with ornate frame boundaries | Smooth scale-up and floral bloom animations triggered upon scrolling into view |
| **📍 Location & Venue** | Venue details, integrated Google Maps query button, and interactive photo frame | Realistic **3D ribbon flip card** (`rotateY: 180deg`) revealing venue photograph |
| **💬 Wishes Carousel** | Interactive testimonial-style slider displaying community wishes and blessings | Smooth directional slide transitions powered by `AnimatePresence` |
| **✍️ Send Wishes** | Form allowing guests to compose and submit personalized wishes in real-time | Dynamic local state update with immediate prepend to the live wishes carousel |
| **📅 Event Schedule** | Chronological ceremony timeline (Namakarana Pooja, Name Reveal, Lunch) | Interactive swipeable/draggable timeline track with shimmering star accents |
| **🎥 Video Highlights** | Responsive 16:9 embedded video showcase framed by decorative header/footer SVGs | Fade-in and frame synchronization |
| **🎵 Background Music** | Fixed audio player control with play/pause state and phone call interaction | Seamless HTML5 audio integration with graceful autoplay handling |

---

## 🛠️ Tech Stack & Tools

* **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool & Bundler**: [Vite 8](https://vitejs.dev/) with code-splitting & chunk optimization
* **Styling & Design**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Custom CSS modules
* **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/) (spring physics, 3D transforms, viewport triggers)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Linting & Code Quality**: [Oxlint](https://oxc.rs/) (0 warnings, 0 errors across codebase)
* **Typography**: Custom Google Fonts (`Galada`, `Mulish`, `Playfair Display`, `Flamenco`, `Fjalla One`, `Manrope`)
* **CI/CD & Hosting**: GitHub Actions automated pipeline deploying to GitHub Pages

---

## 🏗️ Project Architecture

```plaintext
naming-ceremony/
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Pages CI/CD pipeline
├── public/
│   ├── images/                 # Optimized raster assets (baby, venue, ribbons)
│   ├── svg/                    # 15 custom vector assets (flowers, stars, leaves, ornaments)
│   └── favicon.svg             # SVG site favicon
├── src/
│   ├── components/             # Modular, lazy-loaded UI sections
│   │   ├── CountDown.tsx       # Flip-card countdown timer
│   │   ├── Footer.tsx          # Copyright & branding footer
│   │   ├── HeroSection.tsx     # Hero banner with complex animations
│   │   ├── Location.tsx        # 3D flip card & venue details
│   │   ├── Music.tsx           # Floating audio player widget
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   ├── Schedule.tsx        # Interactive timeline slider
│   │   ├── SendWishes.tsx      # Wish submission form
│   │   ├── Video.tsx           # Video embed showcase
│   │   ├── WarmInvite.tsx      # Parents' welcome message
│   │   └── Wishes.tsx          # Dynamic wishes carousel
│   ├── data/
│   │   └── content.ts          # Centralized configuration (dates, copy, venue, wishes)
│   ├── hooks/
│   │   └── useCountdown.ts     # Custom countdown calculation hook
│   ├── pages/
│   │   └── HomePage.tsx        # Main landing page assembling all sections
│   ├── styles/
│   │   ├── index.css           # Tailwind base layers & global resets
│   │   └── main.css            # Section-specific styles & animation keyframes
│   ├── utils/
│   │   └── assets.ts           # Dynamic path resolution helper for base URL safety
│   ├── App.tsx                 # Root application wrapper with Suspense boundaries
│   └── main.tsx                # React DOM entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts              # Vite configuration with custom dev asset middleware
```

---

## 🚀 Getting Started

To run this project locally on your machine:

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ganeshpoojary727/Code_Nimbus_Solutions__Assignment.git
   cd Code_Nimbus_Solutions__Assignment/naming-ceremony
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your desktop browser.

---

## 📦 Build & Production

To generate an optimized production build:

```bash
npm run build
```

This compiles TypeScript definitions (`tsc -b`) and bundles static assets with Vite into the `dist/` directory.

To preview the built production site locally:
```bash
npm run preview
```

---

## 🚢 Continuous Deployment

The repository uses GitHub Actions (`.github/workflows/deploy.yml`) to automatically build and deploy the application to GitHub Pages whenever changes are merged into the `main` branch.

---

## 👨‍💻 Author

**Ganesh Poojary**
* **GitHub**: [@ganeshpoojary727](https://github.com/ganeshpoojary727)
* **LinkedIn**: [Ganesh Poojary](https://www.linkedin.com/in/ganesh-poojary-43091a285)
* **Phone**: +91 7019391321
