"use client";

import Notiflix from "notiflix";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
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

  const handleDelete = (index: number) => {
    setWords((prevWords) => prevWords.filter((_, i) => i !== index));
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
            className="bg-myPrimary rounded-full py-1 min-w-12 text-center flex flex-nowrap items-center gap-1 px-2"
            key={index}
          >
            <span className="text-nowrap">{word}</span>
            <div onClick={() => handleDelete(index)} className="cursor-pointer">
              <RxCross2 />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
