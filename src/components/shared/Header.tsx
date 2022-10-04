import Link from "next/link";
import {useState} from "react";
import {useTheme} from "next-themes";

import {useMountEffect} from "hooks/useMountEffect";

import {WordmarkLogoWhite, WordmarkLogoBlack, Moon, Sun, WalletIcon} from "@/assets/svg";

const Header: React.FC = (): JSX.Element | null => {
  const {resolvedTheme} = useTheme();

  // When mounted on client, now we can show the UI. This is a workaround for the hydration issue.
  const [isMounted, setIsMounted] = useState(false);
  useMountEffect(() => setIsMounted(true));

  return (
    <header className="w-full flex items-center justify-end gap-x-3 p-2 md:p-4">
      <Link href="/">
        <a className="mr-auto">
          {isMounted && (resolvedTheme === "dark" ? <WordmarkLogoWhite /> : <WordmarkLogoBlack />)}
        </a>
      </Link>
      <ThemeToggle />
      <WalletIcon />
    </header>
  );
};

const ThemeToggle: React.FC = (): JSX.Element => {
  const {resolvedTheme, setTheme} = useTheme();

  // When mounted on client, now we can show the UI. This is a workaround for the hydration issue.
  const [isMounted, setIsMounted] = useState(false);
  useMountEffect(() => setIsMounted(true));

  return (
    <button
      aria-label="Toggle Dark Mode or Light Mode"
      className="p-1.5 rounded bg-black/10"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {isMounted && (resolvedTheme === "dark" ? <Sun /> : <Moon />)}
    </button>
  );
};

export default Header;
