import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import CallsToAction from "./CallsToAction";
import { NavLinks } from "./NavLinks";
import { ProductItem } from "./ProductItem";

interface DesktopMenuProps {
  products: {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }[];
  callsToAction: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
}

export const DesktopMenu = ({ products, callsToAction }: DesktopMenuProps) => (
  <PopoverGroup className="hidden lg:flex lg:gap-x-12">
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <NavLinks>Features</NavLinks>
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-400"
        />
      </PopoverButton>
      <PopoverPanel
        transition
        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg border-primary border-x transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in bg-secondaryBg backdrop-blur-sm z-999"
      >
        <div className="p-4">
          {products.map((item) => (
            <ProductItem key={item.name} item={item} />
          ))}
        </div>
        <CallsToAction calls={callsToAction} />
      </PopoverPanel>
    </Popover>
    <NavLinks>Marketplace</NavLinks>
    <NavLinks>Company</NavLinks>
  </PopoverGroup>
);
