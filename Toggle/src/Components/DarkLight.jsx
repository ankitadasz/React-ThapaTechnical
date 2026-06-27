import { use } from "react";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleButton = () => {
    return setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleButton } = use(ThemeContext);
  return (
    <div
      className={`p-4 flex flex-col justify-center
    items-center
    h-lvh
   ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}
    `}
    >
      <h1>Hello Users</h1>
      <p>Welcome!!!!</p>
      <button
        onClick={() => handleButton()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {theme === "dark" ? "Switch to Light mode" : "Switch to Dark mode"}
      </button>
    </div>
  );
};
