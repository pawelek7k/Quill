import Link from "next/link";
import { useState } from "react";

export const AuthLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Link
      onClick={toggleVisibility}
      href={href}
      className={`text-xl font-semibold leading-6 text-text lg:text-base ${
        isVisible ? "block" : "hidden"
      }`}
    >
      {children}
    </Link>
  );
};
