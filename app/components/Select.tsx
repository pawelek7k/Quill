"use client";

import { Select, SelectItem } from "@nextui-org/react";

const genres = [
  { key: "fantasy", label: "Fantasy" },
  { key: "sci-fi", label: "Science Fiction" },
  { key: "mystery", label: "Mystery" },
  { key: "thriller", label: "Thriller" },
  { key: "romance", label: "Romance" },
  { key: "horror", label: "Horror" },
  { key: "historical", label: "Historical" },
  { key: "non-fiction", label: "Non-Fiction" },
  { key: "biography", label: "Biography" },
  { key: "self-help", label: "Self-Help" },
  { key: "graphic-novel", label: "Graphic Novel" },
  { key: "poetry", label: "Poetry" },
  { key: "adventure", label: "Adventure" },
  { key: "young-adult", label: "Young Adult" },
  { key: "dystopian", label: "Dystopian" },
];

export const SelectData = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Select a genre"
        className="max-w-xs bg-secondaryBg"
        color={"primary"}
      >
        {genres.map((genre) => (
          <SelectItem key={genre.key}>{genre.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
