"use client";

import Notiflix from "notiflix";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { InputContainer } from "./Input";

export const Tags = () => {
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue.length > 2) {
        setWords((prevWords) => [...prevWords, trimmedValue]);
        setInputValue("");
      } else {
        Notiflix.Notify.warning("Memento te hominem esse");
        e.preventDefault();
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <InputContainer
        type={"text"}
        name={""}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        label={"Tags"}
        autocomplate={"off"}
      />
      <div className="flex gap-2 ">
        {words.map((word, index) => (
          <div
            className="bg-myPrimary rounded-full p-1 min-w-12 text-center"
            key={index}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};
