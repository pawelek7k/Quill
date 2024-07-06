export function NavLinks({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="text-sm font-semibold leading-6"
      style={{ color: "var(--text)" }}
    >
      {children}
    </a>
  );
}
