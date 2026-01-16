# 📈 Bluestock Fintech - Live IPO Dashboard

A dynamic, responsive Frontend Module designed to track and manage Initial Public Offerings (IPOs). This project simulates a real-time Fintech dashboard where users can view IPO details, status updates, and apply via a modal interface.

## 🚀 Project Overview

**Problem Statement:** Users need a clean, clutter-free interface to view upcoming IPOs and apply for them without navigating away from the dashboard.

**Solution:** A Single Page Application (SPA) module that features:
- **Dynamic Data Rendering:** IPO cards are generated via JavaScript (simulating an API).
- **Status Logic:** Visual indicators for 'Open' vs 'Closed' IPOs.
- **Smart Validation:** Prevents users from applying to closed IPOs or submitting empty forms.
- **Mobile Responsiveness:** Adapts seamlessly from desktop grid to mobile view.

## ✨ Key Features

- **Interactive UI:** Hover effects and clean card-based layout.
- **Modal Application Form:** Smooth overlay popup for user applications (no page reloads).
- **Form Validation:** JavaScript logic ensures all inputs are filled before submission.
- **Visual Cues:**
  - 🟢 **Open:** Green badge & active "Apply Now" button.
  - 🔴 **Closed:** Red badge & disabled "Bidding Closed" button.
- **Responsive Design:** Built using CSS Grid and Flexbox for mobile compatibility.

## 🛠️ Tech Stack

- **HTML5:** Semantic structure.
- **CSS3:** Custom styling, Grid layout, Flexbox, and Animations.
- **JavaScript (ES6):** DOM manipulation, Event handling, and Logic implementation.

## 📂 Project Structure

```bash
Bluestock_Assignment/
├── index.html      # Main HTML structure
├── style.css       # Styling and Responsive Design
├── script.js       # Business logic and DOM manipulation
└── README.md       # Project Documentation
