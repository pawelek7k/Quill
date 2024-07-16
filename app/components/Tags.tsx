"use client";

import { ChangeEvent, useState } from "react";
import { InputContainer } from "./Input";

export const Tags = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>{inputValue}</div>

      <InputContainer
        type={"text"}
        name={""}
        value={inputValue}
        onChange={handleChange}
        label={"Tags"}
        autocomplate={"off"}
      />
    </>
  );
};
