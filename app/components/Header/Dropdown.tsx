"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaUserLarge } from "react-icons/fa6";

export const DropdownContainer = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/login");
  };
  return (
    <Dropdown
      backdrop="blur"
      className="bg-secondaryBg backdrop-blur-sm z-999  border-myPrimary border-x"
    >
      <DropdownTrigger>
        <Button variant="bordered" className="rounded-full">
          <FaUserLarge className="fill-text" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="language">Language</DropdownItem>
        <DropdownItem key="theme">Theme</DropdownItem>
        <DropdownItem key="login" onClick={handleNavigate}>
          Log in
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
