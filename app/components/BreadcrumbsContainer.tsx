"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BreadcrumbContainer = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Breadcrumbs
      itemClasses={{
        item: "text-myPrimary data-[current=true]:text-accent",
        separator: "text-white/40",
      }}
    >
      <BreadcrumbItem key="home">
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      {segments.map((item, index) => (
        <BreadcrumbItem key={item}>
          {index === segments.length - 1 ? (
            <span>{capitalize(item)}</span>
          ) : (
            <Link href={`/${segments.slice(0, index + 1).join("/")}`}>
              {capitalize(item)}
            </Link>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};
