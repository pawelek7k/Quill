import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { AuthLink } from "./AuthLink";
import { NavLinks } from "./NavLinks";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
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

export const MobileMenu = ({
  open,
  setOpen,
  products,
  callsToAction,
}: MobileMenuProps) => (
  <Dialog open={open} onClose={setOpen} className="lg:hidden ">
    <div className="fixed inset-0 z-10" />
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:border-s sm:border-myPrimary bg-secondaryBg backdrop-blur-sm z-999 bg-primary-gradient">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only text-text">Writting app</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6 flex flex-col gap-4">
            <Disclosure as="div" className="-mx-3">
              <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-gray-900 hover:bg-gray-50 text-xl font-semibold leading-6 text-text ">
                Product
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-2">
                {[...products, ...callsToAction].map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>
            <NavLinks href={"#"}>Explore</NavLinks>
            <AuthLink href={"/create"}>Create</AuthLink>
            <NavLinks href={"/create"}>Company</NavLinks>
          </div>
          <div className="py-6">
            <NavLinks href={"/login"}>Log in</NavLinks>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);
