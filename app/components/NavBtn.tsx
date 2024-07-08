"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export const NavBtn = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/login");
  };

  return (
    <Button
      radius="full"
      className="bg-secondaryBg text-text"
      onClick={handleNavigate}
    >
      {children}
    </Button>
  );
};
