"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

export const BreadcrumbContainer = () => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("song");

  return (
    <Breadcrumbs
      className="mt-10"
      underline="active"
      onAction={(key) => setCurrentPage(key)}
      itemClasses={{
        item: "text-myPrimary data-[current=true]:text-accent",
        separator: "text-white/40",
      }}
    >
      <BreadcrumbItem key="home" isCurrent={currentPage === "/"} href="/">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem
        key="create"
        isCurrent={currentPage === "/create"}
        href="/create"
      >
        Create
      </BreadcrumbItem>
      <BreadcrumbItem key="artist" isCurrent={currentPage === "artist"}>
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem key="album" isCurrent={currentPage === "album"}>
        Album
      </BreadcrumbItem>
      <BreadcrumbItem key="song" isCurrent={currentPage === "song"}>
        Song
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};
