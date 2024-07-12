"use client";

import { useRouter } from "next/navigation";

export const NavCard = ({
  children,
  page,
}: {
  children: React.ReactNode;
  page: string;
}) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`${page}`);
  };

  return (
    <div
      className="bg-firstBg rounded-md text-text w-60 h-32 flex items-center justify-center font-sans cursor-pointer"
      onClick={handleNavigate}
    >
      {children}
    </div>
  );
};
