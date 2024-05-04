import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// NEXT
// NEXTUI
import { Link, Chip } from "@nextui-org/react";
// ICONS
import { FaSun, FaMoon } from "react-icons/fa";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setdarkMode(true);
    } else {
      setdarkMode(false);
    }
  }, [theme]);

  return (
    <header>
      <div className="flex gap-1 p-2">
        <Chip
          as={Link}
          radius="sm"
          href="/hello"
          className="hover:cursor-pointer"
        >
          Hello
        </Chip>
        <Chip
          radius="sm"
          className="hover:cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </Chip>
      </div>
    </header>
  );
};
