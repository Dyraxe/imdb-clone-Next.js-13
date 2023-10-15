"use client";
import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div className="dark:bg-gray-700 dark:text-gray-200 min-h-screen text-gray-700 transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
