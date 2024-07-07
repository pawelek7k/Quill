import Link from "next/link";

export const NavLinks = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="text-xl font-semibold leading-6 text-text lg:text-base "
  >
    {children}
  </Link>
);
