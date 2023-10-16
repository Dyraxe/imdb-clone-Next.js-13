"use client";
import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
