"use client";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  PlayCircleIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const products = [
  {
    name: "Features",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "About us",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "How we work",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Create book with us",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Contact us",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const HeaderClient = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <DesktopMenu products={products} callsToAction={callsToAction} />
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Button
          radius="full"
          className="bg-secondaryBg text-text"
          onClick={handleNavigate}
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </Button>
      </div>
      <MobileMenu
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
        products={products}
        callsToAction={callsToAction}
      />
    </>
  );
};

export default HeaderClient;
