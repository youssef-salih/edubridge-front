import React from "react";
import { useTheme } from "../hooks/useTheme";

export default {
  title: "Hooks/useTheme",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A demo showing how to use the `useTheme` hook.",
      },
      source: {
        code: `const { theme, toggleTheme } = useTheme();
          //to get the theme color use 
          {theme}
          //to toggle the theme color on/off
          {toggleTheme} 

          //in css classes use dark:*
          <div class="bg-white dark:bg-black">this will show the dark background if the theme is dark</div>
        `,
      },
    },
  },
};

/**
 * A wrapper component is needed because React hooks
 * cannot be used directly inside the story's config.
 */
const ThemeDemo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: "2rem",
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <p>Current theme: {theme}</p>
      <button
        className="bg-primary px-5 py-2 hover:rounded-2xl transition-all duration-500 cursor-pointer drop-shadow-2xl"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export const Default = {
  render: () => <ThemeDemo />,
};
