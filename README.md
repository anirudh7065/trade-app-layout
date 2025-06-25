
# Trading App Frontend

A simple and clean trading application frontend built with **Next.js** and **Tailwind CSS**. This layout features a header, sidebar with market symbols, a main content area with a chart placeholder, and tabs to display orders and trades.

---

## Features

- Responsive layout with Tailwind CSS  
- Sidebar navigation for different market symbols and filters  
- Header with main navigation links  
- Main content area displaying a placeholder for trading charts  
- Tabs to switch between Orders and Trades lists with sample data  
- Easy to extend with real-time data and chart libraries  

---

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation  
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling  
- React hooks for state management  

---

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repository or create a new Next.js app and replace `pages/index.js` with the provided code.  
2. Install Tailwind CSS as per the official Next.js guide:
```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
````

3. Configure `tailwind.config.js` and add Tailwind directives to `styles/globals.css`.

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app.

---

## Project Structure

* `app/page.js` - Main trading app layout
* `styles/globals.css` - Tailwind CSS imports

---

## Future Enhancements

* Integrate real trading data APIs
* Add interactive charts (e.g. with Chart.js or Recharts)
* Add authentication and user portfolio management
* Implement order placement and trade history

---

## Author

**Abhishek Valsan**

---

## License

This project is open source and free to use.


