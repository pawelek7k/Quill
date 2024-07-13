"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

interface ImagePickerProps {
  label: string;
  name: string;
}

export const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <div className="w-[240px] h-[350px] relative">
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          className="hidden"
          onChange={handleImageChange}
          required
        />
        <button type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};
