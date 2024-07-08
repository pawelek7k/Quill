import { Logo } from "../Logo";
import HeaderClient from "./HeaderClient";

export const Header = () => {
  return (
    <header className="z-998 fixed top-0 w-screen">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-evenly p-6 lg:px-8"
      >
        <Logo />
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        <HeaderClient />
      </nav>
    </header>
  );
};
