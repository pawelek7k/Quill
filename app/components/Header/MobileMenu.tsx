import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { NavLinks } from "./NavLinks";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MobileMenu = ({ open, setOpen }: MobileMenuProps) => (
  <Dialog open={open} onClose={setOpen} className="lg:hidden ">
    <div className="fixed inset-0 z-10" />
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white bg-secondaryBg">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
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
          <div className="space-y-2 py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-accent"
            >
              Features
            </a>
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Company
            </a>
          </div>
          <div className="py-6">
            <NavLinks>Log in</NavLinks>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);
