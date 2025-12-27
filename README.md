# Diin Technologies - Modern IT Company Website

A high-performance, visually stunning corporate website built for Diin Technologies. This project leverages the latest web technologies to deliver an immersive user experience with advanced UI/UX features, 3D interactions, and a futuristic neon aesthetic.

## 🚀 Technology Stack

- **React 19**: The latest version of the popular UI library for building component-based interfaces.
- **Vite**: Next-generation frontend tooling for lightning-fast development servers and optimized builds.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development, configured with a custom vibrant neon palette.
- **Framer Motion**: A production-ready motion library for React, powering complex animations and gestures.
- **Lucide React**: Beautiful, consistent, and customizable icons.
- **React Router v6**: Standard routing library for seamless client-side navigation.

## ✨ Key Features

### 1. Advanced UI/UX Interactions (Updated)
- **3D Tilt Cards**: Service and Team cards feature a physics-based 3D tilt effect on hover. This adds depth and tactility to the interface, responding to mouse movement in real-time.
- **Scroll Progress Bar**: A sleek, sticky progress indicator at the top of the viewport that visualizes the user's reading position on the page.
- **Magnetic Navigation**: The navigation bar features a "magnetic" underline animation that fluidly moves to the active page link, enhancing the sense of continuity.

### 2. Visual Design & Aesthetics
- **Neon Cyber Theme**: A custom-configured color palette featuring **Deep Black/Zinc** backgrounds with vibrant **Neon Purple (#9B00F5)** and **Cyan (#00DCFF)** accents.
- **Glassmorphism**: Extensive use of backdrop blurs and semi-transparent backgrounds to create a modern, layered look.
- **Video Backgrounds**: The Hero section utilizes a high-definition, looped 3D particle animation video to immediately engage visitors with a "tech-forward" impression.

### 3. Component Architecture
- **Responsive Navbar**: Fully responsive navigation with a hamburger menu for mobile devices and a glass-morphic desktop bar that adapts on scroll.
- **Hero Section**: High-impact landing area with animated text entrance and video background.
- **Testimonials**: A trust-building section featuring star ratings, client avatars, and a grid layout.
- **Team Grid**: detailed profile cards for team members with social links and hover zoom effects.
- **Project Showcase**: Interactive cards displaying portfolio items with hover-reveal details and tag clouds.

## 📂 Project Structure

```
src/
├── components/
│   ├── common/         # Reusable atomic molecules (Buttons, inputs)
│   ├── layout/         # Global layout components (Navbar, Footer)
│   ├── sections/       # Page-specific sections (Hero, Team, Testimonials)
│   └── ui/             # Advanced UI/UX components (TiltCard)
├── pages/              # Route-level page components (Home, About, etc.)
├── styles/             # Global CSS and Tailwind directives
├── App.jsx             # Main application component & Routing setup
└── main.jsx            # Entry point
```

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🎨 Customization

The design system is centralized in `tailwind.config.js`. You can easily adjust the brand colors by modifying the `primary` (Purple) and `secondary` (Cyan) color objects in the `theme.extend.colors` section.

```javascript
// tailwind.config.js
colors: {
  primary: {
    500: '#9B00F5', // Main Brand Color
    // ...
  },
  secondary: {
    500: '#00DCFF', // Accent Color
    // ...
  }
}
```

---

© 2025 Diin Technologies. All Rights Reserved.
