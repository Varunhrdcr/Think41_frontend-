# 🖼️ Think41 Image Smoothing App

A React-based image smoothing web application built using HTML5 Canvas. This tool allows users to upload an image, apply neighborhood-based smoothing (like 3x3, 5x5), and view pixel-level RGBA values interactively. Also includes options like grayscale filter and dark theme UI.

---

## 🚀 Features

- 📤 Upload any image and display it on canvas.
- 📏 Choose smoothing kernel size (3x3, 5x5, 7x7).
- 🧠 Apply a simple average blur using neighborhood logic.
- 🎨 View real-time RGBA values on pixel hover.
- 🌚 Dark mode UI with polished styling.
- 🟦 Toggle grayscale filter with a checkbox.
- 📥 Reset image anytime.

---

## 📸 Screenshots

| Original Image | Smoothed Image |
|----------------|----------------|
| ![](screenshots/original.png) | ![](screenshots/smoothed.png) |

> *(You can add screenshots later in a `screenshots/` folder.)*

---

## 📦 Tech Stack

- ⚛️ React (Frontend)
- 🎨 CSS (Dark theme styling)
- 🖌️ HTML5 Canvas API
- 🛠️ Vite (Development server + bundler)

---

## 🛠️ Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/Varunhrdcr/Think41_frontend-.git
cd Think41_frontend-

# Install dependencies
npm install

# Start the dev server
npm run dev
