import { nanoid } from "nanoid";

interface InputProps {
  label: string;
  type: string;
  name: string;
}

export const InputContainer = ({ label, type, name }: InputProps) => {
  const nanoId = nanoid();
  return (
    <>
      <label htmlFor={nanoId} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={nanoId}
          name={name}
          type={type}
          required
          className="block w-full rounded-md border-0 p-2 font-medium shadow-sm sm:text-sm sm:leading-6 outline-none bg-text text-secondaryBg"
        />
      </div>
    </>
  );
};
