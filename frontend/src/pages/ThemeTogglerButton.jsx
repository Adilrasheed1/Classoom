import { useEffect, useState } from "react";
import { ThemeTogglerButton } from "../components/animate-ui/components/buttons/theme-toggler";

export default function ThemeTogglerButtonDemo({
  variant = "outline",
  size = "md",
  direction = "horizontal",
  system = true,
}) {
  const [theme, setTheme] = useState("light");

  // apply theme to HTML
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeTogglerButton
      variant={variant}
      size={size}
      direction={direction}
      modes={system ? ["light", "dark", "system"] : ["light", "dark"]}
      onModeChange={(mode) => {
        if (mode === "system") {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          setTheme(prefersDark ? "dark" : "light");
        } else {
          setTheme(mode);
        }
      }}
    />
  );
}