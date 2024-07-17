"use client";

import { ChangeEvent, useState } from "react";
import { InputContainer } from "./Input";

export const Tags = () => {
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.endsWith(" ")) {
      setWords((prevWords) => [...prevWords, value.trim()]);
      setInputValue("");
    } else {
      setInputValue(value);
    }
  };

  return (
    <>
      <InputContainer
        type={"text"}
        name={""}
        value={inputValue}
        onChange={handleChange}
        label={"Tags"}
        autocomplate={"off"}
      />
      <div className="bg-myPrimary">
        {words.map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </div>
    </>
  );
};
