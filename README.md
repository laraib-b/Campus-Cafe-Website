# FAST Cafe - Online Ordering System

A web-based ordering system designed for FAST NUCES Campus Cafe to streamline food ordering and eliminate long queues.

## Link: 
`https://laraib-b.github.io/Campus-Cafe-Website/`

## Problem Statement

The campus cafe faces two major challenges:
1. **Long Queues**: During peak hours, students waste valuable time standing in long queues to place orders
2. **Unstable Network**: Located in the basement, the cafe experiences poor network connectivity, making it difficult for students to browse menus and place orders on-site

## Solution

This online ordering system allows students to:
- Browse menus remotely from anywhere on campus (or off-campus) where they have stable internet
- Place orders in advance before arriving at the cafe
- Avoid long queues by pre-ordering their meals
- Access three different cafe menus: **Cafe Red** (Traditional Pakistani), **Cafe Blue** (International), and **Dough with the Flow** (Baked goods & Donuts)

## Project Structure

```
web/
├── assets/                 # All images and media files
│   ├── logo.png
│   ├── *.jpg, *.png, *.jpeg, *.webp, *.avif
│   └── cafe2.mp4
│
├── login.html             # Entry point - User authentication
├── login.js                # Login functionality
│
├── cafe-selection.html     # Cafe selection page (Red/Blue/Dough)
├── cafe-selection.js       # Cafe selection logic
│
├── cafe-red-menu.html      # Cafe Red menu page
├── cafe-blue-menu.html     # Cafe Blue menu page
├── dough-menu.html         # Dough menu page
├── menu.js                 # Menu data and functionality (shared)
│
├── checkout.html           # Order checkout page
├── checkout.js             # Checkout functionality
│
├── styles.css              # Global stylesheet
└── README.md               # This file
```

## Key Features

- **Three Cafe Menus**: Separate menus for Cafe Red, Cafe Blue, and Dough with the Flow
- **User Authentication**: Simple login system for students
- **Shopping Cart**: Add items, select variations, and customize orders
- **Responsive Design**: Works on desktop and mobile devices
- **Offline-Ready Structure**: All assets bundled locally for reliable access

## How to Run

1. **Download** the entire project folder with all files and the `assets` folder
2. **Open** `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari)
3. **Login** with your credentials (make sure to use @nu.edu.pk or @isb.nu.edu.pk at the end)
4. **Select** a cafe (Red, Blue, or Dough)
5. **Browse** the menu and add items to your cart
6. **Checkout** when ready

**Note**: No server setup or installation required! This is a pure HTML/CSS/JavaScript application that runs directly in your browser.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)
- **Storage**: LocalStorage (for cart and user session)

## Benefits

✅ **Time Saving**: Students can order ahead and skip queues  
✅ **Better Network**: Order from anywhere with stable internet  
✅ **Convenience**: Browse menus at your own pace  
✅ **Efficiency**: Reduces congestion at the cafe during peak hours  
✅ **User-Friendly**: Simple, intuitive interface

---

**Developed for FAST NUCES Campus Cafe** 🍽️




