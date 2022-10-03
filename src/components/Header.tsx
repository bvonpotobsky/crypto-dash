import {useTheme} from "next-themes";

import {BrandLogo, Moon, Sun, Wallet} from "@/assets/svg";

const Header: React.FC = (): JSX.Element => {
  const {theme} = useTheme();

  return (
    <header className="w-full flex items-center justify-end gap-x-3 p-3">
      <BrandLogo color={theme === "light" ? "#0E0E0E" : "#FFFFFF"} className="mr-auto" />
      <ThemeToggle />
      <Wallet />
    </header>
  );
};

export default Header;

const ThemeToggle: React.FC = (): JSX.Element => {
  const {theme, setTheme} = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode or Light Mode"
      className="p-1.5 rounded bg-gray-300/50 dark:bg-slate-400/20"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};
